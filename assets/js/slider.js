document.addEventListener("DOMContentLoaded", function () {
  const slider = {
    currentSlide: 0,
    track: document.querySelector(".slider-track"),
    prevBtn: document.querySelector(".slider-prev"),
    nextBtn: document.querySelector(".slider-next"),
    slideCount: 2,
    autoPlayInterval: null,

    init() {
      // Add event listeners
      this.prevBtn.addEventListener("click", () => this.navigate("prev"));
      this.nextBtn.addEventListener("click", () => this.navigate("next"));

      // Start autoplay
      this.startAutoPlay();

      // Pause autoplay on hover
      this.track.addEventListener("mouseenter", () => this.stopAutoPlay());
      this.track.addEventListener("mouseleave", () => this.startAutoPlay());
    },

    navigate(direction) {
      this.currentSlide =
        direction === "next"
          ? (this.currentSlide + 1) % this.slideCount
          : (this.currentSlide - 1 + this.slideCount) % this.slideCount;

      this.updateSlider();
    },

    goToSlide(index) {
      this.currentSlide = index;
      this.updateSlider();
    },

    updateSlider() {
      // Update track position
      this.track.style.transform = `translateX(-${this.currentSlide * 50}%)`;
    },

    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => this.navigate("next"), 5000);
    },

    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },
  };

  // Initialize the slider
  slider.init();
});
