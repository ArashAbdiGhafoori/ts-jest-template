import { average, notAverage } from "../src/index";


describe("test average function", ()=>{
  test("should return 7 for average(5, 9)", ()=>{

    let actual = average(5, 9);

    let expected = 7;

    expect(actual).toBe(expected);
  })
})

describe("test notAverage function", ()=>{
  test("should return 8 for notAverage(8, 4)", ()=>{

    let actual = notAverage(8, 4);

    let expected = 8;

    expect(actual).toBe(expected);
  })
})