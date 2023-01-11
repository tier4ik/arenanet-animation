const main = document.querySelector(".main");
const blackAndWhiteImg = document.querySelector(".bw");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        blackAndWhiteImg.classList.add("animated");
      }
    });
  },
  {
    rootMargin: "-40%",
  }
);

observer.observe(main);
