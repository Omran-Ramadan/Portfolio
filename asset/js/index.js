

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/

  const form = document.querySelector(".contact__form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.innerHTML = "<p class='success-message'>تم إرسال رسالتك بنجاح! سأرد عليك قريبًا 🌟</p>";
    } else {
      form.innerHTML = "<p class='error-message'>حدث خطأ، يرجى المحاولة مرة أخرى لاحقًا ⚠️</p>";
    }
  });
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2000,
  delay: 400,
  reset: true, // يجعل الأنيميشن يحدث مرة واحدة فقط
}).reveal('.home__content, .home__img, .project-card, .section-title', {
  interval: 200
});




function openModal(img) {
  document.getElementById("modal-img").src = img.src;
  document.getElementById("modal-caption").innerText = img.alt;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


 document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".MySkill__card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 200); // تأخير بين كل بطاقة واللي بعدها
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

/*=============== projects filter ===============*/


  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // إزالة التفعيل من جميع الأزرار
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

/*=============== skills ===============*/

  // إغلاق القائمة الجانبية عند الضغط على أي رابط داخلها
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('show-menu');
    document.querySelector('.nav__dropdown')?.classList.remove('open');
  });
});

/* ===============show menu ================*/

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLinks = document.querySelectorAll(".nav__link");
  const dropdown = document.querySelector(".nav__dropdown");

  // فتح القائمة الجانبية
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // إغلاق القائمة الجانبية
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // فتح القائمة المنسدلة عند الضغط على Projects
  const dropdownToggle = dropdown.querySelector(".nav__link[href='#']");
  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("open");
    });
  }

  // إغلاق القائمة الجانبية عند الضغط على أي رابط (للجوال فقط)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // إغلاق القائمة الجانبية إذا كانت مفتوحة
      if (navMenu.classList.contains("show-menu")) {
        navMenu.classList.remove("show-menu");
      }

      // إغلاق القائمة المنسدلة إذا كانت مفتوحة
      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      }
    });
  });
});