// Projects data - single source of truth
const projectsData = [
    {
        id: "climate-risk-analyzer",
        title: "Climate Risk & Business Vulnerability Analyzer",
        slug: "climate-risk-analyzer",
        blurb: "A comprehensive analytics platform that combines climate data, disaster records, and industry sector information to assess business vulnerability to climate events and provide actionable risk insights.",
        ctaType: "learn",
        detailsPage: true,
        demoUrl: null,
        keywords: ["climate", "risk analysis", "business vulnerability", "data visualization", "dashboard", "analytics"],
        technologies: ["Python", "Dash", "Pandas", "Scikit-learn", "Plotly"],
        githubUrl: "https://github.com/praneethvykuntam/climateRisk-BusinessVulnerabilityAnalyzer"
    },
    {
        id: "retail-demand-forecasting",
        title: "Retail Demand Forecasting & Price Elasticity",
        slug: "retail-demand-forecasting",
        blurb: "End-to-end ML pipeline for forecasting weekly retail demand and estimating price elasticity. Features advanced time series forecasting and price sensitivity analysis for inventory optimization.",
        ctaType: "learn",
        detailsPage: true,
        demoUrl: null,
        keywords: ["retail", "demand forecasting", "price elasticity", "time series", "machine learning", "inventory"],
        technologies: ["Python", "Prophet", "ARIMA", "Pandas", "Plotly"],
        githubUrl: "https://github.com/praneethvykuntam/Retail-Demand-Forecasting-Price-Elasticity"
    },
    {
        id: "trade-policy-prediction",
        title: "Trade Policy Prediction",
        slug: "trade-policy-prediction",
        blurb: "Using advanced NLP and machine learning to understand policy signals and forecast economic impacts. Analyzes sentiment in trade policy documents to predict market movements.",
        ctaType: "learn",
        detailsPage: true,
        demoUrl: null,
        keywords: ["trade policy", "NLP", "sentiment analysis", "economic prediction", "machine learning", "policy analysis"],
        technologies: ["Python", "NLTK", "Transformers", "TensorFlow", "Pandas"],
        githubUrl: "https://github.com/praneethvykuntam/tradepolicy"
    },
    {
        id: "paper-insight-engine",
        title: "Paper Insight Engine",
        slug: "paper-insight-engine",
        blurb: "An AI-powered semantic search and summarization engine designed for academic literature. Helps researchers quickly discover and understand relevant papers through advanced NLP techniques.",
        ctaType: "learn",
        detailsPage: true,
        demoUrl: null,
        keywords: ["academic search", "semantic search", "NLP", "research", "AI", "literature review"],
        technologies: ["Python", "Transformers", "Elasticsearch", "Streamlit", "Scikit-learn"],
        githubUrl: "https://github.com/praneethvykuntam/paper_insight_engine"
    },
    {
        id: "sentiment-analysis",
        title: "Sentiment Analysis Framework",
        slug: "sentiment-analysis",
        blurb: "Advanced sentiment analysis framework using machine learning and deep learning techniques to analyze text data and extract meaningful insights with emotion detection capabilities.",
        ctaType: "learn",
        detailsPage: true,
        demoUrl: null,
        keywords: ["sentiment analysis", "NLP", "emotion detection", "text analysis", "machine learning", "deep learning"],
        technologies: ["Python", "NLTK", "SpaCy", "TensorFlow", "Flask"],
        githubUrl: "https://github.com/praneethvykuntam/Sentiment-Analysis"
    },
    {
        id: "data-visualization-dashboard",
        title: "Interactive Data Visualization Dashboard",
        slug: "data-visualization-dashboard",
        blurb: "A comprehensive dashboard for interactive data visualization and business intelligence. Features real-time analytics, customizable charts, and advanced filtering capabilities.",
        ctaType: "external",
        detailsPage: true,
        demoUrl: "https://example-demo.com",
        keywords: ["data visualization", "dashboard", "business intelligence", "analytics", "charts", "interactive"],
        technologies: ["Python", "Dash", "Plotly", "Pandas", "Bootstrap"],
        githubUrl: "https://github.com/praneethvykuntam"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
