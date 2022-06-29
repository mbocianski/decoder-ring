// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");


describe("caesar() tests by MB", () => {
    describe("error handing", () => {
        it("1) should return false if shift value is missing", () =>{
            const input = "Hello World!";
            const actual = caesar(input);
            expect(actual).to.be.false;
            });

        it("2) should return false if shift value is 0", () =>{
            const input = "Hello World!";
            const shift = 0;
            const actual = caesar(input,shift);
            expect(actual).to.be.false;
            });

        it("3) should return false if shift value less than -25", () =>{
                const input = "Hello World!";
                const shift = -26;
                const actual = caesar(input,shift);
                expect(actual).to.be.false;
                });

        it("4) should return false if shift value greater than than 25", () =>{
            const input = "Hello World!";
            const shift = 26;
            const actual = caesar(input,shift);
            expect(actual).to.be.false;
            });
    });  

    describe("Encoding Messages", () => {
        it("1) Should maintain spaces and nonalphabetic characters", () =>{
            const input = "Hello World!";
            const shift = 5;
            const actual = caesar(input, shift);
            const expected = "mjqqt btwqi!";
            expect(actual).to.equal(expected);
            });

        it("2) Should ignore capital letters", () =>{
        const input = "Hello World!";
        const shift = 5;
        const actual = caesar(input, shift);
        const expected = "mjqqt btwqi!";
        expect(actual).to.equal(expected);
        });

        it("3) Should wrap letters as needed", () =>{
            const input = "wxyz";
            const shift = 4;
            const actual = caesar(input, shift);
            const expected = "abcd";
            expect(actual).to.equal(expected);
            });

        it("4) Should shift to the left for negative numbers", () =>{
            const input = "this is backwards";
            const shift = -5;
            const actual = caesar(input, shift);
            const expected = "ocdn dn wvxfrvmyn";
            expect(actual).to.equal(expected);
            });
    });        
    
    describe("Decoding Messages", () => {
        it("1) Should maintain spaces and nonalphabetic characters", () =>{
            const input = "mjqqt btwqi!";
            const shift = 5;
            const actual = caesar(input, shift, false);
            const expected = "hello world!";
            expect(actual).to.equal(expected);
            });

        it("2) Should ignore capital letters", () =>{
        const input = "Mjqqt Btwqi!";
        const shift = 5;
        const actual = caesar(input, shift, false);
        const expected = "hello world!";
        expect(actual).to.equal(expected);
        });

        it("3) Should wrap letters as needed", () =>{
            const input = "abcd";
            const shift = 4;
            const actual = caesar(input, shift, false);
            const expected = "wxyz";
            expect(actual).to.equal(expected);
            });

        it("4) Should shift to the left for negative numbers", () =>{
            const input = "ocdn dn wvxfrvmyn";
            const shift = -5;
            const actual = caesar(input, shift, false);
            const expected = "this is backwards";
            expect(actual).to.equal(expected);
            });
    });    
});  

  