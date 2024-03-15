const bigPictureElement = document.querySelector(".big-picture");
const closeButtonElement = document.querySelector(".big-picture__cancel");


const open = (photo) => {
  bigPictureElement.classList.remove("hidden");
  document.body.classList.add("modal-open");


  const bigPictureImgElement = bigPictureElement.querySelector(
    ".big-picture__img img"
  );
  bigPictureImgElement.src = photo.url;

  const likesCountElement = bigPictureElement.querySelector(".likes-count");
  likesCountElement.textContent = photo.likes;

  const commentsCountElement =
    bigPictureElement.querySelector(".comments-count");
  commentsCountElement.textContent = photo.comments.length;

  const socialCaptionElement =
    bigPictureElement.querySelector(".social__caption");
  socialCaptionElement.textContent = photo.description;

  const socialCommentCount = bigPictureElement.querySelector(".social__comment-count");
  socialCommentCount.classList.add("hidden");

  const commentsLoader = bigPictureElement.querySelector(".comments-loader");
  commentsLoader.classList.add("hidden");

  // Закрытие окна по Esc и клику на иконку
  closeButtonElement.addEventListener("click", close);
  document.addEventListener("keydown", onEscPress);
};

const close = () => {
  bigPictureElement.classList.add("hidden");
  document.body.classList.remove("modal-open");

  // Удаление обработчиков событий
  closeButtonElement.removeEventListener("click", close);
  document.removeEventListener("keydown", onEscPress);
};

const onEscPress = (evt) => {
  if (evt.keyCode === 27) {
    close();
  }
};

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
