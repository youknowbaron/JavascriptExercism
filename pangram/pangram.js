//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sequence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    [...sequence].forEach(function (c) {
        alphabet = alphabet.replace(c.toLowerCase(), '');
    });
    return alphabet.length === 0
};