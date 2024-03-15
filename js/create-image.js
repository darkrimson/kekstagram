import images from "./generation-image.js";
import { open, createComment } from "./render-big-picture.js";

let templatePicture = document.querySelector("#picture").content;
let templatePictureContent = templatePicture.querySelector(".picture");
let fragment = document.createDocumentFragment();
let picturesSection = document.querySelector(".pictures");

for (let i = 0; i < images.length; i++) {
  let element = templatePictureContent.cloneNode(true);
  let image = element.querySelector(".picture__img");
  let likes = element.querySelector(".picture__likes");
  let comments = element.querySelector(".picture__comments");

  image.src = images[i].url;
  image.alt = images[i].description;
  likes.textContent = images[i].likes;
  comments.textContent = images[i].comments.length;

  element.addEventListener("click", () => {
    open(images[i]);

    const socialCommentList = document.querySelector(".social__comments");
    socialCommentList.innerHTML = "";

    for (let j = 0; j < images[i].comments.length; j++) {
      const commentElement = createComment(images[i].comments[j]);
      socialCommentList.appendChild(commentElement);
    }
  });

  fragment.append(element);

  picturesSection.append(fragment);
}
