import dayjs from "dayjs";

const getRandomInteger = () => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

const generateDescription = () => {
  const descriptions = [ `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

   return descriptions[randomIndex];
};

const generateDate = () => {  
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, `day`).toDate();
};

const generateRepeating = () => {
  return {
    mo: Boolean(getRandomInteger(0, 1)),
    tu: Boolean(getRandomInteger(0, 1)),
    we: Boolean(getRandomInteger(0, 1)),
    th: Boolean(getRandomInteger(0, 1)),
    fr: Boolean(getRandomInteger(0, 1)),
    sa: Boolean(getRandomInteger(0, 1)),
    su: fBoolean(getRandomInteger(0, 1))
  };
};

const generateColor = () => {
  const colors = [ `black`,`yellow`,`blue`,`green`,`pink`];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

   return colors[randomIndex];
};

export const generateTask = () => {
  const dueDate = generateDate();   
   const repeating = dueDate === null
     ? generateRepeating()
     : {
       mo: false,
       tu: false,
       we: false,
       th: false,
       fr: false,
       sa: false,
       su: false
     };


  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: generateColor(),
    isArchive: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
