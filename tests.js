// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//new*
describe('isSeven', function() {
    it('should be defined as function', function() {
        expect(typeof isSeven).toBe('function');
    })
    it('should return a boolean data type', function() {
        expect(typeof isSeven()).toBe(`boolean`);
    })
    it('should return false if passed the number 5', function() {
        expect(isSeven(5)).toBe(false);
    })
    it('should return true if passed the number 7', function() {
        expect(isSeven(7)).toBe(true);
    })
    it('should return true is passed "7"', function() {
        expect(isSeven(`7`)).toBe(true);
    })
});

//Test Drive a sayHello function
describe('sayHello', function() {
    it(`should be defined as a function`, function () {
        expect(typeof sayHello).toBe('function');
    })
    it(`should return a string when called`, function() {
        expect(typeof sayHello()).toBe("string");
    })
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello()).toBe("Hello, Jane!");
    })
    it('should return the string "Hello, Alex! when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
});