let stageCount = 1;

const envelope = document.querySelector(".envelope");
envelope.classList.toggle("stage-1");

envelope.addEventListener("click", () => {
  if (stageCount === 1) {
    envelope.classList.toggle("stage-1");
    envelope.classList.toggle("stage-2");
    stageCount++;
  }
});
