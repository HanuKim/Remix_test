function calculate(spending, budget) {
  if (budget) {
    return budget - spending;
  }
  return spending;
}

module.exports = calculate;
