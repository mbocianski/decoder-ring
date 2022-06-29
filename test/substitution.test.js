const expect = require("chai").expect;
const { substitution } = require("../src/substitution");


describe("substitution() tests by MB", () => {
    
    describe("Error Handling", () => {
        it("1) should return false if alphabet does not contain 26 characters", () =>{
            const input = "Hello World";
            const alphabet = "abcd"
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
            });

        it("2) shold return false if no alphabet is given", () =>{
            const input = "Hello World";
            const actual = substitution(input);
            expect(actual).to.be.false;
            });

        it("3) should return false if alphabet does not contain unique characters", () =>{
            const input = "Hello World";
            const alphabet = "fjeeisoekgnshejfuskeifjwff"
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
            });
    });  
          
    describe("Encoding Messages", () => {
        it("1) should maintain spaces", () =>{
            const input = "Hello World";
            const alphabet = "qwertyuiop123456789zxcvbnm"
            const actual = substitution(input, alphabet);
            const expected = "it225 v582r";
            expect(actual).to.equal(expected);
            });

        it("2) should encode a message when provided an alphabet", () =>{
            const input = "Hello World";
            const alphabet = "qwertyuiop123456789zxcvbnm"
            const actual = substitution(input, alphabet);
            const expected = "it225 v582r";
            expect(actual).to.equal(expected);
            });

        it("3)Should accept any combination of unique characters for an alphabet", () =>{
            const input = "Hello World";
            const alphabet = "qwer#yuiop1234'6789zxcvbn$"
            const actual = substitution(input, alphabet);
            const expected = "i#22' v'82r"
            expect(actual).to.equal(expected);
            });

    });    


    describe("Decoding Messages", () => {
        it("1) should maintain spaces", () =>{
            const input = "it225 v582r";
            const alphabet = "qwertyuiop123456789zxcvbnm"
            const actual = substitution(input, alphabet, false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
            });

        it("2) should decode a message when provided an alphabet", () =>{
            const input = "it225 v582r";
            const alphabet = "qwertyuiop123456789zxcvbnm"
            const actual = substitution(input, alphabet, false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
            });

        it("3)Should accept any combination of unique characters for an alphabet", () =>{
            const input = "i#22' v'82r";
            const alphabet = "qwer#yuiop1234'6789zxcvbn$"
            const expected = "hello world"
            const actual = substitution(input, alphabet, false);
            expect(actual).to.equal(expected);
            });
    });    
});  

  