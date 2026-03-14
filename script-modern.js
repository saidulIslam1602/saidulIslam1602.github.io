// ======================================================
// PORTFOLIO — AI, DATA, GENAI, CLOUD, DEVOPS PROJECTS
// ======================================================

const projects = [
  {
    id: 1,
    title: "LLM-Powered Robotics Data Analysis Platform",
    desc: "Master's thesis research: two novel AI frameworks — ARMADA (Context-Augmented Anomaly Detection with ensemble ML) and FACTS (LLM-based document intelligence & troubleshooting system) — deployed across 50+ operational warehouse robots at HHS Robotics. Achieved 43.5% improvement in anomaly detection precision, 97.1% training-time reduction, 98% factuality verification accuracy, and 68–78% reduction in documentation search time.",
    category: "Machine Learning",
    tags: ["Python", "OpenAI GPT", "LangChain", "Isolation Forest", "One-Class SVM", "TF-IDF", "MLflow", "FastAPI"],
    stats: [{ v: "43.5%", k: "Detection Gain" }, { v: "97.1%", k: "Time Saved" }, { v: "98%", k: "Factuality" }],
    categories: ["ml", "genai"],
    github: "https://github.com/saidulIslam1602/Automated-Data-Analysis-with-Large-Language-Models-for-Warehouse-Robotics-Applications",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered CFO Document Intelligence Platform",
    desc: "Multi-tenant SaaS platform automating the financial document lifecycle for Nordic finance teams. Ingests invoices, contracts, and financial reports via PDF/DOCX/XLSX, runs LLM extraction with Azure OpenAI, semantic chunking into pgvector, hybrid search (semantic + full-text), contract renewal scanner, CFO review queue, and an agentic RAG assistant with citations. Microservices on Azure Service Bus with PostgreSQL + pgvector backend.",
    category: "Generative AI",
    tags: ["Python", "Azure OpenAI", "LangChain", "pgvector", "PostgreSQL", "FastAPI", "Next.js", "Azure Service Bus", "Terraform"],
    stats: [{ v: "RAG", k: "AI Assistant" }, { v: "Hybrid", k: "Search" }, { v: "Multi-tenant", k: "SaaS" }],
    categories: ["genai", "cloud", "data-engineering"],
    github: "https://github.com/saidulIslam1602/Business_Case_Study",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Transaction Anomaly Detection & Fraud Intelligence",
    desc: "Enterprise fraud detection and AML platform with multi-model architecture: XGBoost (AUC 0.9939), LightGBM, Random Forest, Isolation Forest, LSTM Autoencoder, and Transformer models achieving perfect precision (1.0) with 96% recall. Full data analyst stack: dbt medallion architecture (Bronze/Silver/Gold), PySpark SQL transformations, Power BI BI export, Streamlit self-service dashboard, GPT-4 RAG pipeline, FastAPI (<50ms latency). Azure-native with AKS, GDPR/EU AI Act compliant.",
    category: "Machine Learning",
    tags: ["Python", "PyTorch", "XGBoost", "Databricks", "dbt", "PySpark", "FastAPI", "Azure AKS", "Power BI"],
    stats: [{ v: "0.9939", k: "AUC Score" }, { v: "100%", k: "Precision" }, { v: "<50ms", k: "Latency" }],
    categories: ["ml", "data-engineering", "cloud"],
    github: "https://github.com/saidulIslam1602/Transaction-Anomaly-Detection",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    featured: true
  },
  {
    id: 4,
    title: "AI YouTube Video Insights",
    desc: "Enterprise AI platform for YouTube video analysis using LangChain, OpenAI GPT-4, and FAISS-powered semantic vector search. Features multi-language automatic detection, multi-tenant client management with quotas, AI-generated confidence scoring, real-time usage analytics, intelligent Redis caching, and ELK stack logging. Deployed with Docker/Kubernetes, Prometheus/Grafana monitoring, PostgreSQL for production.",
    category: "Generative AI",
    tags: ["Python", "Streamlit", "LangChain", "OpenAI GPT-4", "FAISS", "Redis", "Docker", "Kubernetes", "PostgreSQL"],
    stats: [{ v: "GPT-4", k: "Model" }, { v: "FAISS", k: "Vector Search" }, { v: "Multi-lang", k: "Support" }],
    categories: ["genai", "cloud"],
    github: "https://github.com/saidulIslam1602/-AI-Powered-YouTube-Video-Insights-with-Streamlit-LangChain-and-OpenAI-",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Azure Document Intelligence Platform",
    desc: "Comprehensive Microsoft Azure document intelligence platform: Azure OpenAI (GPT-4, embeddings, fine-tuning), Azure Cognitive Services (Form Recognizer, Translator, Content Moderator), microservices on Azure Container Apps with API Gateway, Microsoft Fabric integration (OneLake data lakehouse, Real-time Intelligence), database migration tools (Teradata, Netezza, Oracle), Bicep IaC, Azure Functions serverless processing — 10,000+ documents/hour throughput.",
    category: "Cloud / DevOps",
    tags: ["Python", "Azure OpenAI", "Azure Functions", "Microsoft Fabric", "Bicep IaC", "Kubernetes", "Azure Container Apps"],
    stats: [{ v: "10K+/hr", k: "Throughput" }, { v: "GPT-4", k: "Model" }, { v: "Azure", k: "Native" }],
    categories: ["genai", "cloud", "data-engineering"],
    github: "https://github.com/saidulIslam1602/Document-Intelligence-Platform",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
    featured: true
  },
  {
    id: 6,
    title: "AWS Privacy & Terms Policy Analyzer",
    desc: "Chrome/Edge browser extension that automatically analyzes privacy policies, terms & conditions, and cookie policies using AWS Bedrock (Claude Sonnet). Identifies 3–5 most harmful points for users, features RAG-powered interactive chat with DynamoDB-backed storage and optional OpenSearch Serverless vector search. FastAPI backend with AWS Bedrock direct integration, real-time policy analysis, and contextual Q&A.",
    category: "Generative AI",
    tags: ["Python", "AWS Bedrock", "Claude Sonnet", "FastAPI", "DynamoDB", "OpenSearch", "RAG", "Chrome Extension"],
    stats: [{ v: "Claude", k: "AI Model" }, { v: "RAG", k: "Chat System" }, { v: "AWS", k: "Cloud" }],
    categories: ["genai", "cloud"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    featured: true
  },
  {
    id: 7,
    title: "Customer Segmentation & AI Recommendation Engine",
    desc: "Enterprise ML platform: K-means clustering (silhouette score 0.8928), churn prediction (95% accuracy), personalized recommendations achieving 1,115% ROI, processing 4,338+ customer records. Python ML services with XGBoost, FastAPI REST API with JWT auth, Power BI dashboards, GDPR-compliant data pipelines, CRM integration patterns, and batch/real-time scoring with MLflow experiment tracking.",
    category: "Machine Learning",
    tags: ["Python", "scikit-learn", "XGBoost", "K-means", "FastAPI", "MLflow", "Power BI", "SQL Server", "Docker"],
    stats: [{ v: "1,115%", k: "ROI" }, { v: "95%", k: "Churn Accuracy" }, { v: "0.89", k: "Silhouette" }],
    categories: ["ml", "data-engineering"],
    github: "https://github.com/saidulIslam1602/Customer-Segmentation-Personalized-Recommendation-Engine",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: true
  },
  {
    id: 8,
    title: "Agricultural IoT Data Platform",
    desc: "End-to-end agricultural IoT platform with microservices: FastAPI REST API, ML inference service, Airflow DAGs for ETL orchestration, PySpark batch processing, Kafka streaming for real-time IoT sensor data, dbt transformations with Great Expectations data quality validation. PostgreSQL with TimescaleDB time-series extension, Redis caching, Prometheus/Grafana monitoring. Kubernetes production deployment with 80%+ test coverage.",
    category: "Data Engineering",
    tags: ["Python", "FastAPI", "Apache Kafka", "Apache Airflow", "PySpark", "dbt", "TimescaleDB", "Kubernetes", "Prometheus"],
    stats: [{ v: "Real-time", k: "Kafka Stream" }, { v: "80%+", k: "Test Coverage" }, { v: "5+", k: "Microservices" }],
    categories: ["data-engineering", "ml", "cloud"],
    github: "https://github.com/saidulIslam1602/Agricultural-IoT-Platform",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    featured: false
  },
  {
    id: 9,
    title: "Fresh Supply Chain Intelligence & Waste Prediction",
    desc: "AI/ML platform for food supply chain optimization: EfficientNet-B4 quality assessment (94.2% accuracy), Temporal Fusion Transformer time-series forecasting (87.8%), Graph Neural Networks route optimization (30%+ cost savings), real-time IoT streaming (<2s latency), RBAC with 7 hierarchical roles, auto-scaling (3–10×). Business impact: 30% waste reduction, $5.9M annual savings, 787K products across 7 warehouses. Kubernetes with blue-green deployment.",
    category: "Machine Learning",
    tags: ["Python", "PyTorch", "EfficientNet-B4", "GNN", "FastAPI", "PostgreSQL", "Kubernetes", "Prometheus"],
    stats: [{ v: "94.2%", k: "CV Accuracy" }, { v: "$5.9M", k: "Annual Savings" }, { v: "30%", k: "Waste Reduction" }],
    categories: ["ml", "computer-vision", "data-engineering"],
    github: "https://github.com/saidulIslam1602/Fresh-Supply-Chain-Intelligence---Food-Waste-Prediction-Optimization",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    featured: true
  },
  {
    id: 10,
    title: "GameMatch — Personalized Game Recommendation Engine",
    desc: "Enterprise AI recommendation platform: custom GPT-3.5-turbo fine-tuning, advanced RAG (semantic similarity + hybrid search), hierarchical gaming ontology, PyTorch custom neural embeddings, Hugging Face transformers, A/B testing with statistical significance, chain-of-thought & persona-based prompt engineering. Business metrics: $1.45M projected revenue, 627% ROI, 89.1% model accuracy, 78.4% recommendation precision. FastAPI + Streamlit analytics dashboard.",
    category: "Generative AI",
    tags: ["Python", "OpenAI GPT-3.5", "PyTorch", "Hugging Face", "RAG", "FastAPI", "Streamlit", "SQL Server", "Docker"],
    stats: [{ v: "627%", k: "ROI" }, { v: "89.1%", k: "Accuracy" }, { v: "24.7%", k: "CTR" }],
    categories: ["genai", "ml"],
    github: "https://github.com/saidulIslam1602/GameMatch-Personalized-Game-Recommendation-Engine",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    featured: false
  },
  {
    id: 11,
    title: "MaritimeIQ — Maritime Data Engineering Platform",
    desc: "Enterprise maritime data engineering platform: Kafka streaming with exactly-once semantics (500+ messages/sec), Databricks analytics with 2–16 worker auto-scaling nodes, PySpark batch processing (10M+ records/hour), Azure deployment with 99.9% uptime. Comprehensive ML pipelines for vessel performance analytics, route optimization, ESG dashboards, and Norwegian Continental Shelf regulatory compliance. Full observability with Prometheus/Grafana.",
    category: "Data Engineering",
    tags: ["Python", "Apache Kafka", "Databricks", "PySpark", "Azure", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    stats: [{ v: "500+/sec", k: "Throughput" }, { v: "10M+/hr", k: "Records" }, { v: "99.9%", k: "Uptime" }],
    categories: ["data-engineering", "cloud"],
    github: "https://github.com/saidulIslam1602/MaritimeIQ_Platform",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    featured: true
  },
  {
    id: 12,
    title: "Nordic News Sentiment & Engagement Analytics",
    desc: "Multi-language sentiment analysis platform for Nordic news media (Norwegian, Swedish, Danish, Finnish) using spaCy, TextBlob, and VADER. Engagement metrics tracking (CTR, time-on-page, social sharing), A/B testing framework with statistical significance, GDPR-compliant data pipelines with consent management, dbt transformations, Great Expectations quality checks, Streamlit interactive dashboard with Plotly visualizations, Docker Compose deployment.",
    category: "NLP & Analytics",
    tags: ["Python", "spaCy", "VADER", "dbt", "PostgreSQL", "Streamlit", "Plotly", "Great Expectations", "Docker"],
    stats: [{ v: "4", k: "Languages" }, { v: "Real-time", k: "Scoring" }, { v: "GDPR", k: "Compliant" }],
    categories: ["nlp", "data-engineering"],
    github: "https://github.com/saidulIslam1602/Nordic-News-Sentiment-and-Engagement-Tracker",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    featured: false
  },
  {
    id: 13,
    title: "SMART-TRAIN — AI Medical Procedure Training Platform",
    desc: "AI-powered medical training platform with real-time computer vision procedure analysis using MediaPipe pose estimation (<100ms latency), OpenCV, and MLflow ML lifecycle management. Azure ML deployment with auto-scaling, ISO 13485 / IEC 62304 / HIPAA / GDPR compliance frameworks, FastAPI with WebSocket, parallel video processing with Celery/Redis, 97.3% accuracy in quality assessment, Kubernetes-native with Prometheus monitoring.",
    category: "Computer Vision",
    tags: ["Python", "PyTorch", "MediaPipe", "OpenCV", "MLflow", "Azure ML", "FastAPI", "Celery", "Kubernetes"],
    stats: [{ v: "97.3%", k: "Accuracy" }, { v: "<100ms", k: "Latency" }, { v: "ISO 13485", k: "Compliant" }],
    categories: ["computer-vision", "ml", "cloud"],
    github: "https://github.com/saidulIslam1602/SMART-TRAIN-AI-Powered-Medical-Training-Platform",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: true
  }
];

// ──────────────────────────────────────────────────────
// CERTIFICATIONS DATA
// ──────────────────────────────────────────────────────
const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    authorizedBy: "DeepLearning.AI & AWS",
    category: "Generative AI",
    tags: ["Generative AI", "LLMs", "AWS", "DeepLearning.AI"],
    stats: [{ v: "Coursera", k: "Platform" }, { v: "DeepLearning.AI", k: "Authorized By" }, { v: "Oct 2025", k: "Completed" }],
    pdf: "assets/certifications/generative-ai.pdf",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80"
  },
  {
    title: "MLOps Essentials: Model Development & Integration",
    issuer: "LinkedIn Learning",
    authorizedBy: "LinkedIn Learning",
    category: "MLOps",
    tags: ["MLOps", "CI/CD", "Model Monitoring", "MLflow"],
    stats: [{ v: "LinkedIn", k: "Platform" }, { v: "CI/CD", k: "Pipelines" }, { v: "Nov 2025", k: "Completed" }],
    pdf: "assets/certifications/mlops-essentials.pdf",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
  },
  {
    title: "Microsoft Azure for Data Engineering",
    issuer: "Coursera",
    authorizedBy: "Microsoft",
    category: "Azure / Cloud",
    tags: ["Azure", "Data Engineering", "Cloud Pipelines", "Microsoft"],
    stats: [{ v: "Coursera", k: "Platform" }, { v: "Microsoft", k: "Authorized By" }, { v: "Feb 2024", k: "Completed" }],
    pdf: "assets/certifications/azure-data-engineering.pdf",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    title: "Azure Data Lake for Developers",
    issuer: "LinkedIn Learning",
    authorizedBy: "LinkedIn Learning",
    category: "Azure / Cloud",
    tags: ["Azure Data Lake", "ADLS Gen2", "Big Data", "Microsoft Azure"],
    stats: [{ v: "LinkedIn", k: "Platform" }, { v: "ADLS Gen2", k: "Storage" }, { v: "Nov 2025", k: "Completed" }],
    pdf: "assets/certifications/azure-data-lake.pdf",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    title: "Data Storage in Microsoft Azure",
    issuer: "Coursera",
    authorizedBy: "Microsoft",
    category: "Azure / Cloud",
    tags: ["Azure Storage", "Blob", "Queue", "Microsoft"],
    stats: [{ v: "Coursera", k: "Platform" }, { v: "Microsoft", k: "Authorized By" }, { v: "Feb 2024", k: "Completed" }],
    pdf: "assets/certifications/azure-data-storage.pdf",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
  },
  {
    title: "Data Integration with Microsoft Azure Data Factory",
    issuer: "Coursera",
    authorizedBy: "Microsoft",
    category: "Azure / Cloud",
    tags: ["Azure Data Factory", "ETL", "Data Pipelines", "Microsoft"],
    stats: [{ v: "Coursera", k: "Platform" }, { v: "Microsoft", k: "Authorized By" }, { v: "Feb 2024", k: "Completed" }],
    pdf: "assets/certifications/azure-data-factory.pdf",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Introduction to Microsoft Azure Synapse Analytics",
    issuer: "Coursera",
    authorizedBy: "Microsoft",
    category: "Azure / Cloud",
    tags: ["Azure Synapse", "Analytics", "Data Warehouse", "Microsoft"],
    stats: [{ v: "Coursera", k: "Platform" }, { v: "Microsoft", k: "Authorized By" }, { v: "Feb 2024", k: "Completed" }],
    pdf: "assets/certifications/azure-synapse-intro.pdf",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    title: "Microsoft Azure Synapse for Developers",
    issuer: "LinkedIn Learning",
    authorizedBy: "LinkedIn Learning",
    category: "Azure / Cloud",
    tags: ["Synapse", "Spark Pools", "SQL Pools", "Microsoft Azure"],
    stats: [{ v: "LinkedIn", k: "Platform" }, { v: "Spark Pools", k: "Feature" }, { v: "Nov 2025", k: "Completed" }],
    pdf: "assets/certifications/azure-synapse-developers.pdf",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
  },
  {
    title: "Data Warehousing with Microsoft Azure Synapse",
    issuer: "Coursera",
    authorizedBy: "Microsoft",
    category: "Azure / Cloud",
    tags: ["Data Warehousing", "Synapse Analytics", "T-SQL", "Microsoft"],
    stats: [{ v: "Coursera", k: "Platform" }, { v: "Microsoft", k: "Authorized By" }, { v: "Feb 2024", k: "Completed" }],
    pdf: "assets/certifications/azure-synapse-warehousing.pdf",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80"
  },
  {
    title: "End-to-End Real-World Data Engineering with Databricks",
    issuer: "LinkedIn Learning",
    authorizedBy: "LinkedIn Learning",
    category: "Data Engineering",
    tags: ["Databricks", "Delta Lake", "PySpark", "Unity Catalog"],
    stats: [{ v: "LinkedIn", k: "Platform" }, { v: "Delta Lake", k: "Storage" }, { v: "Nov 2025", k: "Completed" }],
    pdf: "assets/certifications/databricks-data-engineering.pdf",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    title: "Advanced Azure Microservices with .NET for Developers",
    issuer: "LinkedIn Learning",
    authorizedBy: "LinkedIn Learning",
    category: "Azure / Cloud",
    tags: [".NET", "Microservices", "Azure", "Service Mesh"],
    stats: [{ v: "LinkedIn", k: "Platform" }, { v: ".NET", k: "Framework" }, { v: "Nov 2025", k: "Completed" }],
    pdf: "assets/certifications/azure-microservices-dotnet.pdf",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  },
  {
    title: ".NET Microservices for Azure Developers",
    issuer: "LinkedIn Learning",
    authorizedBy: "LinkedIn Learning",
    category: "Azure / Cloud",
    tags: [".NET", "Azure Container Apps", "Kubernetes", "Microservices"],
    stats: [{ v: "LinkedIn", k: "Platform" }, { v: "K8s", k: "Orchestration" }, { v: "Nov 2025", k: "Completed" }],
    pdf: "assets/certifications/dotnet-microservices-azure.pdf",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
  }
];

