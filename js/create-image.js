import { getRandomInteger, getRandomId, comments } from "./util.js";
import { descriptions } from "./data.js";

  const createImage = () => ({
    id: getRandomId(),
    url: "photos/" + getRandomInteger(1, 25) + ".jpg",
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: comments,
  });
  
  const images = Array.from({ length: 25 }, () => createImage());

  export default images;