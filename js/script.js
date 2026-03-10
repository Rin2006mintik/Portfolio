// navbar hide/show
  document.addEventListener("DOMContentLoaded", function() {

  const sections = document.querySelectorAll('#about_1, #works_1, #form_1, #footer__page_1');
  const element = document.querySelector('#hideMe');
  const visibleSections = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });

    if(element){
      element.classList.toggle('hidden', visibleSections.size > 0);
    }

  }, { threshold: 0, rootMargin: "-20% 0px -130% 0px" });

  sections.forEach(section => observer.observe(section));

});

  // photo modal
  const galleryImages = document.querySelectorAll('.container-fluid .works__block img');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = modal.querySelector('.modal-close');

  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });

  modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
  modal.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
modal.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });

// MAIL

function openEmail(e) {
  e.preventDefault();

  var email = "korovinaaleksandra38@gmail.com";

  // Определяем мобильное устройство
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // На телефоне открываем почтовое приложение
    window.location.href = "mailto:" + email;
  } else {
    // На ПК открываем Gmail web
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=" + email,
      "_blank",
      "noopener,noreferrer"
    );
  }
}
