//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let dateAfter = date.getTime() + 1000000000000;
  return new Date(dateAfter)
};
