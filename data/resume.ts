export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  avatar: string;
};

export type Contact = {
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  tags: string[];
};

export type Resume = {
  profile: Profile;
  contact: Contact;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};

// TODO: replace with the real domain once the site is deployed.
export const siteUrl = "https://rafaelcosta.dev";

export const resume: Resume = {
  profile: {
    name: "Rafael Costa",
    role: "Cloud AI/ML Engineer · Data Scientist & Applied AI Researcher · Technical Team Lead",
    summary:
      "Multi-cloud AI/ML engineer with production experience across GCP, Azure, and containerized AWS deployments — Google Cloud Certified (Associate Cloud Engineer). Builds and ships end-to-end GenAI systems: LLM/SLM fine-tuning with LoRA, agentic orchestration, RAG & GraphRAG, and high-throughput model serving with vLLM. Currently operating in a near–tech-lead capacity at SENAI CIMATEC, owning architecture, roadmap, and code review for an applied-AI team running self-hosted LLM infrastructure on institutional supercomputing. Author of published research spanning reinforcement learning and legal-domain NLP.",
    location: "Salvador, Bahia, Brazil",
    avatar: "/avatar.svg",
  },
  contact: {
    email: "rafaelcostaf_@hotmail.com",
    phone: "+55 71 99302-9592",
    github: "https://github.com/rafaelcostaf",
    linkedin: "https://www.linkedin.com/in/rafaelcostaf",
  },
  experiences: [
    {
      company: "SENAI CIMATEC",
      role: "Senior Data Scientist — AI & LLMs",
      period: "Jul 2025 — Present",
      description:
        "Operating in a near–tech-lead capacity for an applied-AI team, owning architecture and roadmap while building and running production LLM systems on self-hosted infrastructure.",
      highlights: [
        "Own system architecture decisions and technical roadmap, run code review, and coordinate the team's day-to-day technical work",
        "Design and run self-hosted LLM-serving infrastructure with vLLM on SENAI CIMATEC's institutional supercomputer, hosting LLaMA and Qwen family models for high-throughput internal inference",
        "Build agentic AI pipelines with LangGraph and custom orchestration to automate multi-step engineering workflows",
        "Implement GraphRAG over Neo4j to structure and retrieve engineering-process knowledge for LLM-assisted decision support",
        "Fine-tune Qwen and GPT-OSS models with LoRA adapters, specializing them for internal engineering use cases",
        "Ship multimodal GenAI features spanning text, image, and speech — STT/TTS pipelines built on Whisper, Coqui, and Qwen3-TTS",
      ],
    },
    {
      company: "Atos",
      role: "Senior Data Science Analyst",
      period: "Nov 2024 — Jul 2025",
      description:
        "Cloud-native AI/ML development on GCP and Azure, from architecture through production deployment, with technical leadership on AI initiatives.",
      highlights: [
        "Delivered four full production AI applications end-to-end (architecture through deployment) on GCP and Azure, reducing infrastructure cost and inference latency",
        "Used Vertex AI (GCP) and Azure OpenAI Service / Azure AI Foundry to fine-tune and serve foundation models in production, plus Document AI / Azure Document Intelligence for document-processing pipelines",
        "Built full-stack GenAI applications (frontend and backend) integrating LLM, NLP, and RAG pipelines backed by Pinecone and Qdrant vector search",
        "Designed a custom, prompt-engineering-based guardrail layer to constrain and safeguard LLM outputs in production",
        "Orchestrated AI services on GKE/AKS with CI/CD pipelines for continuous delivery across cloud environments",
        "Provided technical leadership on AI initiatives, architecting for cost, scalability, portability, and performance across multi-cloud environments",
      ],
    },
    {
      company: "SENAI CIMATEC",
      role: "Data Scientist — AI Research & Innovation (BIGDATA)",
      period: "Aug 2022 — Nov 2024",
      description:
        "NLP research and production systems for public-sector partners, including a published LLM system for Bahia's State Attorney General's Office (PGE-BA).",
      highlights: [
        "Built a 3-model NLP/LLM system for PGE-BA (Bahia State Attorney General's Office): topic clustering and case-subject classification over legal documents, plus a fine-tuned LLaMA 2 13B model — trained on ~201K PGE-BA legal documents and Bahia state legislation — that auto-generates legal drafts (minutas) for small-claims court proceedings; published at IX SAPCT, SENAI CIMATEC",
        "Designed and shipped supervised and unsupervised NLP models — clustering, word embeddings, n-grams, BERT / RoBERTa, BigBird — end-to-end, from architecture to deployment in desktop and web applications",
        "Built OCR preprocessing pipelines with automatic qualitative evaluation and correction of extracted text",
      ],
    },
    {
      company: "ACSO, UNEB",
      role: "Researcher / Volunteer",
      period: "Aug 2020 — Feb 2024",
      description:
        "Reinforcement learning research for RoboCup 3D humanoid soccer agents.",
      highlights: [
        "Co-created bahiart-gym, an OpenAI Gym toolkit for the RoboCup 3D soccer simulation league, published in Software Impacts",
        "Built a proxy to collect data from the match simulator and the training environment, focused on the kick-decision policy",
        "Extended the work to training multi-agent systems for cooperative behavior",
      ],
    },
    {
      company: "DevsFree",
      role: "Full-Stack Developer",
      period: "Jul 2022 — Sep 2022",
      description: "Full-stack development for web and mobile.",
      highlights: [
        "Built APIs with Node.js",
        "Built a React Native mobile application",
      ],
    },
    {
      company: "Uze",
      role: "Trainee",
      period: "May 2021 — Apr 2022",
      description: "Web scraping, bug tracking, and QA.",
      highlights: [
        "Developed web scraping software with Python and Selenium",
        "Participated in bug tracking, web development, and web application testing",
      ],
    },
    {
      company: "Multvet Veterinary Clinic",
      role: "Developer",
      period: "Jun 2020 — Jan 2021",
      description: "Process automation.",
      highlights: [
        "Automated receipt emission with Python and Selenium, reducing manual work for staff",
      ],
    },
  ],
  education: [
    {
      institution: "Universidade Federal da Bahia (UFBA)",
      degree: "MSc, Artificial Intelligence",
      period: "2024 — 2026 (in progress)",
    },
    {
      institution: "FIAP",
      degree: "MBA, Computer Software Engineering",
      period: "2025 — 2026 (in progress)",
    },
    {
      institution: "Universidade do Estado da Bahia (UNEB)",
      degree: "BSc, Management Information Systems",
      period: "2018 — 2024",
    },
    {
      institution: "UNOPAR",
      degree: "Postgraduate Degree, Systems Analysis, Project & Management",
      period: "2022 — 2023",
    },
    {
      institution: "UNOPAR",
      degree: "CST, Systems Analysis, Design & Management",
      period: "2021",
    },
  ],
  skills: [
    {
      category: "Cloud & Infrastructure",
      items: [
        "GCP (Vertex AI)",
        "Azure (OpenAI Service / AI Foundry, Document Intelligence)",
        "AWS (Docker deploy)",
        "Kubernetes (GKE / AKS)",
        "CI/CD",
      ],
    },
    {
      category: "LLM & GenAI Engineering",
      items: [
        "Fine-tuning (LoRA)",
        "Agentic AI (LangGraph)",
        "RAG & GraphRAG",
        "Prompt Engineering & Guardrails",
        "vLLM serving",
        "Multimodal (STT/TTS)",
      ],
    },
    {
      category: "Data & Retrieval",
      items: ["Neo4j", "Pinecone", "Qdrant", "pgvector", "SQL / NoSQL"],
    },
    {
      category: "Languages & Frameworks",
      items: [
        "Python",
        "LangChain",
        "FastAPI",
        "React",
        "Java / Spring Boot",
        "PostgreSQL",
      ],
    },
    {
      category: "Certifications",
      items: ["Google Cloud Associate Cloud Engineer (2025 — 2028)"],
    },
  ],
  projects: [
    {
      name: "BusEnv",
      description:
        "A multi-agent reinforcement learning environment and benchmark for urban public transportation, grounded in real data from Salvador's transit network (~700K riders, 2K vehicles, 400 lines, 3K stops). Nine baseline MARL algorithms evaluated with MARLlib. Published at AAMAS 2026.",
      url: "https://dl.acm.org/doi/abs/10.65109/CYHA2042",
      tags: ["Reinforcement Learning", "Multi-Agent Systems", "Python", "MARLlib"],
    },
    {
      name: "Language Model for Automatic Legal Draft Generation",
      description:
        "A LLaMA 2 13B model fine-tuned on ~201K PGE-BA legal documents and Bahia state legislation to auto-generate legal drafts (minutas) for small-claims court proceedings. Published at IX SAPCT, SENAI CIMATEC (2024).",
      tags: ["LLM", "Fine-tuning", "NLP", "Legal Tech"],
    },
    {
      name: "bahiart-gym",
      description:
        "An OpenAI Gym toolkit for the RoboCup 3D soccer simulation league, enabling reinforcement learning for humanoid agents. Published in Software Impacts.",
      url: "https://pypi.org/project/bahiart-gym/",
      tags: ["Reinforcement Learning", "Python", "C++", "Open Source"],
    },
  ],
};
