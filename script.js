// Project Data based on GitHub repositories
const projectsData = [
    // Recent and Featured Projects
    {
        id: 1,
        title: "Nordic News Sentiment and Engagement Tracker",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Advanced sentiment analysis and engagement tracking system for Nordic news media. Implements NLP techniques for real-time sentiment monitoring and social media engagement analytics.",
        tags: ["Python", "NLP", "Sentiment Analysis", "Social Media Analytics", "Data Visualization"],
        icon: "fas fa-newspaper",
        githubUrl: "https://github.com/saidulIslam1602/Nordic-News-Sentiment-and-Engagement-Tracker",
        liveUrl: null
    },
    {
        id: 2,
        title: "Document Intelligence Platform",
        category: "Data Engineering",
        categorySlug: "data-engineering",
        description: "Microsoft Azure-based document intelligence platform for automated document processing, text extraction, and intelligent data analysis. Features advanced OCR and machine learning capabilities.",
        tags: ["Azure", "Document Processing", "OCR", "Machine Learning", "Python"],
        icon: "fas fa-file-alt",
        githubUrl: "https://github.com/saidulIslam1602/Document-Intelligence-Platform",
        liveUrl: null
    },
    {
        id: 3,
        title: "AI-Powered YouTube Video Insights with Streamlit",
        category: "Generative AI",
        categorySlug: "genai",
        description: "Generative AI application using LangChain and OpenAI for automated YouTube video content analysis and insights generation. Features interactive dashboard for real-time AI-powered business intelligence.",
        tags: ["Python", "LangChain", "OpenAI", "Streamlit", "NLP", "Generative AI"],
        icon: "fas fa-video",
        githubUrl: "https://github.com/saidulIslam1602/AI-Powered-YouTube-Video-Insights-with-Streamlit-LangChain-and-OpenAI",
        liveUrl: null
    },
    {
        id: 4,
        title: "Customer Segmentation & Personalized Recommendation Engine",
        category: "Machine Learning",
        categorySlug: "ml",
        description: "Advanced customer segmentation using clustering algorithms and personalized recommendation systems for enhanced customer experience and retention. Built with Python, scikit-learn, and machine learning techniques.",
        tags: ["Python", "Machine Learning", "Clustering", "Recommendation Systems", "Data Analysis"],
        icon: "fas fa-users",
        githubUrl: "https://github.com/saidulIslam1602/Customer-Segmentation-Personalized-Recommendation-Engine",
        liveUrl: null
    },
    {
        id: 5,
        title: "Holiday Destinations and Activities Generator",
        category: "Generative AI",
        categorySlug: "genai",
        description: "AI-powered travel recommendation system using generative AI to suggest personalized holiday destinations and activities based on user preferences and travel history.",
        tags: ["Python", "Generative AI", "Travel Tech", "Recommendation Systems"],
        icon: "fas fa-map-marked-alt",
        githubUrl: "https://github.com/saidulIslam1602/Holiday-Destinations-and-Activities-Generator",
        liveUrl: null
    },
    {
        id: 6,
        title: "TinyVGG Classifier - Custom Dataset Image Classification",
        category: "Computer Vision",
        categorySlug: "computer-vision",
        description: "CNN architecture implementation with data augmentation for multi-class image classification. Built using PyTorch with transfer learning techniques for production deployment.",
        tags: ["PyTorch", "Computer Vision", "Deep Learning", "CNN", "Transfer Learning"],
        icon: "fas fa-camera",
        githubUrl: "https://github.com/saidulIslam1602/TinyVGG-Classifier-Custom-Dataset-Image-Classification-with-Augmentation-using-PyTorch",
        liveUrl: null
    },
    {
        id: 7,
        title: "Aquaculture Fish Classification",
        category: "Computer Vision",
        categorySlug: "computer-vision",
        description: "Deep learning model for automated fish species classification in aquaculture systems. Utilizes computer vision techniques for real-time monitoring and species identification.",
        tags: ["Python", "Deep Learning", "Computer Vision", "Aquaculture", "Classification"],
        icon: "fas fa-fish",
        githubUrl: "https://github.com/saidulIslam1602/Aquaculture-Fish-Classification",
        liveUrl: null
    },
    {
        id: 8,
        title: "Retrieval Augmented Generation Technique",
        category: "Generative AI",
        categorySlug: "genai",
        description: "Implementation of RAG (Retrieval-Augmented Generation) technique for enhanced AI text generation with external knowledge retrieval. Combines retrieval systems with generative AI models.",
        tags: ["Python", "RAG", "Generative AI", "NLP", "Information Retrieval"],
        icon: "fas fa-search",
        githubUrl: "https://github.com/saidulIslam1602/Retrieval-Augmented-Generation-Technique",
        liveUrl: null
    },
    {
        id: 9,
        title: "3D Hiking Simulator",
        category: "Web Applications",
        categorySlug: "web-apps",
        description: "Enhanced 3D hiking simulator with C++ & OpenGL featuring dynamic terrain, weather effects, performance monitoring, and professional graphics architecture.",
        tags: ["C++", "OpenGL", "3D Graphics", "Game Development", "Simulation"],
        icon: "fas fa-mountain",
        githubUrl: "https://github.com/saidulIslam1602/3D-Hiking-Simulator",
        liveUrl: null
    },
    {
        id: 10,
        title: "Dynamic Positioning Control System",
        category: "Data Engineering",
        categorySlug: "data-engineering",
        description: "Professional Dynamic Positioning Control System for Maritime Vessels - C++17 implementation with real-world vessel data and advanced control algorithms.",
        tags: ["C++", "Control Systems", "Marine Technology", "Real-time Processing"],
        icon: "fas fa-ship",
        githubUrl: "https://github.com/saidulIslam1602/Dynamic-Positioning-Control-System",
        liveUrl: null
    },
    {
        id: 11,
        title: "Data Analysis of 911 Calls",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Enterprise-Grade Emergency Response Analytics Platform with advanced 911 call data analysis using Pandas, Matplotlib, Seaborn & Streamlit. Features interactive dashboard with ML forecasting and geographic mapping.",
        tags: ["Python", "Data Analysis", "Emergency Services", "Predictive Modeling", "Streamlit"],
        icon: "fas fa-phone",
        githubUrl: "https://github.com/saidulIslam1602/Data-Analysis-of-911-Call-s",
        liveUrl: null
    },
    {
        id: 12,
        title: "Transaction Anomaly Detection System",
        category: "Machine Learning",
        categorySlug: "ml",
        description: "Machine learning system for fraud detection and pattern analysis in business transactions. Implements graph-based neural networks for complex behavioral pattern recognition and AML compliance.",
        tags: ["Python", "Anomaly Detection", "Machine Learning", "Fraud Detection", "Graph Neural Networks"],
        icon: "fas fa-shield-alt",
        githubUrl: "https://github.com/saidulIslam1602/Transaction-Anomaly-Detection",
        liveUrl: null
    },
    {
        id: 13,
        title: "Air Baggage Multiclass Classification with PyTorch",
        category: "Computer Vision",
        categorySlug: "computer-vision",
        description: "Deep learning model for classifying airport baggage based on material (hard plastic, metal, soft plastic, etc.). Utilizes ResNet50 with fine-tuning on a custom dataset, leveraging PyTorch.",
        tags: ["PyTorch", "ResNet50", "Computer Vision", "Classification", "Transfer Learning"],
        icon: "fas fa-suitcase",
        githubUrl: "https://github.com/saidulIslam1602/airBaggageMulticlassClassificationwithPytorch",
        liveUrl: null
    },
    {
        id: 14,
        title: "Hybrid Baggage Image Labeling and Classification",
        category: "Computer Vision",
        categorySlug: "computer-vision",
        description: "A project for classifying and organizing baggage images using a hybrid approach. Combines manual image labeling with automated classification using a pre-trained ResNet50 model.",
        tags: ["Python", "ResNet50", "Image Labeling", "Classification", "Deep Learning"],
        icon: "fas fa-tags",
        githubUrl: "https://github.com/saidulIslam1602/Hybrid-Baggage-Image-Labeling-and-Classification-Using-Deep-Learning",
        liveUrl: null
    },
    {
        id: 15,
        title: "Demographic Profile Dataset Analysis with Excel",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Comprehensive demographic analysis and visualization project using Microsoft Excel. Employs diverse data manipulation techniques and visualization tools to explore real-world demographic data.",
        tags: ["Excel", "Data Visualization", "Data Manipulation", "Data Cleaning", "Demographics"],
        icon: "fas fa-chart-bar",
        githubUrl: "https://github.com/saidulIslam1602/Analysis-of-Demographic-Profile-Dataset-with-Microsoft-Excel",
        liveUrl: null
    },
    {
        id: 16,
        title: "Tele-Doctor Remote Healthcare System",
        category: "Web Applications",
        categorySlug: "web-apps",
        description: "Remote doctor software to make it as easy as possible for patients to get care from anywhere. Patients can connect in the way that is easiest for them, wherever they are.",
        tags: ["JavaScript", "Healthcare", "Remote Medicine", "Web Application", "Patient Care"],
        icon: "fas fa-user-md",
        githubUrl: "https://github.com/saidulIslam1602/Tele-Doctor",
        liveUrl: null
    },
    {
        id: 17,
        title: "Super Shop Management System",
        category: "Web Applications",
        categorySlug: "web-apps",
        description: "A comprehensive super shop management system developed in C with features for inventory management, sales tracking, and customer management.",
        tags: ["C", "Management System", "Inventory", "Sales Tracking", "Database"],
        icon: "fas fa-store",
        githubUrl: "https://github.com/saidulIslam1602/Super-Shop",
        liveUrl: null
    },
    {
        id: 18,
        title: "Face Recognition System",
        category: "Computer Vision",
        categorySlug: "computer-vision",
        description: "Face recognition system developed with OpenCV library. The process includes preparing training data, training face recognizer, and testing with real-time face detection capabilities.",
        tags: ["Python", "OpenCV", "Face Recognition", "Computer Vision", "Machine Learning"],
        icon: "fas fa-user",
        githubUrl: "https://github.com/saidulIslam1602/Face-Recognition",
        liveUrl: null
    },
    {
        id: 19,
        title: "Flipkart Web Scraping",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Web scraping project to collect relative data from Flipkart website using Beautiful Soup and Python. Extracts product information, prices, and reviews for data analysis.",
        tags: ["Python", "Web Scraping", "Beautiful Soup", "Data Collection", "E-commerce"],
        icon: "fas fa-spider",
        githubUrl: "https://github.com/saidulIslam1602/Flipkart-Web-scraping",
        liveUrl: null
    },
    {
        id: 20,
        title: "Stock Market Prediction with LSTM",
        category: "Machine Learning",
        categorySlug: "ml",
        description: "Stock price forecasting using Long Short Term Memory (LSTM) neural networks. Includes exploratory data analysis using Pandas, NumPy and Matplotlib for financial market prediction.",
        tags: ["Python", "LSTM", "Stock Prediction", "Time Series", "Financial Analysis"],
        icon: "fas fa-chart-line",
        githubUrl: "https://github.com/saidulIslam1602/Stock-Marktet-Prediction",
        liveUrl: null
    },
    {
        id: 21,
        title: "Human Activity Recognition",
        category: "Machine Learning",
        categorySlug: "ml",
        description: "Human activity recognition system that identifies activities like Walking, Jogging, Upstairs, Downstairs, Sitting, Standing from accelerometer data using Convolutional Neural Networks.",
        tags: ["Python", "CNN", "Activity Recognition", "Sensor Data", "Deep Learning"],
        icon: "fas fa-running",
        githubUrl: "https://github.com/saidulIslam1602/Human-Activity-Recognition",
        liveUrl: null
    },
    {
        id: 22,
        title: "Uber Data Analysis",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Comprehensive analysis of Uber rides data from April 2019 using Pandas, Seaborn, and Matplotlib. Focuses on extracting new columns from existing data and creating meaningful visualizations.",
        tags: ["Python", "Data Analysis", "Pandas", "Seaborn", "Transportation"],
        icon: "fas fa-car",
        githubUrl: "https://github.com/saidulIslam1602/Uber-Data-Analysis",
        liveUrl: null
    },
    {
        id: 23,
        title: "Weather Data Analysis",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Exploratory data analysis of weather dataset using Python. Analyzes various weather patterns and trends to answer specific questions about meteorological data.",
        tags: ["Python", "Data Analysis", "Weather Data", "Exploratory Analysis", "Climate"],
        icon: "fas fa-cloud-sun",
        githubUrl: "https://github.com/saidulIslam1602/Weather-Data-Analysis",
        liveUrl: null
    },
    {
        id: 24,
        title: "Analytical PDF Report Using Python",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Automated PDF report generation using FPDF library with John Hopkins University's COVID-19 data. Creates comprehensive analytical reports with data visualization and insights.",
        tags: ["Python", "PDF Generation", "COVID-19", "Data Visualization", "Reporting"],
        icon: "fas fa-file-pdf",
        githubUrl: "https://github.com/saidulIslam1602/Analytical-PDF-Report-Using-PYTHON-",
        liveUrl: null
    },
    {
        id: 25,
        title: "Sales Data Analysis",
        category: "Data Analysis",
        categorySlug: "data-analysis",
        description: "Comprehensive sales data analysis using Pandas, NumPy and Matplotlib to analyze a company's one-year sales dataset and extract meaningful business insights.",
        tags: ["Python", "Sales Analysis", "Business Intelligence", "Data Visualization", "Pandas"],
        icon: "fas fa-shopping-cart",
        githubUrl: "https://github.com/saidulIslam1602/Sales-Data-Analysis",
        liveUrl: null
    },
    {
        id: 26,
        title: "Face Detection and Recognition",
        category: "Computer Vision",
        categorySlug: "computer-vision",
        description: "Advanced face detection and recognition system developed with OpenCV and Face Recognition library. Features real-time face detection and identification capabilities.",
        tags: ["Python", "OpenCV", "Face Detection", "Face Recognition", "Computer Vision"],
        icon: "fas fa-id-card",
        githubUrl: "https://github.com/saidulIslam1602/Face-Detection-and-Face-Recognition",
        liveUrl: null
    },
    {
        id: 27,
        title: "Priority Based Cloud Task Scheduling",
        category: "Academic Projects",
        categorySlug: "academic",
        description: "Final year thesis project on 'Priority Based Cloud Task Scheduling'. Establishes relationships among bandwidth, task length, execution time, makespan, and response time with performance comparisons.",
        tags: ["Cloud Computing", "Task Scheduling", "Performance Analysis", "Thesis Project", "Research"],
        icon: "fas fa-cloud-upload-alt",
        githubUrl: "https://github.com/saidulIslam1602/Final-Year-Thesis-Paper",
        liveUrl: null
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projects-grid');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderProjects('all');
    initializeContactForm();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project filtering functionality
function initializeProjectFiltering() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            renderProjects(filter);
        });
    });
}

