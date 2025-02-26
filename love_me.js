const headElement = document.querySelector(".head");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// No button movement (stays within the container)
noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".button-container");
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${Math.random() * maxX}px`;
    noBtn.style.top = `${Math.random() * maxY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
    // Hide the head section along with the question container
    headElement.style.display = "none";
    questionContainer.style.display = "none";
    heartLoader.style.display = "block";

    setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "block";
        gifResult.play();
    }, 2000);
});