// =====================================
// MODERN PORTFOLIO - INTERACTIVE JS
// Updated with CV Information & Web Images
// =====================================

// Projects Data - Only Projects in Your Directory (17 projects)
const projectsData = [
    {
        id: 1,
        title: "AquaCulturePlatform",
        description: "Full-stack aquaculture management system with .NET 8 backend (Clean Architecture, CQRS with MediatR), Vue.js 3 frontend (Composition API, TypeScript), real-time monitoring with SignalR, TimescaleDB for time-series data, JWT authentication with refresh tokens, and production-ready security. Complete CRUD operations, sensor monitoring, alert system, and comprehensive analytics dashboard.",
        icon: "🐟",
        tags: [".NET 8", "Vue.js 3", "TypeScript", "SignalR", "TimescaleDB", "Docker", "Redis", "Clean Architecture"],
        categories: ["enterprise", "web-apps", "data-engineering"],
        stats: [
            { label: "Architecture", value: "Clean" },
            { label: "Real-time", value: "SignalR" },
            { label: "Security", value: "JWT" }
        ],
        github: "https://github.com/saidulIslam1602/AquaCulturePlatform",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        featured: true
    },
    {
        id: 2,
        title: "Customer Segmentation & CRM Integration",
        description: "Enterprise BI platform with ML-powered customer segmentation (K-means, 0.8928 silhouette score), churn prediction (95% accuracy), personalized recommendations achieving 1,115% ROI. Comprehensive CRM integration with Microsoft Dynamics 365, Salesforce, and HubSpot. Built with .NET 8 RESTful API (JWT authentication, role-based access) and Python ML services processing 4,338+ customer records.",
        icon: "📊",
        tags: ["C#", ".NET 8", "Python", "scikit-learn", "XGBoost", "SQL Server", "CRM Integration", "JWT"],
        categories: ["ml", "data-analysis", "enterprise"],
        stats: [
            { label: "ROI", value: "1,115%" },
            { label: "Accuracy", value: "95%" },
            { label: "Retention", value: "98.4%" }
        ],
        github: "https://github.com/saidulIslam1602/Customer-Segmentation-Personalized-Recommendation-Engine",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        featured: true
    },
    {
        id: 3,
        title: "BNPL Debt Management Platform",
        description: "Buy Now Pay Later fintech platform with microservices architecture (.NET 8): Payment API (21+ controllers), Risk Assessment API, Settlement API, Notification API. Real-time Node.js API with Socket.IO, Vue.js 3 Admin Portal, Angular Consumer/Merchant Portals. Comprehensive authentication (JWT, SAML 2.0, BankID, FEIDE). Applied SOLID principles, Entity Framework Core with SQL Server, achieving 80%+ code coverage and $10M+ transaction processing.",
        icon: "💳",
        tags: [".NET 8", "Node.js", "Vue.js", "Angular", "SQL Server", "MongoDB", "Redis", "SOLID"],
        categories: ["enterprise", "web-apps"],
        stats: [
            { label: "Transactions", value: "$10M+" },
            { label: "Coverage", value: "80%+" },
            { label: "Services", value: "4" }
        ],
        github: "https://github.com/saidulIslam1602/BNPL-Checkout-Debt-Management-Platform",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        featured: true
    },
    {
        id: 4,
        title: "MaritimeIQ Platform",
        description: "Enterprise maritime data engineering platform with .NET 8 Web API (20+ specialized REST API controllers, 500+ messages/sec), TypeScript frontend (Next.js 14, React 18), Kafka streaming with exactly-once semantics, Databricks analytics (2-16 worker nodes auto-scaling), PySpark batch processing (10M+ records/hour). Entity Framework Core with complex maritime data relationships, deployed to Azure with 99.9% uptime.",
        icon: "⚓",
        tags: ["C#", ".NET 8", "TypeScript", "Next.js", "Kafka", "Databricks", "PySpark", "Azure"],
        categories: ["data-engineering", "enterprise"],
        stats: [
            { label: "Throughput", value: "500+/sec" },
            { label: "Records", value: "10M+/hr" },
            { label: "Uptime", value: "99.9%" }
        ],
        github: "https://github.com/saidulIslam1602/MaritimeIQ_Platform",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
        featured: true
    },
    {
        id: 5,
        title: "MarineHMI Platform",
        description: "Enterprise-grade marine Human-Machine Interface platform for vessel control systems with .NET 8, ASP.NET Core, Entity Framework Core, industrial protocol integration (OPC UA, Modbus TCP/RTU), real-time data management with SignalR WebSocket, comprehensive alarm systems with RFC 7807 Problem Details, JWT authentication with 11 maritime-specific roles, multi-tier caching with Redis, and Serilog structured logging. Production-ready with Docker, Kubernetes, 80%+ code coverage.",
        icon: "🚢",
        tags: [".NET 8", "ASP.NET Core", "SignalR", "Docker", "Kubernetes", "OPC UA", "Modbus"],
        categories: ["enterprise", "data-engineering"],
        stats: [
            { label: "Protocols", value: "2+" },
            { label: "Coverage", value: "80%" },
            { label: "Roles", value: "11" }
        ],
        github: "https://github.com/saidulIslam1602/MarineHMI-Platform",
        image: "https://images.unsplash.com/photo-1564157439137-2117840930da?w=800&q=80",
        featured: true
    },
    {
        id: 6,
        title: "SMART-TRAIN AI Medical Training",
        description: "AI-powered medical training platform with real-time procedure analysis using computer vision, MediaPipe pose estimation (<100ms latency), OpenCV, MLflow for ML lifecycle, Azure ML deployment with auto-scaling, comprehensive compliance frameworks (ISO 13485, IEC 62304, HIPAA/GDPR), achieving 97.3% accuracy in quality assessment. FastAPI REST API with WebSocket support, parallel video processing with Celery and Redis.",
        icon: "🏥",
        tags: ["Python", "FastAPI", "MediaPipe", "OpenCV", "MLflow", "Azure ML", "Computer Vision"],
        categories: ["ai", "ml", "computer-vision"],
        stats: [
            { label: "Accuracy", value: "97.3%" },
            { label: "Latency", value: "<100ms" },
            { label: "Compliance", value: "ISO 13485" }
        ],
        github: "https://github.com/saidulIslam1602/SMART-TRAIN-AI-Powered-Medical-Training-Platform",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        featured: true
    },
    {
        id: 7,
        title: "Agricultural IoT Platform",
        description: "Comprehensive agricultural IoT platform with microservices architecture: FastAPI REST API, ML inference service, background worker services. Airflow DAGs for ETL orchestration, PySpark batch processing, Kafka streaming for real-time IoT sensor data, dbt transformations, Great Expectations for data quality, TypeScript/React frontend with Vite. PostgreSQL with TimescaleDB, Redis caching, Prometheus/Grafana monitoring. Docker Compose for development, Kubernetes for production with 80%+ test coverage.",
        icon: "🌾",
        tags: ["Python", "FastAPI", "PostgreSQL", "Kafka", "Airflow", "Spark", "Kubernetes", "dbt"],
        categories: ["data-engineering", "ml"],
        stats: [
            { label: "Coverage", value: "80%+" },
            { label: "Services", value: "5+" },
            { label: "Real-time", value: "Kafka" }
        ],
        github: "https://github.com/saidulIslam1602/Agricultural-IoT-Platform",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
        featured: false
    },
    {
        id: 8,
        title: "Tele-Doctor",
        description: "AI-powered telemedicine platform with .NET 8, Azure OpenAI GPT-4-powered clinical decision support with RAG system, multi-agent system (6 specialized AI agents for healthcare automation), Norwegian healthcare integration (Helsenorge health portal, E-Resept electronic prescription), Entity Framework Core 8, SignalR for real-time video consultations, Blazor WebAssembly. Terraform IaC with hub-spoke network architecture, AKS clusters with Calico network policies, zero trust security with private endpoints, 99.9% SLO, comprehensive AI testing framework.",
        icon: "💊",
        tags: [".NET 8", "Azure OpenAI", "Blazor", "SignalR", "Terraform", "Kubernetes", "EF Core"],
        categories: ["genai", "enterprise"],
        stats: [
            { label: "SLO", value: "99.9%" },
            { label: "Agents", value: "6" },
            { label: "AI Model", value: "GPT-4" }
        ],
        github: "https://github.com/saidulIslam1602/Tele-Doctor",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        featured: true
    },
    {
        id: 9,
        title: "Knowledge Graph Platform",
        description: "W3C-compliant enterprise knowledge graph platform with Python, FastAPI, RDFLib for RDF 1.1/RDFS/OWL 2, PySHACL for data quality validation with SHACL compliance reporting, advanced SPARQL 1.1 queries (path finding, connected resources, full-text search), Apache Jena Fuseki triple store integration, React dashboard with TypeScript and D3.js for knowledge graph visualization, RDFS/OWL reasoning with automated inference, multi-ontology mapping with conflict detection. Docker Compose and Kubernetes deployment with PostgreSQL metadata storage and Redis caching.",
        icon: "🕸️",
        tags: ["Python", "FastAPI", "RDFLib", "SPARQL", "React", "D3.js", "TypeScript"],
        categories: ["data-engineering", "web-apps"],
        stats: [
            { label: "Standards", value: "W3C" },
            { label: "Queries", value: "SPARQL" },
            { label: "Validation", value: "SHACL" }
        ],
        github: "https://github.com/saidulIslam1602/Enterprise-Data-Knowledge-Graph-Ontology-Platform",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
        featured: false
    },
    {
        id: 10,
        title: "PetroVue Dashboard",
        description: "Petroleum industry dashboard for Norwegian Continental Shelf with React 19, TypeScript, Material-UI, D3.js. Upstream operations (well performance analytics, drilling operations tracking, reservoir engineering tools), midstream operations (pipeline monitoring for Norpipe, Langeled with integrity management), ESG dashboard (carbon management, sustainability metrics, climate goals tracking), Norwegian regulatory compliance (Oljedirektoratet, Petroleumstilsynet), complete nb-NO localization with 100+ petroleum terms. Sub-3s load times optimized for offshore platform connectivity, WCAG 2.1 AA compliance, Jest/Cypress testing with 85%+ coverage.",
        icon: "🛢️",
        tags: ["React 19", "TypeScript", "Material-UI", "D3.js", "Jest", "Cypress"],
        categories: ["web-apps", "data-analysis"],
        stats: [
            { label: "Load Time", value: "<3s" },
            { label: "Coverage", value: "85%+" },
            { label: "WCAG", value: "2.1 AA" }
        ],
        github: "https://github.com/saidulIslam1602/PetroVue",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
        featured: false
    },
    {
        id: 11,
        title: "AI YouTube Insights",
        description: "Enterprise AI platform for YouTube video analysis with Python, Streamlit, LangChain for sophisticated content understanding, OpenAI GPT-4, FAISS-powered vector search for semantic content discovery, multi-language support with automatic language detection, multi-tenant client management with authentication and quotas, real-time analytics tracking (usage patterns, performance metrics, user behavior), AI-generated confidence scoring for response quality, intelligent caching with Redis, SQLite for development, PostgreSQL for production. Docker containerization with Kubernetes, Prometheus/Grafana monitoring, ELK stack logging.",
        icon: "🎥",
        tags: ["Python", "Streamlit", "LangChain", "OpenAI", "FAISS", "Redis", "Docker"],
        categories: ["genai", "data-analysis"],
        stats: [
            { label: "Model", value: "GPT-4" },
            { label: "Search", value: "FAISS" },
            { label: "Languages", value: "Multi" }
        ],
        github: "https://github.com/saidulIslam1602/-AI-Powered-YouTube-Video-Insights-with-Streamlit-LangChain-and-OpenAI-",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
        featured: true
    },
    {
        id: 12,
        title: "Transaction Anomaly Detection",
        description: "Enterprise fraud detection with Python, PyTorch, TensorFlow: Multi-model architecture (XGBoost AUC 0.9939, LightGBM, Random Forest, Isolation Forest, Autoencoder, LSTM Autoencoder, Transformer), perfect precision (1.0) with 96% recall, rule-based AML scenarios with conservative thresholds. Complete data analyst capabilities: SQL and Databricks medallion architecture (Bronze/Silver/Gold), dbt data modeling (staging/intermediate/marts), PySpark SQL transformations, Python analytics (23 modules), BI export service for Power BI/Looker, self-service Streamlit dashboard, LLM integration (GPT-4) with RAG pipeline, FastAPI REST API (<50ms latency). Azure cloud-native with AKS, 99.9% uptime, GDPR and EU AI Act compliant.",
        icon: "🔒",
        tags: ["Python", "PyTorch", "XGBoost", "Databricks", "dbt", "FastAPI", "Power BI", "Azure"],
        categories: ["ml", "data-analysis", "data-engineering"],
        stats: [
            { label: "AUC", value: "0.9939" },
            { label: "Precision", value: "100%" },
            { label: "Latency", value: "<50ms" }
        ],
        github: "https://github.com/saidulIslam1602/Transaction-Anomaly-Detection",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        featured: true
    },
    {
        id: 13,
        title: "FarmFlow Management",
        description: "Modern agricultural management platform with Next.js, TypeScript, React, Tailwind CSS. Comprehensive field management (complete CRUD operations with crop tracking), D3.js data visualization (crop yield, soil moisture, temperature/humidity, health mapping), analytics dashboard (stats cards, weather widget, recent activities tracking), multi-step forms with progress tracking and real-time validation, Next.js API routes with full CRUD operations, comprehensive UI component library (Button, Card, Modal, Toast, Skeleton). Jest with React Testing Library (15+ test cases, 85%+ coverage), code splitting, image optimization, sub-3s load times. Vercel deployment with automatic CI/CD, Sentry error monitoring.",
        icon: "🚜",
        tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "D3.js", "Vercel"],
        categories: ["web-apps", "data-analysis"],
        stats: [
            { label: "Coverage", value: "85%+" },
            { label: "Load Time", value: "<3s" },
            { label: "Charts", value: "D3.js" }
        ],
        github: "https://github.com/saidulIslam1602/FarmFlow---Agricultural-Management-Platform",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
        featured: false
    },
    {
        id: 14,
        title: "GameMatch Recommendation Engine",
        description: "Enterprise gaming intelligence platform with Python, OpenAI: Custom GPT-3.5-turbo fine-tuning for game-specific recommendations, advanced RAG system (semantic similarity, categorical filtering, hybrid search), prompt engineering (zero-shot, few-shot, chain-of-thought, persona-based strategies), hierarchical gaming ontology with multi-level taxonomy, PyTorch custom neural embedding models for semantic search, Hugging Face transformers, A/B testing framework with statistical significance, Microsoft SQL Server, FastAPI (<200ms API response time), Streamlit analytics. Business metrics: $1,450,000 projected annual revenue, 627% ROI, 24.7% CTR, 89.1% model accuracy, 78.4% recommendation precision, 85% catalog coverage. Docker deployment with MLOps dashboard.",
        icon: "🎮",
        tags: ["Python", "OpenAI", "PyTorch", "FastAPI", "SQL Server", "Streamlit"],
        categories: ["genai", "ml"],
        stats: [
            { label: "ROI", value: "627%" },
            { label: "Accuracy", value: "89.1%" },
            { label: "CTR", value: "24.7%" }
        ],
        github: "https://github.com/saidulIslam1602/GameMatch-Personalized-Game-Recommendation-Engine",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
        featured: true
    },
    {
        id: 15,
        title: "Fresh Supply Chain Intelligence",
        description: "Enterprise supply chain AI/ML platform with Python, PyTorch: EfficientNet-B4 for quality assessment (94.2% accuracy), Temporal Fusion Transformer for time series forecasting (87.8% forecast accuracy), Graph Neural Networks for advanced route optimization (30%+ cost savings), real-time IoT data streaming (<2s latency), advanced data validation and preprocessing (25+ automated features), FastAPI, PostgreSQL, Redis. Multi-factor authentication, RBAC with 7 hierarchical roles, threat detection, multi-tier caching, auto-scaling (3-10x), 40-60% cost reduction. Business impact: 30% waste reduction, $5.9M annual savings, 99.9% uptime, 787K products across 7 warehouses. Kubernetes-native with blue-green deployment, Prometheus/Grafana monitoring.",
        icon: "🥬",
        tags: ["Python", "PyTorch", "EfficientNet", "FastAPI", "PostgreSQL", "Kubernetes"],
        categories: ["ml", "computer-vision", "data-engineering"],
        stats: [
            { label: "Accuracy", value: "94.2%" },
            { label: "Savings", value: "$5.9M" },
            { label: "Uptime", value: "99.9%" }
        ],
        github: "https://github.com/saidulIslam1602/Fresh-Supply-Chain-Intelligence---Food-Waste-Prediction-Optimization",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
        featured: true
    },
    {
        id: 16,
        title: "Nordic News Sentiment Tracker",
        description: "Comprehensive data analytics platform for Nordic news media with Python, pandas: Multi-language sentiment analysis (Norwegian, Swedish, Danish, Finnish) with real-time scoring using spaCy, TextBlob, VADER, engagement metrics tracking (CTR, time on page, social sharing, user journey analysis), A/B testing framework (content layout experiments, headline optimization, statistical significance testing), GDPR compliance (privacy-first data handling, consent management, right to be forgotten), dbt for data transformations, ETL processes with data quality validation, Streamlit interactive dashboard with Plotly visualization, MSSQL Server for development, PostgreSQL for production, comprehensive compliance reporting with audit trails. Docker Compose deployment with sample data for demonstration.",
        icon: "📰",
        tags: ["Python", "pandas", "dbt", "PostgreSQL", "Streamlit", "spaCy", "Docker"],
        categories: ["data-analysis", "data-engineering"],
        stats: [
            { label: "Languages", value: "4" },
            { label: "Real-time", value: "Yes" },
            { label: "GDPR", value: "✓" }
        ],
        github: "https://github.com/saidulIslam1602/Nordic-News-Sentiment-and-Engagement-Tracker",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
        featured: false
    },
    {
        id: 17,
        title: "Document Intelligence Platform",
        description: "Comprehensive Microsoft Azure document intelligence platform with Python: Azure OpenAI integration (GPT-4, embeddings, custom fine-tuning capabilities), Azure Cognitive Services (Form Recognizer for document extraction, Translator for multi-language support, Content Moderator), microservices architecture (Azure Container Apps with API Gateway, batch processing services, analytics services), Microsoft Fabric integration (OneLake for data lakehouse, Data Warehouse, Real-time Intelligence), database migration tools (Teradata, Netezza, Oracle migration with schema conversion), PoC framework for customer demonstration, fine-tuning workflows with WebSocket monitoring, comprehensive metrics with Azure SQL operations. Azure-native with Bicep IaC, Kubernetes orchestration, Azure Functions for serverless processing, CI/CD pipelines, 10,000+ documents/hour processing capacity.",
        icon: "📄",
        tags: ["Python", "Azure OpenAI", "Azure Functions", "Microsoft Fabric", "Bicep", "Kubernetes"],
        categories: ["genai", "data-engineering"],
        stats: [
            { label: "Capacity", value: "10K+/hr" },
            { label: "Model", value: "GPT-4" },
            { label: "Cloud", value: "Azure" }
        ],
        github: "https://github.com/saidulIslam1602/Document-Intelligence-Platform",
        image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
        featured: false
    }
];

