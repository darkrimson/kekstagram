import { getRandomInteger, getRandomId, createComments } from "./util.js";
import { names, messages, descriptions } from './data.js';

  const createImage = (index) => ({
    id: getRandomId(),
    url: `photos/${index + 1}.jpg`,
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: createComments(names, messages, 0, 25),
  });
  
  const images = Array.from({ length: 25 }, (el, index) => createImage(index));

  export default images;
  