window.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");

  if (navbarContainer) {
    fetch("reuse.html")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not OK");
        return res.text();
      })
      .then((html) => {
        navbarContainer.innerHTML = html;
      })
      .catch((err) => console.error("Failed to load navbar:", err));
  }
});