// Render projects based on filter
function renderProjects(filter) {
    let filteredProjects = projectsData;
    
    if (filter !== 'all') {
        filteredProjects = projectsData.filter(project => 
            project.categorySlug === filter
        );
    }
    
    projectsGrid.innerHTML = '';
    
    filteredProjects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
        
        // Add animation delay
        setTimeout(() => {
            projectCard.style.opacity = '1';
            projectCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Initialize project filtering after rendering
    initializeProjectFiltering();
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    
    const tagsHTML = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    const liveUrlHTML = project.liveUrl 
        ? `<a href="${project.liveUrl}" class="project-link" target="_blank">
             <i class="fas fa-external-link-alt"></i> Live Demo
           </a>` 
        : '';
    
    card.innerHTML = `
        <div class="project-image">
            <i class="${project.icon}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-category">${project.category}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${tagsHTML}
            </div>
            <div class="project-links">
                <a href="${project.githubUrl}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${liveUrlHTML}
            </div>
        </div>
    `;
    
    return card;
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create mailto link
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:saidulislambinalisayed@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        this.reset();
        
        // Show success message
        showNotification('Thank you for your message! Your email client should open shortly.');
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Reveal elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('loading');
        observer.observe(section);
    });
}

// Add loading class to sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('loading');
    });
});

// Typing effect for hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 100);
    }
});

// Smooth reveal animation for skill items
function animateSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Initialize skill animation when skills section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillItems();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// Add hover effects to project cards
function initializeProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are loaded
    setTimeout(() => {
        initializeProjectHoverEffects();
    }, 1000);
});

// Add some interactive elements to the page
function addInteractiveElements() {
    // Add floating particles to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            hero.appendChild(particle);
        }
    }
}

// Add CSS animation for floating particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
`;
document.head.appendChild(style);

// Initialize interactive elements
document.addEventListener('DOMContentLoaded', function() {
    addInteractiveElements();
});

// Export functions for potential use in other scripts
window.portfolioFunctions = {
    renderProjects,
    showNotification,
    typeWriter
}; 