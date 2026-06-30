(function () {
  if (window.__backToTopInitialized) {
    return;
  }
  window.__backToTopInitialized = true;

  const style = document.createElement("style");
  style.textContent = `
    .back-to-top {
      position: fixed;
      right: 20px;
      bottom: 24px;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 999px;
      background: #6b4f3d;
      color: #fff;
      box-shadow: 0 10px 24px rgba(107, 79, 61, 0.24);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      line-height: 1;
      opacity: 0;
      visibility: hidden;
      transform: translateY(8px);
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
      z-index: 1200;
    }

    .back-to-top.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .back-to-top:hover {
      background: #5a4033;
    }

    @media (max-width: 560px) {
      .back-to-top {
        right: 14px;
        bottom: 16px;
        width: 44px;
        height: 44px;
        font-size: 18px;
      }
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement("button");
  button.className = "back-to-top";
  button.type = "button";
  button.setAttribute("aria-label", "回到顶部");
  button.innerHTML = "↑";
  document.body.appendChild(button);

  function toggleButton() {
    if (window.scrollY > 240) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  }

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleButton();
  window.addEventListener("scroll", toggleButton, { passive: true });
  window.addEventListener("resize", toggleButton);
})();
