const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// No butonunun yerini değiştir
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes butonuna tıklanınca
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";
  gifResult.play();
  setTimeout(() => {
    window.location.href = "https://www.belleamour.com";
  }, 2000); // 2 saniye sonra yönlendir
});
