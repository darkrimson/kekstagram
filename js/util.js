const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const usedIds = new Set();
const getRandomId = () => {
  let id;
  do {
    id = getRandomInteger(1, 25); // Генерируем случайный идентификатор
  } while (usedIds.has(id)); // Проверяем, не использовался ли уже такой идентификатор
  usedIds.add(id);
  return id;
};

const CreateComment = (names, messages) => ({
  id: getRandomInteger(1, 25),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: messages[getRandomInteger(0, messages.length - 1)],
  name: names[getRandomInteger(0, names.length - 1)],
});

const createComments = (names, messages, minComments, maxComments) => {
  const count = getRandomInteger(minComments, maxComments);
  const comments = Array.from({ length: count }, () => CreateComment(names, messages));
  return comments;
};



export { getRandomInteger, getRandomId, createComments };
