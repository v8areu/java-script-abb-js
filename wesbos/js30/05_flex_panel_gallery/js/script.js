document.addEventListener("DOMContentLoaded", function(e) {
  const panels = document.querySelectorAll(".panel");

  function toggleOpen() {
    this.classList.toggle("open");
  }

  // transition -> flex-grow and font-size
  function toggleOpenActive(e) {
    // safari -> flex
    // rest -> flex-grow (even though the css is flex
    // so we need to include both with the includes)
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  // toggleOpen and toggleOpenActive without () because it's only a reference to a function
  // if add () -> run at page load
  panels.forEach(panel => panel.addEventListener("click", toggleOpen));
  panels.forEach(panel => panel.addEventListener("transitionend", toggleOpenActive));
});
