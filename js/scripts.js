document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-container button');
    const contentDiv = document.getElementById('content');
    const toggleModeButton = document.getElementById('toggle-mode');
    const body = document.body;

    const content = {
        'about': `
            <div class="about-content">
                <p>
                    I am a Filipino software developer who lives in Santa Rosa, Laguna, Philippines, with a Bachelor of Science in Computer Science from Mapúa Malayan Colleges Laguna.
                </p>
                <p>
                I have experience in full stack development, database management, and modern web technologies. Passionate about problem-solving and continuous learning, I thrive in collaborative environments and enjoy developing practical, efficient solutions.
                </p>
            </div>
            <div class="icon-buttons">
                <button onclick="window.open('public/John-Arthur-Panti_Resume.pdf', '_blank')" class='btn-custom btn-color' title="Resume">
                    <i class="ti ti-file-description"></i>
                    <span>Resumé</span>
                </button>
            </div>
        `,
        'projects': `
            <div class="projects-content">
                <button onclick="window.open('https://johnarthurpanti.github.io/', '_blank')" class="project-button" title="Personal Portfolio">
                    <h1>Personal Portfolio</h1>
                    <p>JavaScript, HTML, and CSS.</p>
                </button>
                <button onclick="window.open('https://e-ganapp.jmepaz.com/', '_blank')" class="project-button" title="e-ganapp">
                    <h1>e-ganapp</h1>
                    <p>PHP, SQL, JavaScript, Git, HTML, and CSS.</p>
                </button>
                <button onclick="window.open('https://yapper-woad.vercel.app/', '_blank')" class="project-button" title="yapper">
                    <h1>yapper</h1>
                    <p>React.js, Next.js, TypeScript, Tailwind CSS, PostgreSQL.</p>
                </button>
                <button onclick="window.open('https://johnarthurpanti.github.io/simple-calculator/', '_blank')" class="project-button" title="Simple Calculator">
                    <h1>Simple Calculator</h1>
                    <p>JavaScript, HTML, and CSS.</p>
                </button>
            </div>
        `,
        'contact': `
            <div class="contact-content">
                <div class="contact-buttons">
                    <button onclick="window.open('https://github.com/johnarthurpanti', '_blank')" class="contact-button" title="GitHub">
                        <i <i class="ti ti-brand-github"></i>
                        <span>johnarthurpanti</span>
                    </button>
                    <button onclick="window.open('https://www.linkedin.com/in/johnarthurpanti/', '_blank')" class="contact-button" title="LinkedIn">
                        <i class="ti ti-brand-linkedin"></i>
                        <span>in/johnarthurpanti</span>
                    </button>
                    <button onclick="window.open('mailto:johnarthurpanti@gmail.com', '_blank')" class="contact-button" title="Email">
                        <i class="ti ti-mail"></i>
                        <span>johnarthurpanti@gmail.com</span>
                    </button>
                </div>
            </div>
        `
    };

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.id;
            
            contentDiv.classList.remove('visible');

            setTimeout(() => {
                contentDiv.innerHTML = content[targetId];

                contentDiv.classList.add('visible');
            }, 300);
        });
    });

    toggleModeButton.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            toggleModeButton.innerHTML = '<i class="ti ti-sun"></i>';
        } else {
            toggleModeButton.innerHTML = '<i class="ti ti-moon"></i>';
        }
    });

    if (body.classList.contains('light-mode')) {
        toggleModeButton.innerHTML = '<i class="ti ti-sun"></i>';
    } else {
        toggleModeButton.innerHTML = '<i class="ti ti-moon"></i>';
    }
});

