        document.addEventListener("DOMContentLoaded", function () {
            // Quotes Animation
            const quoteElement = document.getElementById("quote");
            const quotes = [
                "Astronaut | Aerospace Engineer | Researcher"
            ];
            let index = 0, textIndex = 0;
            
            function typeQuote() {
                if (textIndex < quotes[index].length) {
                    quoteElement.innerHTML += quotes[index].charAt(textIndex);
                    textIndex++;
                    setTimeout(typeQuote, 50);
                } else {
                    setTimeout(() => {
                        textIndex = 0;
                        quoteElement.innerHTML = "";
                        index = (index + 1) % quotes.length;
                        typeQuote();
                    }, 3000);
                }
            }

            typeQuote();

            // Navbar Animation
            const nav = document.querySelector('.nav');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            });

            // Contact Form Submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! This is a demo form.');
                    contactForm.reset();
                });
            }

            // Create animated stars in background
            const starsContainer = document.querySelector('.stars');
            if (starsContainer) {
                for (let i = 0; i < 50; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.animationDelay = `${Math.random() * 10}s`;
                    starsContainer.appendChild(star);
                }
            }
        });

        // Smooth Scroll Function
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: "smooth"
                });
            } else {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                });
            }
        }

        // Smooth scrolling for all navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });