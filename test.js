import { askedBefore, isValidQuestion, getRandomAnswer } from './assets/js/main.js';

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
    if (typeof getRandomAnswer('Is this a question?', "", "") !== 'string') {
        throw new Error('Expected a string');
    }
});

test('askedBefore', () => {
    let q1 = "Do pigs fly?";
    let q2 = "Do pigs say hi?";
    let pa1 = "Reply hazy, try again.";
    let pa2 = "Better not tell you now.";
    let pa3 = "It is certain.";
    // check true if same question asked twice without ask again prompt
    if (askedBefore(q1, q1, pa3) !== true) {
        throw new Error('Expected true since same question asked twice without ask again prompt')
    }
    // check false if different questions asked without ask again prompt
    if (askedBefore(q1, q2, pa3) !== false) {
        throw new Error('Expected false since different questions asked without ask again prompt')
    }
    // check false if same question asked twice with ask again prompt
    if (askedBefore(q1, q1, pa1) !== false) {
        throw new Error('Expected false since user prompted to ask again (again)')
    }
    if (askedBefore(q1, q1, pa2) !== false) {
        throw new Error('Expected false since user prompted to ask again (now)')
    }
    // check false if different questions asked with ask again prompt
    if (askedBefore(q1, q2, pa1) !== false) {
        throw new Error('Expected false since user prompted to ask again (again)')
    }
    if (askedBefore(q1, q2, pa2) !== false) {
        throw new Error('Expected false since user prompted to ask again (now)')
    }
})