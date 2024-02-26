const descriptions = [
    "Роскошный закат на озере с отражением облаков в воде",
    "Золотистые листья осеннего леса на фоне яркого солнечного неба",
    "Вдохновляющий вид на горы покрытые снегом в холодный зимний день",
    "Симпатичный котенок лежит на пушистом пледе и мурлычет",
    "Красочные фейерверки освещают ночное небо на фоне города",
    "Идеальное сочетание цветов в цветочном саду",
    "Загадочный лес с проникающими лучами солнца сквозь ветви",
    "Волшебное замковое зеркало с отражением старинных стен",
    "Счастливая семья, наслаждающаяся деньком на пляже",
  ];
  
  const messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  ];
  
  const names = [
    "Анна",
    "Виктор",
    "Екатерина",
    "Иван",
    "Кирилл",
    "Мария",
    "Никита",
  ];
  
  const usedIds = new Set();
  
  const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };
  
  const getCreateComment = () => ({
    id: getRandomInteger(1, 25),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: messages[getRandomInteger(0, messages.length - 1)],
    name: names[getRandomInteger(0, names.length - 1)],
  });
  
  const getRandomId = () => {
    let id;
    do {
      id = getRandomInteger(1, 25); // Генерируем случайный идентификатор
    } while (usedIds.has(id)); // Проверяем, не использовался ли уже такой идентификатор
    usedIds.add(id);
    return id;
  };
  
  const comments = Array.from({ length: getRandomInteger(0, 30) }, () =>
    getCreateComment()
  );
  
  const createImage = () => ({
    id: getRandomId(),
    url: "photos/" + getRandomInteger(1, 25) + ".jpg",
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: comments,
  });
  
  const images = Array.from({ length: 25 }, () => createImage());

  export default images;