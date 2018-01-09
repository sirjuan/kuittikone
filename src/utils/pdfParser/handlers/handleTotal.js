const handleTotal = ({acc, splitLine}) => ({
  ...acc,
  total: Number(splitLine[1].replace(',','.').replace(' EUR', ''))
})

export default handleTotal;
