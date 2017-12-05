'use strict'

const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const express = require('express');
const formidable = require('formidable');
const fs = require('fs')

const { MONGO_CREDS, API_PORT, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_APP_SECRET } = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_CREDS, { useMongoClient: true, /* other options */ });

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_APP_SECRET
})

const formidableConfig = (req, res, next) => {
  let form = formidable.IncomingForm();
  //form.uploadDir = path.resolve(__dirname, '..', 'images');
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(fields)
    if (err) {
      return res.status(400).send();
    }
    req.fields = fields;
    req.files = files;
    next();
  });
};

//app.use(formidableConfig);

app.use([
  //bodyParser(),
  //formidable(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  //formidable(),
  //express.bodyParser(),
  require('./setHeaders'),
]);




app.use('/', require('./routes/root'));
app.use('/api', require('./routes/api_router'));

app.use(require('./errorHandlers'));



app.listen(API_PORT, () => console.log(`API Running on ${API_PORT}`) );

app.post('/api/upload', function(req, res){
  const dir = __dirname + "/uploads"
  var form = new formidable.IncomingForm();
  form.uploadDir = dir;
  form.on('fileBegin', function (name, file){
      file.path = dir + file.name;
  });
    form.parse(req, function(err, fields, files) {
      cloudinary.v2.uploader.upload(files.pdf.path, {public_id: files.pdf.name.split('.')[0]}, (error, result) => res.send(result));
    });
});
