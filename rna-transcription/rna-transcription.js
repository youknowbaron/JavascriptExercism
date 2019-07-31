//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (s) => {
    let convert = '';
    [...s].forEach(function (c) {
        convert = convert + RNA[c];
    });
    return convert
};

const RNA = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};
