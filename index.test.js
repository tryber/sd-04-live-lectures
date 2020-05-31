const math = require('./index')

jest.mock("./index")


test('1', () =>{
    isDivisibleMock = jest.spyOn(math, 'isDivisible')
    randomNumberMock = jest.spyOn(math, 'randomNumber')
    // Executar isDivisible sem mockar
    // A randomNumber tenho que ver se foi chamada
    math.isDivisible(50)
    // expect(math.isDivisible(50)).toBe(true)
    expect(math.randomNumber).toHaveBeenCalled();
})