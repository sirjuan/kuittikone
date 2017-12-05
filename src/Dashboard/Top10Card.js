import Top10content from './Top10Content'

import './styles.css';


import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
 CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
        <Card>
          <CardBody>
            <CardTitle>Top10</CardTitle>
            <CardText><Top10content /></CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
  );
};

export default Example;
