import { isValidQuestion, getRandomAnswer } from './assets/js/main.js';

/**
 * @description     Tests the given function and logs the result to the console.
 * @param {*} desc  The description of the test.
 * @param {*} fn    The function to test.
 */
const test = (desc, fn) => {
    try {
        fn();
        console.log(`\x1b[32mPASS\x1b[0m: ${desc}`);
    } catch (err) {
        console.log(`\x1b[31mFAIL\x1b[0m: ${desc}`);
        console.error(err);
    }
};

/* TESTS */
test('isValidQuestion', () => {
    if (isValidQuestion('Is this a question?') !== true) {
        throw new Error('Expected true for a valid question');
    }
    if (isValidQuestion('This is not a question') !== false) {
        throw new Error('Expected false for an invalid question');
    }
});

test('getRandomAnswer', () => {
    if (typeof getRandomAnswer('Is this a question?') !== 'string') {
        throw new Error('Expected a string');
    }
});