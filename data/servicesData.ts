
export interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  iconName: string; // Used to map to Lucide icons
}

export const services: ServiceData[] = [
  {
    id: "strategic-management",
    title: "Strategic Management",
    iconName: "Briefcase",
    description: "High-level board advisory and long-term organizational planning to secure your market position.",
    longDescription: "Our Strategic Management service provides C-suite executives and board members with the clarity needed to navigate complex market shifts. We focus on long-term value creation through rigorous analysis of internal capabilities and external opportunities. Our consultants work as trusted partners to define vision, mission, and actionable strategic roadmaps.",
    features: [
      "Board-Level Advisory",
      "Competitive Landscape Mapping",
      "Corporate Vision & Mission Alignment",
      "Resource Allocation Strategy",
      "Change Management Frameworks"
    ],
    benefits: [
      "Enhanced long-term decision making",
      "Clear organizational alignment",
      "Improved resilience to market volatility",
      "Optimized operational structures"
    ]
  },
  {
    id: "growth-optimization",
    title: "Growth Optimization",
    iconName: "TrendingUp",
    description: "Identifying friction in your sales funnel and implementing scale-ready revenue strategies.",
    longDescription: "We help businesses unlock hidden revenue potential by optimizing every stage of the customer journey. Our growth optimization framework combines data analytics with behavioral psychology to identify bottlenecks and implement scalable solutions that drive sustainable top-line growth.",
    features: [
      "Revenue Stream Analysis",
      "Customer Acquisition Cost (CAC) Reduction",
      "Sales Funnel Friction Audits",
      "Pricing Strategy Optimization",
      "Expansion Planning"
    ],
    benefits: [
      "Increased Lifetime Value (LTV)",
      "Sustainable revenue growth",
      "Better marketing ROI",
      "Scalable sales processes"
    ]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    iconName: "Cpu",
    description: "Modernizing legacy infrastructure and integrating AI/ML to drive operational efficiency.",
    longDescription: "Digital transformation is no longer optional. We guide organizations through the complexities of modernizing their technology stack, ensuring that every digital investment translates into a measurable business outcome. From cloud migration to custom AI integration, we build the future of your business.",
    features: [
      "Legacy System Modernization",
      "Cloud Infrastructure Strategy",
      "AI & Machine Learning Integration",
      "Digital Customer Experience Design",
      "Data Governance & Strategy"
    ],
    benefits: [
      "Significant operational efficiency gains",
      "Future-proof technology foundations",
      "Enhanced data-driven insights",
      "Reduced technical debt"
    ]
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    iconName: "Landmark",
    description: "Mergers & acquisitions support, capital raising strategies, and robust risk management.",
    longDescription: "Our financial experts provide the technical depth and strategic foresight required for complex financial maneuvers. Whether you are preparing for an IPO, navigating an acquisition, or optimizing your capital structure, Hide Consultant provides the analytical rigor to ensure success.",
    features: [
      "M&A Due Diligence",
      "Capital Structure Optimization",
      "IPO Readiness Support",
      "Treasury & Cash Flow Management",
      "Financial Risk Assessment"
    ],
    benefits: [
      "Minimized transaction risks",
      "Optimized cost of capital",
      "Greater investor confidence",
      "Improved financial transparency"
    ]
  },
  {
    id: "cybersecurity-risk",
    title: "Cybersecurity & Risk",
    iconName: "ShieldCheck",
    description: "Protecting your digital assets and ensuring compliance with global data standards.",
    longDescription: "In an era of increasing digital threats, our Cybersecurity & Risk division ensures your business remains resilient. We take a proactive, business-first approach to security, ensuring that protection never comes at the cost of operational agility or innovation.",
    features: [
      "Enterprise Security Audits",
      "Compliance Framework Implementation (GDPR/HIPAA)",
      "Threat Intelligence & Monitoring",
      "Crisis Management & Recovery",
      "Employee Security Training"
    ],
    benefits: [
      "Protection of critical IP and data",
      "Full regulatory compliance",
      "Enhanced customer trust",
      "Minimal downtime during incidents"
    ]
  },
  {
    id: "product-innovation",
    title: "Product Innovation",
    iconName: "Zap",
    description: "R&D consulting to help you launch market-disrupting products with speed and precision.",
    longDescription: "We bridge the gap between creative ideation and commercial viability. Our product innovation consultants help you build a culture of constant experimentation, bringing high-potential ideas to market faster while maintaining a focus on user needs and market demand.",
    features: [
      "Product Strategy & Roadmap",
      "User Experience (UX) Research",
      "Rapid Prototyping Frameworks",
      "Go-to-Market Strategy",
      "Innovation Lab Setup"
    ],
    benefits: [
      "Faster time-to-market",
      "Higher product-market fit",
      "Improved R&D efficiency",
      "Market differentiation"
    ]
  },
  {
    id: "international-expansion",
    title: "International Expansion",
    iconName: "Globe",
    description: "Localized market entry strategies for EMEA, APAC, and LATAM regions.",
    longDescription: "Scaling across borders presents unique cultural, regulatory, and operational challenges. We provide the boots-on-the-ground intelligence and high-level strategy needed to successfully enter and dominate international markets without overextending resources.",
    features: [
      "Market Opportunity Assessment",
      "Localized Regulatory Compliance",
      "Global Supply Chain Logistics",
      "International Brand Positioning",
      "Local Partnership Development"
    ],
    benefits: [
      "Reduced entry risk",
      "Localized operational excellence",
      "Faster global footprint growth",
      "Cultural brand resonance"
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    iconName: "BarChart",
    description: "Transforming raw data into executive-level dashboards for real-time decision making.",
    longDescription: "Unlock the value hidden in your organization's data. Our analytics service moves beyond simple reporting to provide predictive insights and prescriptive recommendations that allow you to act ahead of market trends.",
    features: [
      "Business Intelligence Dashboards",
      "Predictive Analytics Models",
      "Data Warehouse Implementation",
      "KPI & Metric Definition",
      "Customer Segmentation Analysis"
    ],
    benefits: [
      "Real-time visibility into performance",
      "Evidence-based strategy",
      "Identification of new opportunities",
      "Increased forecasting accuracy"
    ]
  }
];
