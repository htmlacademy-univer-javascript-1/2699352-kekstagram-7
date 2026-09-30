// 1) Функция на проверку длины строки
const stringValidation = (testString, maxLength) => testString.length <= maxLength;
console.log(stringValidation('dsajdjsajkdajkajkds', 32));
console.log(stringValidation('dsajdjsajkdajkajkds', 19));
console.log(stringValidation('dsajdjsajkdajkajkds', 10));


// 2) Функция на проверку палиндрома

const isPalindrom = (testString) => {
  const normalizedString = testString.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }
  return newString === normalizedString;
};
console.log(isPalindrom('топот'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('Кекс'));
console.log(isPalindrom('Лёша на полке клопа нашёл '));


// 3) Функция с цифрами/числами

const selectionOfNumber = (testString) => {
  const str = testString.toString();
  let result = '';
  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  return parseInt(result, 10);
};

console.log(selectionOfNumber('2023 год'));
console.log(selectionOfNumber('ECMAScript 2022'));
console.log(selectionOfNumber('1 кефир, 0.5 батона'));
console.log(selectionOfNumber('агент 007'));
console.log(selectionOfNumber('а я томат'));
console.log(selectionOfNumber(2023));
console.log(selectionOfNumber(-1));
console.log(selectionOfNumber(1.5));
