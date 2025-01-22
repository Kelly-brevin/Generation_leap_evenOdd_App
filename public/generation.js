function checkGeneration(number) {
  if (number >= 1946 && number <= 1964) {
    return `The year ${number} belongs to the Baby Boomer generation.`;
  } else if (number >= 1965 && number <= 1980) {
    return `The year ${number} belongs to Generation X.`;
  } else if (number >= 1981 && number <= 1996) {
    return `The year ${number} belongs to the Millennial generation.`;
  } else if (number >= 1997 && number <= 2012) {
    return `The year ${number} belongs to Generation Z.`;
  } else {
    return `The year ${number} belongs to another generation.`;
  }
}

export { checkGeneration };
