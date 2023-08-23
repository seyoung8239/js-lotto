export const generateRandomNum = (from, to) => {
  return from + Math.floor(Math.random() * to);
};

export const assertUniqueNumbers = (numbers) => {
  if (new Set([...numbers]).size !== numbers.length)
    throw Error("lotto numbers are not unique", numbers);
};

export const assertNumbersLength = (numbers, len) => {
  if (numbers.length !== len) throw Error("invalid lotto number length");
};

export const assertNumberRange = (number, from, to) => {
  if (number > to || number < from) throw Error("invalid lotto number range");
};
