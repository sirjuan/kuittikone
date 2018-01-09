const handleShopName = ({acc, line}) => ({
  ...acc,
  shop: {
    name: line,
    type: {} 
  }
})

export default handleShopName;
