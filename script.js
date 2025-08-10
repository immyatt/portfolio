// Portfolio Data
const portfolioData = {
    personal: {
        name: "Alfaith Mae Luzon",
        email: "luzonalfaithmae@gmail.com",
        github: "https://github.com/immyatt",
        linkedin: "https://www.linkedin.com/in/alfaith-mae-luzon-161a13372/"
    },
    
    projects: [
        {
            id: 1,
            title: "Industry Visit Blog (BSCS Industry Visit 2025)",
            description: "A visually engaging blog platform documenting the BSCS Industry Visit 2025. Designed with a clean and responsive interface, it features daily highlights, photo carousels, and dedicated sections for special thanks and event memories. Optimized for smooth navigation and readability on all devices.",
            image: "blog.png",
            techStack: ["HTML5", "CSS3", "JavaScript"],
            githubUrl: "https://github.com/immyatt/blog",
            liveUrl: " https://immyatt.github.io/blog/"
        },
        {
            id: 2,
            title: "Gym Membership System",
            description: "A comprehensive gym membership management system that handles member registration, attendance tracking, and payment management. Includes role-based access for staff and coaches, automated salary tracking, and integrated billing features for a seamless gym operation workflow.",
            image: "gym.png",
            techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/kuuhaku3614/Gym_MembershipSE-XLB",
            liveUrl: "https://gymmanagementxlb.xscpry.com/website/website.php?fbclid=IwY2xjawME2_JleHRuA2FlbQIxMABicmlkETE2MmRDY3hWRVRKY3AxamR1AR7JXw2-eC25BCVzQRuh7TfRpnNOGJ16S1ULATwl73_6WUvHdybnbn4GQ1GRMw_aem_RTchPbN-CbhGNtgrW2j3dg"
        },
        {
            id: 3,
            title: "Cinemax – Online Movie Ticket Booking",
            description: "An intuitive online movie ticket booking system that allows users to browse movie schedules, select seats, and make reservations in real time. Features an admin panel for managing screenings, ticket prices, and user accounts, ensuring efficient cinema operations.",
            image: "booking.png",
            techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            githubUrl: "https://github.com/immyatt/cinemax",
            liveUrl: ""
        },
        {
            id: 4,
            title: "Personal Portfolio Website",
            description: "A personal portfolio website showcasing my skills, projects, and professional experience in a clean, responsive design. Features a hero section with profile image and tagline, an interactive project showcase, animated skill indicators, and a contact form integrated with third-party services.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
            githubUrl: "https://github.com/immyatt/portfolio",
            liveUrl: "https://immyatt.github.io/portfolio/"
        }
    ],
    
    skills: [
        {
            name: "HTML5",
            proficiency: 95,
            description: "Semantic markup and modern web standards",
            icon: "fab fa-html5",
            color: "#e34c26"
        },
        {
            name: "CSS3",
            proficiency: 90,
            description: "Advanced styling and responsive design",
            icon: "fab fa-css3-alt",
            color: "#1572b6"
        },
        {
            name: "JavaScript",
            proficiency: 85,
            description: "Modern JavaScript and DOM manipulation",
            icon: "fab fa-js-square",
            color: "#f7df1e"
        },
        {
            name: "PHP",
            proficiency: 80,
            description: "Server-side scripting and web development",
            icon: "fab fa-php",
            color: "#777bb4"
        },
        {
            name: "MySQL",
            proficiency: 80,
            description: "Database design and query optimization",
            icon: "fas fa-database",
            color: "#00758f"
        },
        {
            name: "Figma",
            proficiency: 75,
            description: "UI/UX design and prototyping",
            icon: "fab fa-figma",
            color: "#f24e1e"
        },
        {
            name: "Canva",
            proficiency: 70,
            description: "Graphic design and visual content creation",
            icon: "fas fa-palette",
            color: "#00c4cc"
        },
        {
            name: "GitHub",
            proficiency: 85,
            description: "Version control and collaborative development",
            icon: "fab fa-github",
            color: "#333"
        },
        {
            name: "Firebase",
            proficiency: 65,
            description: "Backend services and real-time databases",
            icon: "fas fa-fire",
            color: "#ffca28"
        },
        {
            name: "VS Code",
            proficiency: 95,
            description: "Primary development environment",
            icon: "fas fa-code",
            color: "#007acc"
        }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupNavigation();
    setupAnimations();
    setupContactForm();
});

