const parseQuery = (query) => {

  // Split conditions based on 'AND' keyword (case-insensitive)
  const conditions = query.split(/\s+AND\s+/i);
  
  return conditions.map(condition => {
    // Match the field, operator, and value in each condition
    const match = condition.match(/(.+?)(>|<|=)\s*(\d+(\.\d+)?)/);
    if (match) {
      const [, field, operator, value] = match;
      return { field: field.trim(), operator, value: parseFloat(value) };
    } else {
      console.error(`Failed to parse condition: ${condition}`);
      return null;
    }
  }).filter(Boolean); // Filter out any null results if parsing failed
};

export default parseQuery;
