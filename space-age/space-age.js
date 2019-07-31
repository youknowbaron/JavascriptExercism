//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
    let earth = seconds / 31557600;
    let ageOf = 0;
    switch (planet) {
        case 'earth':
            ageOf =  earth;
            break;
        case 'mercury':
            ageOf =  earth / 0.2408467;
            break;
        case 'venus':
            ageOf =  earth / 0.61519726;
            break;
        case 'mars':
            ageOf =  earth / 1.8808158;
            break;
        case 'jupiter':
            ageOf =  earth / 11.862615;
            break;
        case 'saturn':
            ageOf =  earth / 29.447498;
            break;
        case 'uranus':
            ageOf =  earth / 84.016846;
            break;
        case 'neptune':
            ageOf =  earth / 164.79132;
            break;
    }
    return parseFloat(ageOf.toFixed(2));
};
