import dayjs from "dayjs";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const isExpired = (dueDate) => {
  return dueDate === null ? false : dayjs().isAfter(dueDate, `D`);
};

export const isRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const humanizeTaskDueDate = (dueDate) => {
  return dayjs(dueDate).format(`D MMMM`);
};

export const isExpiringToday = (dueDate) => {
  return dueDate === null ? false : dayjs(dueDate).isSame(dayjs(), `D`);
};