// Initialize Portfolio
function initializePortfolio() {
    // Update personal information
    document.getElementById('user-name').textContent = portfolioData.personal.name;
    document.getElementById('footer-name').textContent = portfolioData.personal.name;
    
    // Load projects
    loadProjects();
    
    // Load skills
    loadSkills();
    
    // Load proficiency bars
    loadProficiencyBars();
}

// Navigation Setup
function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.className = 'fas fa-bars h-6 w-6';
        } else {
            icon.className = 'fas fa-times h-6 w-6';
        }
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars h-6 w-6';
        });
    });
    
    // Update navbar on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        }
    });
}

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

// Create Project Card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card animate-on-scroll';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const techStackHtml = project.techStack.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="overlay">
                <button class="view-project bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200">
                    <i class="fas fa-eye mr-1"></i> View
                </button>
            </div>
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors duration-200">
                ${project.title}
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                ${project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
                ${techStackHtml}
            </div>
            
            <div class="flex gap-2">
                <a href="${project.githubUrl}" 
                   target="_blank" 
                   class="flex-1 border border-slate-300 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg text-center transition-colors duration-200 text-sm font-medium">
                    <i class="fab fa-github mr-1"></i> GitHub
                </a>
                ${project.liveUrl && project.liveUrl !== '#' ? `
                    <a href="${project.liveUrl}" 
                       target="_blank" 
                       class="flex-1 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-center transition-colors duration-200 text-sm font-medium">
                        <i class="fas fa-external-link-alt mr-1"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Load Skills
function loadSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    portfolioData.skills.forEach((skill, index) => {
        const skillCard = createSkillCard(skill, index);
        skillsGrid.appendChild(skillCard);
    });
}

// Create Skill Card
function createSkillCard(skill, index) {
    const card = document.createElement('div');
    card.className = 'skill-card animate-on-scroll tooltip';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <i class="${skill.icon} text-2xl" style="color: ${skill.color}"></i>
            </div>
            <h3 class="font-semibold text-slate-800 text-sm mb-2">${skill.name}</h3>
            <div class="text-xl font-bold text-blue-600">${skill.proficiency}%</div>
        </div>
        <span class="tooltip-text">${skill.description}</span>
    `;
    
    return card;
}

// Load Proficiency Bars
function loadProficiencyBars() {
    const container = document.getElementById('proficiency-bars');
    
    portfolioData.skills.forEach((skill, index) => {
        const barContainer = document.createElement('div');
        barContainer.className = 'animate-on-scroll';
        barContainer.style.animationDelay = `${index * 0.1}s`;
        
        barContainer.innerHTML = `
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                    <i class="${skill.icon} text-lg" style="color: ${skill.color}"></i>
                    <span class="font-semibold text-slate-800">${skill.name}</span>
                </div>
                <span class="font-bold text-blue-600">${skill.proficiency}%</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="width: 0%" data-progress="${skill.proficiency}"></div>
            </div>
        `;
        
        container.appendChild(barContainer);
    });
}

// Animation Setup
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate progress bars
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const progress = progressBar.dataset.progress;
                    setTimeout(() => {
                        progressBar.style.width = progress + '%';
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form Setup
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Basic validation
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitText.innerHTML = '<span class="loading"></span> Sending...';
        
        try {
            // Simulate form submission (replace with actual service)
            await simulateFormSubmission(data);
            
            // Show success state
            submitText.innerHTML = '<span class="success-checkmark"></span> Message Sent!';
            
            // Show success notification
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form
            setTimeout(() => {
                form.reset();
                submitBtn.disabled = false;
                submitText.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
            }, 3000);
            
        } catch (error) {
            // Show error state
            submitText.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Try Again';
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitText.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
            }, 3000);
        }
    });
}

// Simulate Form Submission (Replace with actual service like EmailJS)
async function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted:', data);
            resolve();
        }, 2000);
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 hover:opacity-70">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// EmailJS Integration (if needed)
/*
// Add this to your HTML head:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

function initEmailJS() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY");
}

async function sendEmailJS(data) {
    try {
        const response = await emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
                to_name: "Your Name"
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
}

// Replace simulateFormSubmission with sendEmailJS in the form handler
*/