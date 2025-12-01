let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function setSeason(season) {
    const body = document.body;

    // reset semua kelas musim di body
    body.classList.remove('spring', 'summer', 'autumn', 'winter');
    body.classList.add(season);

    // ganti gambar hujan sesuai musim
    const rainImages = document.querySelectorAll('.rain img');
    switch(season) {
        case 'winter':
            rainImages.forEach(img => img.src = './gambar/snow.png');
            body.style.background = 'linear-gradient(135deg, #B8E7F2, #e0f2f7, #c1e4f4)'; 
            break;
        case 'autumn':
            rainImages.forEach(img => img.src = './gambar/atum.png');
            body.style.background = 'linear-gradient(135deg, #6B8A4A ,#f4c542, #d9983e)'; 
            break;
        case 'spring':
            rainImages.forEach(img => img.src = './gambar/sakura.png');
            body.style.background = 'linear-gradient(135deg, #8B5E5A, #fde4ed, #fd77ed)'; 
            break;
        case 'summer':
            rainImages.forEach(img => img.src = './gambar/sun.png');
            body.style.background = 'linear-gradient(135deg, #ffeb99, #66ccff)'; 
            break;
        default:
        rainImages.forEach(img => img.src = './gambar/v983-102-removebg-preview.png'); // default rain
        body.style.background = 'linear-gradient(135deg, #f0f4f8, #d9e2ec)'; // default background
    }

    // ---- Tambahkan ini supaya tombol ikut berubah warna ----
    document.querySelectorAll('.season-buttons button').forEach(btn => {
        btn.classList.remove('spring','summer','autumn','winter');
    });
    const btn = document.getElementById(season + '-btn');
    if(btn) btn.classList.add(season);
}
//page2
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.mySlides2');
    const container = document.getElementById('slideshow2');
    let current = 0;
    let isScrolling = false; // untuk mencegah multiple scroll cepat

    if (!container || slides.length === 0) return;

    // Inisialisasi: semua slide di bawah, slide pertama tampil
    slides.forEach((slide, i) => {
        if (i === 0) {
            slide.style.transform = 'translateY(0) scale(1)';
            slide.style.opacity = '1';
        } else {
            slide.style.transform = 'translateY(80%) scale(0.9)';
            slide.style.opacity = '0.5';
        }
    });

    // ==== EVENT LISTENER SCROLL ====
    container.addEventListener('wheel', e => {
        if (isScrolling) return; // prevent scroll spam
        isScrolling = true;

        if (e.deltaY > 0) {
            nextSlide();
        } else if (e.deltaY < 0) {
            prevSlide();
        }

        setTimeout(() => { isScrolling = false; }, 600); // delay sama dengan transition
    });

    function showSlide2(index) {
        slides.forEach((slide, i) => {
            if (i < index) {
                slide.style.transform = 'translateY(-100%) scale(0.9)';
                slide.style.opacity = '0.5';
            } else if (i === index) {
                slide.style.transform = 'translateY(0) scale(1)';
                slide.style.opacity = '1';
            } else {
                slide.style.transform = 'translateY(80%) scale(0.9)';
                slide.style.opacity = '0.5';
            }
        });
        current = index;
    }

    function nextSlide() {
        let next = current + 1;
        if (next >= slides.length) next = 0;
        showSlide2(next);
    }

    function prevSlide() {
        let prev = current - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide2(prev);
    }
});

document.addEventListener('DOMContentLoaded', function() {
        // Ambil elemen card
        const card = document.querySelector('.card-border');

        // Tambahkan event listener untuk klik
        card.addEventListener('click', function() {
            // Toggle (tambah/hapus) kelas 'active' saat di-klik
            card.classList.toggle('active');
        });
    });
