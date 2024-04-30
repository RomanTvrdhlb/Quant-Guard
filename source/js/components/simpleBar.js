import SimpleBar from "simplebar";

const bar = document.getElementById("data-simplebar");
if (bar) {
  const simpleBar = new SimpleBar(bar, { autoHide: false });
  const container = simpleBar.getScrollElement();
  const parent = document.getElementById("data-simplebar").parentNode;
  const span = document.createElement("span");
  span.classList.add("simplebar-line");
  span.style.display = "block";

  const scrollTrack = document.querySelector(".simplebar-track");
  scrollTrack.appendChild(span);
  const scrollbarVisible = document.querySelector(".simplebar-scrollbar");

  function updateSpanWidth() {
    if (scrollbarVisible) {
      const styles = window.getComputedStyle(scrollbarVisible);
      const transformValue = styles.getPropertyValue("transform");
      let tx;

      const match = transformValue.match(
        /matrix\([^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*(-?\d+)(?:px)?,\s*[^,]+\)/
      );
      if (match) {
        tx = parseInt(match[1]);
      }
      let displayValue = parseInt(
        styles.getPropertyValue("width").replace("px", "")
      );
      let widthLine = displayValue + tx - 15;

      span.style.width = `${widthLine}px`;
    }
  }

  window.addEventListener("load", updateSpanWidth);
  window.addEventListener("resize", updateSpanWidth);

  container.addEventListener("scroll", function () {
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth;

    if (isAtEnd) {
      parent.classList.add("active");
    } else {
      parent.classList.remove("active");
    }

    updateSpanWidth();
  });
}
