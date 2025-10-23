// script.js
  // Inicializa EmailJS
  emailjs.init("KU8mlxBS4Dganrimv");

  // Menu Toggle Mobile
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');

      const spans = menuToggle.querySelectorAll('span');
      if (nav.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translateY(10px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
      } else {
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
      }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.remove('active');
          const spans = menuToggle.querySelectorAll('span');
          spans[0].style.transform = 'none';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'none';
      });
  });

  // Formulário de Contato
 ///const form = document.getElementById("contactForm");
//const successMessage = document.getElementById("successMessage");

// Evento de submit do formulário
//form.addEventListener("submit", function(e) {
   // e.preventDefault();

    // Captura os dados do formulário
    //const params = {
      //  from_name: document.getElementById("name").value,
      //  from_email: document.getElementById("email").value,
      //  subject: document.getElementById("subject").value,
       // message: document.getElementById("message").value,
       // to_email: "kevinunivassouras@gmail.com"
   // };

    // Envia o e-mail via EmailJS
   // emailjs.send("service_78ct52m", "template_k27q7a6", params)
     //   .then(() => {
            // Mostra mensagem de sucesso
     //       successMessage.style.display = "block";

            // Limpa o formulário
      //      form.reset();

            // Esconde a mensagem depois de 5 segundos
            //setTimeout(() => {
             //   successMessage.style.display = "none";
          //  }, 5000);

            // Scroll para o topo
       //     window.scrollTo({ top: 0, behavior: 'smooth' });
      //  })
        //.catch((error) => {
         //   console.error("Erro ao enviar:", error);
        //    alert("❌ Ocorreu um erro ao enviar sua mensagem. Verifique os IDs e a conexão.");
    //    });
//});
  // Smooth Scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });

  // Animação de entrada dos cards ao scroll
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);

  document.querySelectorAll('.article-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
  });

  // Botão Hero
  const heroButton = document.querySelector('.hero-button');
  if(heroButton) {
      heroButton.addEventListener('click', () => {
          const articlesSection = document.querySelector('.articles');
          if(articlesSection) {
              articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  }

  // Scroll infinito (simulação)
  let isLoading = false;
  window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
          console.log('Carregar mais artigos...');
      }
  });

  // Carregar anúncios
  function loadAds() {
      const adSpaces = document.querySelectorAll('.ad-space');
      adSpaces.forEach((adSpace, index) => {
          const script = document.createElement('script');
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          adSpace.appendChild(script);
      });
  }
  document.addEventListener('DOMContentLoaded', loadAds);
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop(); // pega só o arquivo da URL

    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if(linkPath === currentPath) {
            link.classList.add('active'); // adiciona classe ativa
        } else {
            link.classList.remove('active'); // remove se não for a página
        }
    });
    });
 
  // Destacar seção ativa no menu
  const sections = document.querySelectorAll('section[id]');
  function highlightNavigation() {
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          const sectionId = section.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelectorAll('.nav-link').forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }
  window.addEventListener('scroll', highlightNavigation);
