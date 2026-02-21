document.addEventListener('DOMContentLoaded', function() {
    const copyIP = () => {
        const ipText = "mtasa://mta.wantedrp.ir";
        navigator.clipboard.writeText(ipText).then(() => {
            console.log('IP copied to clipboard');
        });
    };

    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', copyIP);
    });

    document.addEventListener('scroll', () => {
        const header = document.querySelector('.crystal-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const createParticle = () => {
        const particles = document.querySelector('.particles');
        if (!particles) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        const tx = (Math.random() - 0.5) * 500;
        const ty = (Math.random() - 0.5) * 500;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        particles.appendChild(particle);
        
        particle.style.animation = `particleAnimation ${2 + Math.random() * 2}s ease-out forwards`;
        
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    };

    setInterval(createParticle, 100);
});