// =====================================
// NAVIGATION FUNCTIONALITY
// =====================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }
});

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// =====================================
// THEME SWITCHER
// =====================================

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    });
}

// =====================================
// PROJECTS FUNCTIONALITY
// =====================================

function renderProjects(projects = projectsData) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-categories="${project.categories.join(' ')}">
            ${project.image ? `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
            ` : ''}
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="project-link" title="View on GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tags.slice(0, 5).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                ${project.tags.length > 5 ? `<span class="tech-tag">+${project.tags.length - 5}</span>` : ''}
            </div>
            <div class="project-stats">
                ${project.stats.map(stat => `
                    <div class="project-stat">
                        <span class="project-stat-value">${stat.value}</span>
                        <span class="project-stat-label">${stat.label}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    updateProjectCount(projects.length);
}

function updateProjectCount(count) {
    const projectCount = document.getElementById('project-count');
    if (projectCount) {
        projectCount.textContent = `${count} Project${count !== 1 ? 's' : ''}`;
    }
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        if (filter === 'all') {
            renderProjects(projectsData);
        } else {
            const filtered = projectsData.filter(project => 
                project.categories.includes(filter)
            );
            renderProjects(filtered);
        }
    });
});

const projectSearch = document.getElementById('project-search');
const clearSearch = document.getElementById('clear-search');

if (projectSearch) {
    projectSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        if (clearSearch) {
            clearSearch.style.display = searchTerm ? 'block' : 'none';
        }
        
        const filtered = projectsData.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        renderProjects(filtered);
    });
}

if (clearSearch) {
    clearSearch.addEventListener('click', () => {
        if (projectSearch) {
            projectSearch.value = '';
            clearSearch.style.display = 'none';
            renderProjects(projectsData);
        }
    });
}

// =====================================
// SCROLL ANIMATIONS
// =====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// =====================================
// SKILLS PROGRESS BARS
// =====================================

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// =====================================
// SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navbarHeight = navbar?.offsetHeight || 80;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================================
// INITIALIZE
// =====================================

document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projectsData);
    
    document.querySelectorAll('.animate-child').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log('%c Portfolio Loaded Successfully! ', 'background: #0066FF; color: white; padding: 10px; border-radius: 5px; font-weight: bold;');
    console.log('%c 17 Projects | CV-Enhanced | Modern Design ', 'background: #00D4AA; color: black; padding: 5px; border-radius: 3px;');
});

window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});
