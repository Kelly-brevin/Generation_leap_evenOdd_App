function checkleapYear(number) {
  if (number % 4 === 0 && (number % 100 !== 0 || number % 400 === 0)) {
    return `${number} is a leap year!`;
  } else {
    return `${number} is not a leap year`;
  }
}

export { checkleapYear };
