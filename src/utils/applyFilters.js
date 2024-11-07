import fieldMapping from '../data/fieldMapping';

const applyFilters = (data, conditions) => {
  console.log("Applying Filters:", conditions);
  return data.filter(stock => {
    return conditions.every(({ field, operator, value }) => {
      const mappedField = fieldMapping[field];
      const stockValue = parseFloat(stock[mappedField] || 0);
      const stockName = stock['Ticker'] || "Unnamed Stock"; 
      
      switch (operator) {
        case '>':
          return stockValue > value;
        case '<':
          return stockValue < value;
        case '=':
          return stockValue === value;
        default:
          return false;
      }
    });
  });
};

export default applyFilters;
