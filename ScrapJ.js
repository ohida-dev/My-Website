    const projects = document.querySelectorAll('.hero');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const animations = entry.target.querySelectorAll('.anim');

                animations.forEach(element => {
                    element.style.animation = 'none';
                    element.offsetHeight;
                    element.style.animation = '';
                });
            }

        });
    }, {
        threshold: 0.5
    });

    projects.forEach(project => {
        observer.observe(project);
    });