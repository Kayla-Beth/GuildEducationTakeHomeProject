const { TestScheduler } = require("jest");

const getAmountOfFood = require('./getAmountOfFood');

//These tests are the standard test cases
test('Get amount of food for 5 small dogs, 3 meduim dogs, 7 large dogs, and 17 lbs leftover food', () => {
    expect(getAmountOfFood(5, 3, 7, 17)).toBe(363.59999999999997);
});

test('Get amount of food with 0 small dogs', () => {
    expect(getAmountOfFood(0, 3, 7, 17)).toBe(303.59999999999997);
});

test('Get amount of food with 0 medium dogs', () => {
    expect(getAmountOfFood(5, 0, 7, 17)).toBe(291.59999999999997);
});

test('Get amount of food with 0 large dogs', () => {
    expect(getAmountOfFood(5, 3, 0, 17)).toBe(111.6);
});

test('Get amount of food with 0 leftover food', () => {
    expect(getAmountOfFood(5, 3, 7, 0)).toBe(384);
});

test('Get amount of food with decimal amount of leftover food', () => {
    expect(getAmountOfFood(5, 3, 7, 17.5)).toBe(363);
});

//These test are edge cases
test('Get amount of food with 0 dogs & 0 leftover food', () => {
    expect(getAmountOfFood(0, 0, 0, 0)).toBe(0);
});

test('Get amount of food with 0 dogs & 17 leftover food', () => {
    expect(getAmountOfFood(0, 0, 0, 17)).toBe(0);
});

test('Get amount of food with more food than needed', () => {
    expect(getAmountOfFood(5, 3, 7, 1000)).toBe(0);
});

test('Get amount of food with millions of dogs', () => {
    expect(getAmountOfFood(2000000, 2000000, 2000000, 0)).toBe(144000000);
});

//These tests are error cases
test('Get amount of food with negative small dogs', () => {
    expect(getAmountOfFood(-5, 3, 7, 17)).toBe("Are you sure your dogs or food is negative?");
});

test('Get amount of food with negative medium dogs', () => {
    expect(getAmountOfFood(5, -3, 7, 17)).toBe("Are you sure your dogs or food is negative?");
});

test('Get amount of food with negative large dogs', () => {
    expect(getAmountOfFood(5, 3, -7, 17)).toBe("Are you sure your dogs or food is negative?");
});

test('Get amount of food with negative leftover food', () => {
    expect(getAmountOfFood(5, 3, 7, -17)).toBe("Are you sure your dogs or food is negative?");
});

test('Get amount of food with null small dogs', () => {
    expect(getAmountOfFood(null, 3, 7, 17)).toBe("Bad input. Dogs or food can't be null");
});

test('Get amount of food with null medium dogs', () => {
    expect(getAmountOfFood(5, null, 7, 17)).toBe("Bad input. Dogs or food can't be null");
});

test('Get amount of food with null large dogs', () => {
    expect(getAmountOfFood(5, 3, null, 17)).toBe("Bad input. Dogs or food can't be null");
});

test('Get amount of food with non integer small dogs', () => {
    expect(getAmountOfFood(5.5, 3, 7, 17)).toBe("Bad input. Dogs must be whole.");
});

test('Get amount of food with non integer medium dogs', () => {
    expect(getAmountOfFood(5, 3.5, 7, 17)).toBe("Bad input. Dogs must be whole.");
});

test('Get amount of food with non integer large dogs', () => {
    expect(getAmountOfFood(5, 3, 7.5, 17)).toBe("Bad input. Dogs must be whole.");
});

//I just wanted to put this one in here. Of course it will give the first error it runs. 
test('Get amount of food with multiple error cases', () => {
    expect(getAmountOfFood(-5, null, 7.5, 17)).toBe("Are you sure your dogs or food is negative?");
});
