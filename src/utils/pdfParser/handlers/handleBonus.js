const handleBonus = ({acc, splitLine}) => ({
  ...acc,
  bonus: Number(splitLine[2]) || Number(splitLine[1].replace(',','.').replace(' EUR', ''))
})

export default handleBonus;
