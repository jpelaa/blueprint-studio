import { deepCopy } from "../generics";

describe("#deepCopy", () => {
  test("DeepCopy return should be same data", () => {
    const obj = { name: "jo" };
    expect(deepCopy(obj)).toStrictEqual(obj);
  });
});
