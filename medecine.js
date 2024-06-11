const courseBoxTitles = document.querySelectorAll(".course-box_title");

courseBoxTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");
  });
});