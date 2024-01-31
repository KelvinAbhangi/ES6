const MacBook = [
    { Model: 'macbook air', price: '90000',Processor:'M1 Chip',Year : '2020'},
    { Model: 'macbook air', price: '140000',Processor:'M2 Chip',Year : '2022'},
    { Model: 'macbook Pro', price: '100000',Processor:'M1 Pro Chip',Year : '2020'},
    { Model: 'macbook Pro', price: '160000',Processor:'M2 Pro Chip',Year : '2022'},
  ];
  
  const highestPricedModel = MacBook.reduce((maxPriceModel, currentModel) => {
    const currentPrice = parseInt(currentModel.price);
    const maxPrice = parseInt(maxPriceModel.price);
  
    return currentPrice > maxPrice ? currentModel : maxPriceModel;
  }, MacBook[0]);
  
  console.log(highestPricedModel);
/******************************************************************************* */

const lowPricedModel = MacBook.reduce((minPriceModel, currentModel) => {
    const currentPrice = parseInt(currentModel.price);
    const minPrice = parseInt(minPriceModel.price);
  
    return currentPrice < minPrice ? currentModel : minPriceModel;
  }, MacBook[0]);
  
  console.log(lowPricedModel);