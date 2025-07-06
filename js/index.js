
    const texts = ["Back-end", "Front-end", "Movil Multiplataforma", "Movil Nativa"];
    const element = document.getElementById('typing-text');
    const container = document.getElementById('typing-container');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBetweenTexts = 2000;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Modo borrado
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(typeWriter, deletingSpeed);
            }
        } else {
            // Modo escritura
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, pauseBetweenTexts);
            } else {
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    // Iniciar la animación
    window.onload = function() {
        setTimeout(typeWriter, 500);
    };


        // JavaScript para asignar íconos automáticamente
        document.addEventListener('DOMContentLoaded', () => {
            const skillsMap = {
              "javascript": "devicon-javascript-plain colored",
              "node.js": "devicon-nodejs-plain colored",
              "express.js": "devicon-express-original colored",
              "react.js": "devicon-react-original colored",
              "html5": "devicon-html5-plain colored",
              "css3": "devicon-css3-plain colored",
              "mysql": "devicon-mysql-plain colored",
              "mongodb": "devicon-mongodb-plain colored",
              "git": "devicon-git-plain colored",
              "github": "devicon-github-original colored",
              "vue": "devicon-vuejs-plain colored",
              "typescript": "devicon-typescript-plain colored",
              "bootstrap": "devicon-bootstrap-plain colored",
              "firebase": "devicon-firebase-plain colored",
              "kotlin": "devicon-kotlin-plain colored"
            };
      
            document.querySelectorAll('.skills-list li').forEach(item => {
              const skillName = item.querySelector('.skill-name').textContent.toLowerCase();
              const iconClass = skillsMap[skillName];
              if (iconClass) {
                item.querySelector('.skill-icon').className = `skill-icon ${iconClass}`;
              }
            });
          });

          const carousel = document.querySelector('.proyectos-carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const projectWidth = document.querySelector('.proyecto').offsetWidth + 20; // +gap
  carousel.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  const totalProjects = document.querySelectorAll('.proyecto').length;
  if (currentIndex < totalProjects - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Ajusta posición al cambiar tamaño de pantalla
window.addEventListener('resize', updateCarousel);