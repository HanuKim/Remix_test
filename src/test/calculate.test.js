const calculate = require("../utils/calculate");
const { faker } = require("@faker-js/faker");

describe("지출을 입력했을 때", () => {
  test("예산을 입력하지 않았다면 지출내역만 추가한다", () => {
    let spending = faker.number.int();
    expect(calculate(spending)).toBe(spending);
  });

  test("예산을 입력했다면 예산에서 지출을 뺀 값을 반환한다", () => {
    let spending = faker.number.int();
    let budget = faker.number.int();
    expect(calculate(spending, budget)).toBe(budget - spending);
  });
});
