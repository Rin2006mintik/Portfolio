// Navbar hide/show
const sections = document.querySelectorAll('#about_1, #works_1, #form_1, #footer__page_1');
const navbar = document.querySelector('#hideMe');
const visibleSections = new Set();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) visibleSections.add(entry.target);
    else visibleSections.delete(entry.target);
  });
  navbar.classList.toggle('hidden', visibleSections.size > 0);
}, {
  threshold: 0,
  rootMargin: "-15% 0px -125% 0px"
});

sections.forEach(section => observer.observe(section));

// Modal for works images
const galleryImages = document.querySelectorAll('.works__block img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.querySelector('.modal-close');

galleryImages.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
modal.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
