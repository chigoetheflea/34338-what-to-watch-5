const MONTHES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const isItNeedsZero = (source) => {
  return source < 10 ? `0` + source : source;
};

const getFormatedDate = (date, format) => {
  const currentDate = new Date(date);

  switch (format) {
    case `in-front`:
      return `${MONTHES[currentDate.getMonth()]} ${isItNeedsZero(currentDate.getDate())}, ${currentDate.getFullYear()}`;

    case `in-attr`:
      return `${currentDate.getFullYear()}-${isItNeedsZero(currentDate.getMonth() + 1)}-${isItNeedsZero(currentDate.getDate())}`;
  }

  return null;
};

export {
  isItNeedsZero,
  getFormatedDate
};
