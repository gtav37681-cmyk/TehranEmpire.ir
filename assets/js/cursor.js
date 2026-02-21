document.addEventListener('DOMContentLoaded', () => {
    if (!('ontouchstart' in window)) {
        const cursorDot = document.createElement('div');
        const cursorOutline = document.createElement('div');
        
        cursorDot.className = 'cursor-dot';
        cursorOutline.className = 'cursor-dot-outline';
        
        document.body.appendChild(cursorDot);
        document.body.appendChild(cursorOutline);

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        function updateCursor() {
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;

            requestAnimationFrame(updateCursor);
        }

        updateCursor();

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
        });

        document.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        });

        const interactiveElements = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], .clickable');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
                cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(1.5)`;
                cursorDot.style.backgroundColor = 'var(--primary-blue)';
                cursorOutline.style.borderColor = 'var(--primary-blue)';
                cursorOutline.style.backgroundColor = 'rgba(0, 168, 255, 0.1)';
            });

            element.addEventListener('mouseleave', () => {
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
                cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(1)`;
                cursorDot.style.backgroundColor = 'var(--primary-blue)';
                cursorOutline.style.borderColor = 'var(--primary-blue)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }
});