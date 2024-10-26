document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nav = document.querySelector(".carousel-nav");
  const indicators = Array.from(nav.children);

  let currentIndex = 0;

  const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("current", i === index);
    });
    currentIndex = index;
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      updateCarousel(index);
    });
  });

  let slideInterval = setInterval(() => {
    nextButton.click();
  }, 8000);

  const carousel = document.querySelector(".modern-carousel");
  carousel.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  carousel.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      nextButton.click();
    }, 8000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const quemSomosSection = document.querySelector("#quem-somos");
  const statItems = document.querySelectorAll(".stat-item");
  const statNumbers = document.querySelectorAll(".stat-number");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          fadeInObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInObserver.observe(quemSomosSection);

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(
        progress * (end - start) + start
      ).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.innerText.replace(/,/g, ""));
          animateValue(target, 0, endValue, 2000);
          statObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((stat) => {
    statObserver.observe(stat);
  });

  statItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.05) translateY(-10px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1) translateY(0)";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const menuList = document.querySelector(".menuList");
  const header = document.querySelector("header");
  const menuItems = document.querySelectorAll(".menuList a");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    menuList.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!menuList.contains(e.target) && !menuIcon.contains(e.target)) {
      menuIcon.classList.remove("bx-x");
      menuList.classList.remove("open");
    }
  });

  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nav = document.querySelector(".carousel-nav");
  const indicators = Array.from(nav.children);
  let currentIndex = 0;

  const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("current", i === index);
    });
    currentIndex = index;
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      updateCarousel(index);
    });
  });

  let slideInterval = setInterval(() => {
    nextButton.click();
  }, 8000);

  const carousel = document.querySelector(".modern-carousel");
  carousel.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  carousel.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      nextButton.click();
    }, 8000);
  });

  const quemSomosSection = document.querySelector("#quem-somos");
  const statItems = document.querySelectorAll(".stat-item");
  const statNumbers = document.querySelectorAll(".stat-number");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          fadeInObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInObserver.observe(quemSomosSection);

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(
        progress * (end - start) + start
      ).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.innerText.replace(/,/g, ""));
          animateValue(target, 0, endValue, 2000);
          statObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((stat) => {
    statObserver.observe(stat);
  });

  statItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.05) translateY(-10px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1) translateY(0)";
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tiposSangue = document.querySelectorAll('.tipo-sangue');

  tiposSangue.forEach(tipo => {
      const nivelSangue = tipo.querySelector('.nivel-sangue');
      const porcentagem = tipo.querySelector('.porcentagem');
      const status = tipo.querySelector('.status');

      tipo.addEventListener('mouseenter', () => {
          let altura = parseInt(nivelSangue.style.height);
          //NOTE: altura = Math.min(altura + 10, 100);
          //NOTE: nivelSangue.style.height = `${altura}%`;
          //NOTE: porcentagem.textContent = `${altura}%`;
          atualizarStatus(altura, status);
      });

      tipo.addEventListener('mouseleave', () => {
          let altura = parseInt(nivelSangue.style.height);
          //NOTE: altura = Math.max(altura - 10, 0);
          //NOTE: nivelSangue.style.height = `${altura}%`;
          //NOTE: porcentagem.textContent = `${altura}%`;
          atualizarStatus(altura, status);
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('auth-modal');
  const closeBtn = document.querySelector('.close');
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      forms.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(`${tabName}-form`).classList.add('active');
    });
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  closeBtn.addEventListener('click', closeModal);

  const authButtons = document.querySelectorAll('.menu-btn, .cta-button');
  authButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });
});







