import { closeModal } from "./util.js";

const bigPictureElement = document.querySelector(".big-picture");
const closeButtonElement = document.querySelector(".big-picture__cancel");

const commentLoaderButton = document.querySelector(".comments-loader");
const socialCommentCount = document.querySelector(".social__comment-count");
let displayedComments = 0;
let currentPhoto = null;

const open = (photo) => {
  bigPictureElement.classList.remove("hidden");
  document.body.classList.add("modal-open");

  const bigPictureImgElement = bigPictureElement.querySelector(
    ".big-picture__img img"
  );
  bigPictureImgElement.src = photo.url;

  const likesCountElement = bigPictureElement.querySelector(".likes-count");
  likesCountElement.textContent = photo.likes;

  const socialCaptionElement =
    bigPictureElement.querySelector(".social__caption");
  socialCaptionElement.textContent = photo.description;

  // Закрытие окна по клику на крестик
  closeButtonElement.addEventListener("click", () =>
    closeModal(bigPictureElement, closeButtonElement)
  );

  // Используем closeModal вместо onEscPress
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
      closeModal(bigPictureElement, closeButtonElement);
    }
  });

  displayedComments = 0;
  currentPhoto = photo;
  showComments(photo.comments);
};

// const close = () => {
//   bigPictureElement.classList.add("hidden");
//   document.body.classList.remove("modal-open");

//   // Удаление обработчиков событий
//   closeButtonElement.removeEventListener("click", close);
//   document.removeEventListener("keydown", onEscPress);
// };

// const onEscPress = (evt) => {
//   if (evt.keyCode === 27) {
//     close();
//   }
// };

const showComments = (comments) => {
  const socialCommentList = document.querySelector(".social__comments");

  const commentsToShow = comments.slice(
    displayedComments,
    5 + displayedComments
  );
  commentsToShow.forEach((comment) => {
    socialCommentList.appendChild(createComment(comment));
  });

  displayedComments += commentsToShow.length;
  socialCommentCount.textContent = `${displayedComments} из ${comments.length}`;

  if (displayedComments >= comments.length) {
    commentLoaderButton.classList.add("hidden");
  } else {
    commentLoaderButton.classList.remove("hidden");
  }
};

commentLoaderButton.addEventListener("click", () => {
  showComments(currentPhoto.comments);
});

const createComment = (comment) => {
  const commentElement = document.createElement("li");
  commentElement.className = "social__comment";
  commentElement.innerHTML = `
      <img src="${comment.avatar}" alt="${comment.name}" class="social__picture">
      <p class="social__text">${comment.message}</p>
    `;
  return commentElement;
};

export { open, createComment };

