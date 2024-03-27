import { closeModal } from "./util.js";

const imgUploadInput = document.querySelector(".img-upload__input");
const previewImg = document.querySelector(".img-upload__preview img");
const imgOverlay = document.querySelector(".img-upload__overlay");
const closedButton = document.querySelector(".img-upload__cancel");

imgUploadInput.addEventListener("change", (event) => {
  imgOverlay.classList.remove("hidden");
  document.body.classList.add("modal-open");

  const file = event.target.files[0];

  if (!file.type.startsWith("image/")) {
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    previewImg.src = reader.result;
  };

// Закрытие окна по Esc и клику на иконку
closedButton.addEventListener("click", () => closeModal(imgOverlay, closedButton));

// Используем closeModal вместо onEscPress
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    closeModal(imgOverlay, closedButton);
  }
});

  reader.readAsDataURL(file);
});

// const close = () => {
//   imgOverlay.classList.add("hidden");
//   document.body.classList.remove("modal-open");

//   // Удаление обработчиков событий
//   imgUploadInput.removeEventListener("click", close);
//   document.removeEventListener("keydown", onEscPress);
// };

// const onEscPress = (evt) => {
//   if (evt.keyCode === 27) {
//     close();
//   }
// };
