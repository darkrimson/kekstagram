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

  //add pictures to DOM

  let templatePicture = document.querySelector("#picture").content;
  let templatePictureContent = templatePicture.querySelector(".picture");
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < images.length; i++) {
    let element = templatePictureContent.cloneNode(true);
    let image = element.querySelector(".picture__img");
    let likes = element.querySelector(".picture__likes");
    let comments = element.querySelector(".picture__comments");

    image.src = "photos/" + (i + 1) + ".jpg";
    image.alt = images[i].description;
    likes.textContent = images[i].likes;
    comments.textContent = images[i].comments.length;

    fragment.append(element);
  }

  export default fragment;
  