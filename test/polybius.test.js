const expect = require("chai").expect;
const { polybius } = require("../src/polybius");


describe("polybius() tests by MB", () => {
    describe("Encoding Messages", () => {
        it("1) Should maintain spaces", () =>{
            const input = "Hello World";
            const actual = polybius(input);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
            });

        it("2) Should ignore capital letters", () =>{
            const input = "Hello World";
            const actual = polybius(input);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
            });

        it("3) should return a string", () =>{
            const input = "Hello World!";
            const actual = polybius(input);
            expect(actual).to.be.a('string');
            });

        it("4) Should return 42 for both I and J", () =>{
            const input = "just jiggle";
            const actual = polybius(input);
            const expected = "42543444 424222221351";
            expect(actual).to.equal(expected);
            });
    });        
    
    describe("Decoding Messages", () => {
        it("1) Should maintain spaces", () =>{
            const input = "3251131343 2543241341";
            const actual = polybius(input, false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
            });

        it("2) Should ignore capital letters", () =>{
            const input = "3251131343 2543241341";
            const actual = polybius(input, false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
            });

        it("3) should return false if string minus spaces is odd", () =>{
            const input = "325132123";
            const actual = polybius(input, false);
            expect(actual).to.be.false;
            });

        it("4) Both I and J should be shown when decoding 42", () =>{
            const input = "42543444 424222221351";
            const actual = polybius(input, false);
            const expected = "(i/j)ust (i/j)(i/j)ggle";
            expect(actual).to.equal(expected);
            });
    });    
});  

  