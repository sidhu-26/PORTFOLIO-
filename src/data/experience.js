export const calculateDuration = (startDateStr, endDateStr = null) => {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) {
    parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  }
  if (months > 0) {
    parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  }

  return parts.length > 0 ? parts.join(" ") : "1 mo";
};

export const experiences = [
  {
    id: "coding-crisp",
    company: "Coding Crisp",
    role: "AI Engineer",
    employmentType: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    startDate: "2024-08-01",
    startDateFormatted: "August 2024",
    endDate: null,
    endDateFormatted: "Present",
    current: true,
    summary:
      "Engineering artificial intelligence workflows, Generative AI applications, agentic systems, and high-throughput Python backend services.",
    responsibilities: [
      "Architect and implement Generative AI and Machine Learning features, RAG pipelines, and agentic LLM workflows for production services.",
      "Design high-throughput, low-latency asynchronous APIs and background task architectures using Python (FastAPI, Django REST Framework, Celery, Redis).",
      "Build vector database indexing and semantic retrieval pipelines using pgvector and embeddings to improve RAG accuracy.",
      "Optimize data engineering workflows, database schemas (PostgreSQL, TimescaleDB), and API response latency.",
      "Configure cloud deployment infrastructure, CI/CD automation, and MLOps monitoring across AWS environments.",
      "Collaborate across engineering squads on architecture reviews, prompt engineering strategies, and production reliability."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Django REST Framework",
      "Generative AI",
      "RAG",
      "LangChain / LangGraph",
      "pgvector",
      "PostgreSQL",
      "Redis",
      "Celery",
      "AWS",
      "Docker"
    ],
    highlightProjects: ["Fleet Digital Twin", "OpsPulse", "SynaptIQ"]
  }
];
