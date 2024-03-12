import images from "./generation-image.js";

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