// ──────────────────────────────────────────────────────
// RENDER CERTIFICATIONS
// ──────────────────────────────────────────────────────
function renderCertifications() {
  const grid = document.getElementById('certs-grid');
  if (!grid) return;

  grid.innerHTML = certifications.map(c => `
    <div class="project-card fade-up visible">
      <div class="pc-img">
        <img src="${c.image}" alt="${c.title}" loading="lazy">
      </div>
      <div class="pc-body">
        <div class="pc-top">
          <span class="pc-category">${c.category}</span>
          <div class="pc-links">
            <a href="${c.pdf}" target="_blank" rel="noopener" title="View Certificate">
              <i class="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>
        <h3>${c.title}</h3>
        <p class="pc-desc" style="-webkit-line-clamp:2">${c.issuer} &nbsp;·&nbsp; ${c.authorizedBy}</p>
        <div class="pc-tags">
          ${c.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="pc-stats">
          ${c.stats.map(s => `<div class="pc-stat"><span class="pc-stat-val">${s.v}</span><span class="pc-stat-key">${s.k}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ──────────────────────────────────────────────────────
// RENDER PROJECTS
// ──────────────────────────────────────────────────────
function renderProjects(list) {
  const grid = document.getElementById('projects-grid');
  const noRes = document.getElementById('no-results');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '';
    if (noRes) noRes.style.display = 'block';
    return;
  }
  if (noRes) noRes.style.display = 'none';

  grid.innerHTML = list.map(p => `
    <div class="project-card fade-up" data-cats="${p.categories.join(' ')}">
      <div class="pc-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="pc-body">
        <div class="pc-top">
          <span class="pc-category">${p.category}</span>
          <div class="pc-links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" title="GitHub"><i class="fab fa-github"></i></a>` : ''}
          </div>
        </div>
        <h3>${p.title}</h3>
        <p class="pc-desc">${p.desc}</p>
        <div class="pc-tags">
          ${p.tags.slice(0, 6).map(t => `<span>${t}</span>`).join('')}
          ${p.tags.length > 6 ? `<span>+${p.tags.length - 6} more</span>` : ''}
        </div>
        <div class="pc-stats">
          ${p.stats.map(s => `<div class="pc-stat"><span class="pc-stat-val">${s.v}</span><span class="pc-stat-key">${s.k}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // trigger fade-up on newly rendered cards
  requestAnimationFrame(() => {
    grid.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });

  // update total count badge
  const countBadge = document.getElementById('total-count');
  if (countBadge && list === projects) countBadge.textContent = list.length;
}

// ──────────────────────────────────────────────────────
// FILTERS
// ──────────────────────────────────────────────────────
let activeFilter = 'all';
let searchTerm = '';

function applyFilters() {
  let list = projects;
  if (activeFilter !== 'all') list = list.filter(p => p.categories.includes(activeFilter));
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );
  }
  renderProjects(list);
}

document.querySelectorAll('.pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});

const searchInput = document.getElementById('project-search');
const clearBtn = document.getElementById('clear-search');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchTerm = e.target.value.trim();
    if (clearBtn) clearBtn.style.display = searchTerm ? 'block' : 'none';
    applyFilters();
  });
}
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    clearBtn.style.display = 'none';
    applyFilters();
  });
}

// ──────────────────────────────────────────────────────
// NAVBAR SCROLL
// ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const scrollFill = document.getElementById('scroll-fill');

window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);

  if (scrollFill) {
    const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollFill.style.width = total ? (window.scrollY / total * 100) + '%' : '0';
  }

  // back to top
  const btt = document.getElementById('back-to-top');
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ──────────────────────────────────────────────────────
// HAMBURGER
// ──────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));
}

// ──────────────────────────────────────────────────────
// THEME TOGGLE
// ──────────────────────────────────────────────────────
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const saved = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', saved);
if (themeIcon) themeIcon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (themeIcon) themeIcon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// ──────────────────────────────────────────────────────
// BACK TO TOP
// ──────────────────────────────────────────────────────
const bttBtn = document.getElementById('back-to-top');
if (bttBtn) bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ──────────────────────────────────────────────────────
// SMOOTH SCROLL NAV LINKS
// ──────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = (navbar ? navbar.offsetHeight : 64) + 8;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// ──────────────────────────────────────────────────────
// SCROLL ANIMATIONS (IntersectionObserver)
// ──────────────────────────────────────────────────────
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.about-grid, .skills-grid, .comp-section, .exp-list, .timeline, .research-card, .award-card, .contact-grid').forEach(el => {
  el.classList.add('fade-up');
  io.observe(el);
});

// ──────────────────────────────────────────────────────
// COMPETENCY BAR ANIMATIONS
// ──────────────────────────────────────────────────────
const compObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.comp-fill').forEach(bar => {
        bar.style.width = (bar.dataset.w || 0) + '%';
      });
      compObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const compSection = document.querySelector('.comp-section');
if (compSection) compObserver.observe(compSection);

// ──────────────────────────────────────────────────────
// CONTACT FORM
// ──────────────────────────────────────────────────────
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const privacy = document.getElementById('privacy');

    document.querySelectorAll('.ferr').forEach(el => el.textContent = '');

    if (!name.value.trim()) { document.getElementById('name-err').textContent = 'Name is required.'; valid = false; }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      document.getElementById('email-err').textContent = 'Valid email is required.'; valid = false;
    }
    if (!message.value.trim()) { document.getElementById('msg-err').textContent = 'Message is required.'; valid = false; }
    if (!privacy.checked) { valid = false; }

    if (!valid) return;

    const btnText = document.getElementById('btn-text');
    const btnLoading = document.getElementById('btn-loading');
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';

    setTimeout(() => {
      btnText.style.display = 'inline-flex';
      btnLoading.style.display = 'none';
      document.getElementById('form-success').style.display = 'flex';
      form.reset();
    }, 1500);
  });
}

// ──────────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
  renderCertifications();
  document.getElementById('total-count').textContent = projects.length;

  // Active nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = '';
          a.style.background = '';
          if (a.getAttribute('href') === '#' + e.target.id) {
            a.style.color = 'var(--brand-600)';
            a.style.background = 'var(--brand-50)';
          }
        });
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => sectionObserver.observe(s));

  console.log('%c Md Saidul Islam — AI Portfolio Loaded ', 'background:#2563eb;color:#fff;padding:8px 16px;border-radius:6px;font-weight:700;');
  console.log('%c 13 AI/Data/GenAI/Cloud/DevOps Projects ', 'background:#8b5cf6;color:#fff;padding:4px 12px;border-radius:4px;');
});
