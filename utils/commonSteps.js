const validateField = (items, field) => {
  items.forEach((item) => {
    expect(item[field]).toBeDefined();
    expect(item[field]).not.toBeNull();
    expect(item[field]).not.toBe('');
  });
};

const validateDateOrder = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  expect(startDate).toBeInstanceOf(Date);
  expect(endDate).toBeInstanceOf(Date);
  expect(startDate.getTime()).toBeLessThan(endDate.getTime());
};

module.exports = { validateField, validateDateOrder };
