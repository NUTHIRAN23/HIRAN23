
function togglePopup(popupId, event) {
  const popup = document.getElementById(popupId);
  const button = event.target.closest("div");

  // ปิด popup อื่น ๆ ก่อน
  document.querySelectorAll(".popup-image").forEach(p => {
    p.style.display = "none";
  });

  const rect = button.getBoundingClientRect();
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;

  popup.style.display = "block";

  requestAnimationFrame(() => {
    const popupHeight = popup.offsetHeight;
    popup.style.top = `${rect.top + scrollTop - popupHeight - 10}px`;
    popup.style.left = `${rect.left + scrollLeft + rect.width / 2}px`;
  });
}
  // ✅ ปิด popup เมื่อคลิกที่อื่น
window.addEventListener("click", function (e) {
    const isPopup = e.target.closest(".popup-image");
    const isButton = e.target.closest(".burger-social-buttom, .burger-logo-buttom, .ryvan-logo-buttom, .ryvan-social-buttom");
  
    if (!isPopup && !isButton) {
      document.querySelectorAll(".popup-image").forEach(p => {
        p.style.display = "none";
      });
    }
  });
