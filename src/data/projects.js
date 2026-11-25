export const projects = [
  {
    id: "fleet-digital-twin",
    slug: "fleet-digital-twin",
    title: "Fleet Digital Twin",
    subtitle: "AI-Powered Predictive Maintenance & Telemetry Digital Twin Platform",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    featured: true,
    status: "Active Implementation",
    description:
      "An intelligent industrial digital twin system processing IoT fleet telemetry data to predict equipment anomalies and component failures using deep learning time-series models and explainable AI.",
    technologies: [
      "Python",
      "FastAPI",
      "LSTM / Deep Learning",
      "SHAP",
      "TimescaleDB",
      "Redis",
      "Docker",
      "Grafana"
    ],
    overview:
      "Fleet Digital Twin creates virtual representations of physical vehicle and machinery fleets. By continuously ingesting time-series telemetry streams, the system monitors degradation trends and forecasts impending component failures before breakdowns occur.",
    businessProblem:
      "Unplanned machinery and fleet downtime generates massive maintenance costs and operational bottlenecks. Traditional scheduled maintenance either over-services functioning components or fails to catch sudden anomalies.",
    projectObjectives: [
      "Process high-frequency multi-sensor telemetry with low ingestion latency.",
      "Predict mechanical failure windows using multivariate LSTM time-series models.",
      "Provide transparent model interpretability using SHAP values so maintenance engineers trust actionable alerts.",
      "Enable visual monitoring through automated real-time telemetry dashboards."
    ],
    systemArchitecture: {
      description:
        "Modular telemetry ingestion pipeline feeding TimescaleDB for time-series persistence, asynchronous anomaly scoring through PyTorch/LSTM inference services, and explainability evaluation cached via Redis for real-time dashboard presentation.",
      components: [
        "Telemetry Ingestion Engine: FastAPI endpoints consuming sensor metrics (temperature, vibration, pressure, RPM).",
        "Time-Series Storage: TimescaleDB hypertable optimized for high-write volume and continuous downsampling.",
        "Inference & Prediction Pipeline: Sequence-to-sequence LSTM models detecting drift and failure probabilities.",
        "Explainability Layer: SHAP (SHapley Additive exPlanations) generating attribution scores for each contributing sensor parameter.",
        "Alerting & Visualization: Redis-backed notification broker driving dynamic metrics on Grafana dashboards."
      ]
    },
    implementationDetails: [
      "Designed sliding-window data normalization pipelines to process raw telemetry without temporal leakage.",
      "Implemented LSTM recurrent networks trained on historical degradation run-to-failure benchmarks.",
      "Integrated SHAP kernel explainers to expose the top contributing telemetry factors for every predicted anomaly.",
      "Configured TimescaleDB compression policies to maintain query performance over millions of records."
    ],
    responsibilities: [
      "Architected the backend telemetry ingestion service and time-series database schemas.",
      "Built and tuned the predictive LSTM inference pipeline for multi-sensor anomaly scoring.",
      "Developed explainable AI outputs converting raw tensors into human-readable engineering insights.",
      "Containerized services with Docker Compose for local development and staging environments."
    ],
    resultsAndOutcomes: [
      "Achieved sub-100ms inference turnaround for incoming telemetry chunks.",
      "Demonstrated reliable early warning indicators prior to simulated critical thresholds.",
      "Provided actionable sensor attribution charts eliminating black-box guesswork for maintenance technicians."
    ],
    links: {
      github: null, // Private / Proprietary
      demo: null
    }
  },
  {
    id: "opspulse",
    slug: "opspulse",
    title: "OpsPulse",
    subtitle: "Agentic AI Operations & Observability Automation Engine",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    featured: true,
    status: "Active Implementation",
    description:
      "An autonomous agentic operations system that continuously analyzes system logs, traces, and metrics to detect anomalies, diagnose root causes, and suggest or execute self-healing runbooks.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "RAG",
      "pgvector",
      "Prometheus",
      "Redis"
    ],
    overview:
      "OpsPulse combines observability metrics with agentic AI reasoning. When incidents or unusual telemetry spikes arise, multi-agent workflows correlate stack traces, query relevant internal incident knowledge bases via RAG, and generate precision triage recommendations.",
    businessProblem:
      "Modern cloud platforms generate overwhelming log and alert volume. SRE and on-call engineering teams suffer from alert fatigue and spend critical hours manually piecing together root cause analysis across distributed microservices.",
    projectObjectives: [
      "Aggregate alerts and metrics from distributed observability endpoints.",
      "Formulate automated incident hypotheses using multi-agent reasoning graphs.",
      "Retrieve historical incident resolutions and post-mortems via vector search (RAG).",
      "Generate concise, step-by-step mitigation plans for on-call engineers."
    ],
    systemArchitecture: {
      description:
        "Agentic multi-stage pipeline orchestrating incident detection, semantic context retrieval via pgvector, and multi-agent consensus for remediation runbooks.",
      components: [
        "Telemetry Receiver: Webhook and polling adapters connecting to Prometheus and application log streams.",
        "Contextual RAG Knowledge Base: Vector index of previous post-mortems, runbooks, and architectural docs using pgvector.",
        "Agent Orchestrator: LangGraph-directed graph coordinating an Alert Triage Agent, Root Cause Investigator, and Runbook Generator.",
        "Action Validator: Guardrail layer verifying proposed remediation steps against policy constraints before human dispatch."
      ]
    },
    implementationDetails: [
      "Constructed LangGraph stateful execution flows that iteratively narrow down culprit services through diagnostic queries.",
      "Built semantic embedding pipelines using OpenAI/HuggingFace embeddings stored in PostgreSQL with pgvector.",
      "Designed prompt guardrails to ensure deterministic recommendations and prevent LLM hallucinations during high-severity incidents.",
      "Implemented Redis pub/sub for real-time event streaming and operator notification delivery."
    ],
    responsibilities: [
      "Engineered the LangGraph agent coordination workflow and tool definitions.",
      "Built the vector retrieval layer over historical system runbooks with hybrid keyword-semantic search.",
      "Developed FastAPI webhook endpoints and event consumers for real-time incident triggers.",
      "Established validation benchmarks to evaluate diagnosis consistency across simulated outages."
    ],
    resultsAndOutcomes: [
      "Automated initial root-cause analysis synthesis, cutting incident exploration time significantly in staging evaluations.",
      "Delivered reliable semantic search retrieval over internal technical runbooks.",
      "Formulated a clean, auditable log of agent reasoning steps for post-incident review."
    ],
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "synaptiq",
    slug: "synaptiq",
    title: "SynaptIQ",
    subtitle: "AI-Augmented Cognitive Workspace & Multi-Agent Collaboration Engine",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    featured: true,
    status: "Execution Ready / Milestone Delivered",
    description:
      "A next-generation cognitive workspace featuring multi-tenant Supabase RLS, FastAPI backend, Next.js 15 frontend, and an authenticated Streamable HTTP Model Context Protocol (MCP) tool-execution loop.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js 15",
      "Supabase RLS",
      "pgvector",
      "MCP Protocol",
      "PyJWT",
      "Docker"
    ],
    overview:
      "SynaptIQ is an AI-augmented workspace designed to orchestrate specialized AI tools and agent workflows within a strictly isolated, multi-tenant environment. It integrates Model Context Protocol (MCP) clients with Groq and LLM gateways for low-latency reasoning.",
    businessProblem:
      "Enterprise teams attempting to adopt AI agents face significant data leakage risks, insecure tool-execution environments, and brittle API integrations when connecting LLMs to their internal databases and operational tools.",
    projectObjectives: [
      "Enforce strict multi-tenant data isolation using Supabase Row Level Security (RLS) and cryptographic JWKS token verification.",
      "Implement a streamable Model Context Protocol (MCP) client to securely bind external tool calls to LLM agents.",
      "Provide sub-second semantic retrieval using pgvector HNSW indexing.",
      "Deliver a modern, accessible interface with real-time agent status indicators."
    ],
    systemArchitecture: {
      description:
        "Simplified monorepo architecture uniting Next.js 15 on the edge, a high-performance FastAPI Python service, Supabase PostgreSQL with RLS and pgvector, and authenticated MCP streaming tool integrations.",
      components: [
        "Frontend: Next.js 15 (App Router, Tailwind CSS, accessible components, Edge middleware for session refresh).",
        "Backend Gateway: FastAPI with PyJWT cryptographic verification against Supabase JWKS with TTL caching.",
        "Agent & Tool Execution: Groq LLM gateway connected with an authenticated Streamable HTTP MCP client.",
        "Database Layer: PostgreSQL with HNSW vector index, tenant isolation tables, and strict RLS policies."
      ]
    },
    implementationDetails: [
      "Implemented authenticated streamable MCP host architecture allowing agents to inspect tool schemas and execute functions dynamically.",
      "Configured PyJWT validation against Supabase JWKS endpoints with local TTL caching to minimize authentication latency.",
      "Authored PostgreSQL schema with HNSW index on embeddings and RLS policies ensuring complete tenant isolation.",
      "Wrote comprehensive asynchronous test suites (pytest-asyncio) covering CORS, RLS isolation contracts, and API security."
    ],
    responsibilities: [
      "Designed the backend architecture, MCP tool orchestration loop, and Supabase RLS policies.",
      "Built cryptographic JWKS token verifiers with PyJWT and resilient caching mechanisms.",
      "Configured pgvector schemas and similarity search queries for document embeddings.",
      "Authored end-to-end integration tests validating multi-tenant isolation and tool calling safety."
    ],
    resultsAndOutcomes: [
      "Delivered Milestone 1 foundation with 100% pass rate across automated tenant isolation tests.",
      "Achieved sub-50ms token verification overhead via cached JWKS verification.",
      "Established a secure, extensible MCP tool platform for autonomous agent execution."
    ],
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "xcetra",
    slug: "xcetra",
    title: "XCETRA",
    subtitle: "Enterprise Workflow & Data Integration Platform",
    category: "software-engineering",
    categoryLabel: "Software Engineering",
    featured: false,
    status: "Active Implementation",
    description:
      "A high-throughput enterprise backend service providing unified data integration, modular API management, and automated background synchronization.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker"
    ],
    overview:
      "XCETRA is a specialized enterprise platform engineered to coordinate distributed service communication, background data reconciliation, and structured API contracts for complex organizational workflows.",
    businessProblem:
      "Enterprise systems often suffer from fragmented communication between disparate internal microservices, resulting in race conditions, sync failures, and difficult auditing during mission-critical transactions.",
    projectObjectives: [
      "Deliver reliable, standardized API interfaces with comprehensive OpenAPI documentation.",
      "Manage asynchronous distributed task pipelines with automated retry logic and dead-letter queueing.",
      "Maintain high concurrency while protecting database integrity."
    ],
    systemArchitecture: {
      description:
        "FastAPI modular service backed by PostgreSQL relational persistence, Redis caching and broker layers, and Celery asynchronous execution workers.",
      components: [
        "API Service: FastAPI application with granular dependency injection and schema validation.",
        "Message Broker & Cache: Redis supporting session caching and Celery message distribution.",
        "Worker Pool: Distributed Celery workers executing batch processing and reconciliation routines.",
        "Data Tier: PostgreSQL configured with connection pooling and transactional safeguards."
      ]
    },
    implementationDetails: [
      "Engineered modular REST API endpoints following domain-driven design patterns.",
      "Configured database connection pooling and asynchronous query execution to eliminate I/O blocking.",
      "Implemented structured logging and correlation IDs for distributed tracing across services."
    ],
    responsibilities: [
      "Designed database schemas and FastAPI routing hierarchy.",
      "Developed background queue mechanisms and exception handlers.",
      "Created operational scripts for automated local startup, teardown, and API documentation verification."
    ],
    resultsAndOutcomes: [
      "Standardized API communication contracts with self-documenting Swagger/OpenAPI endpoints.",
      "Built resilient background synchronization capable of handling high-concurrency payloads."
    ],
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "devask",
    slug: "devask",
    title: "DevAsk",
    subtitle: "Developer Q&A & Reputation Engineering Platform",
    category: "software-engineering",
    categoryLabel: "Software Engineering",
    featured: false,
    status: "Completed",
    description:
      "A scalable developer Q&A platform replicating Stack Overflow core mechanics including question/answer workflows, a 50+ badge reputation engine, moderation systems, and real-time event updates.",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Bootstrap",
      "jQuery"
    ],
    overview:
      "DevAsk is a full-featured community Q&A platform engineered from first principles. It includes rich markdown editing, voting logic, reputation calculation, community moderation tooling, and a time-expiring bounty system.",
    businessProblem:
      "Community knowledge bases require complex business logic: voting integrity, permission tiers based on trust scores, spam prevention, and scalable indexing to remain usable under heavy traffic.",
    projectObjectives: [
      "Build a robust reputation scoring engine with automated badge and privilege awarding.",
      "Implement real-time notifications for upvotes, comments, and answers using Redis.",
      "Create time-sensitive bounty mechanisms with automated reward allocation upon expiration."
    ],
    systemArchitecture: {
      description:
        "Monolithic Django architecture with asynchronous event offloading via Django Signals and Celery tasks, backed by PostgreSQL and Redis.",
      components: [
        "Core App: Handles question lifecycle, hierarchical answer threads, and Markdown rendering.",
        "Reputation Engine: Calculates trust metrics, grants 50+ badges, and unlocks moderation privileges.",
        "Bounty Subsystem: Manages temporary reward pools with Celery beat periodic expiration checks.",
        "Notification Broker: Redis channel delivering activity alerts to active user sessions."
      ]
    },
    implementationDetails: [
      "Designed relational schemas in PostgreSQL with indexes on foreign keys, vote counts, and creation timestamps.",
      "Implemented Django signals to decouple user activities (answering, upvoting) from badge evaluation logic.",
      "Engineered automated post-history versioning to audit edits and flag suspicious activity for moderators."
    ],
    responsibilities: [
      "Full-stack architecture and implementation of all models, views, and signal workflows.",
      "Designed the 50+ badge gamification rules and privilege escalation hierarchy.",
      "Implemented Celery workers for scheduled bounty closure and summary email digests."
    ],
    resultsAndOutcomes: [
      "Successfully handles question/answer posting, Markdown parsing, and live search across tags.",
      "Reputation engine runs deterministically without race conditions during concurrent voting."
    ],
    links: {
      github: "https://github.com/sidhu-26/DevAsk",
      demo: null
    }
  },
  {
    id: "syncspace",
    slug: "syncspace",
    title: "SyncSpace",
    subtitle: "Real-Time Collaboration & Communication Platform",
    category: "software-engineering",
    categoryLabel: "Software Engineering",
    featured: false,
    status: "Completed",
    description:
      "A real-time messaging and video collaboration platform supporting one-to-one chats, public community rooms, dynamic social graphs, and group video calling via Agora SDK.",
    technologies: [
      "Python",
      "Django",
      "Django Channels",
      "WebSockets",
      "Redis",
      "Agora SDK",
      "Bootstrap"
    ],
    overview:
      "SyncSpace provides real-time communication capabilities by pairing Django with WebSockets (Django Channels) and Redis as the distributed channel layer, alongside Agora RTC SDK for low-latency group video conferencing.",
    businessProblem:
      "Traditional HTTP polling creates immense server overhead and lag for collaborative messaging. Building real-time presence, social connections, and video rooms requires event-driven WebSocket orchestration.",
    projectObjectives: [
      "Deliver sub-50ms chat message delivery via persistent WebSocket connections.",
      "Integrate Agora Web RTC SDK for multi-participant video conference rooms.",
      "Build a social graph supporting friend requests, accepted connections, and live presence indicators."
    ],
    systemArchitecture: {
      description:
        "Asynchronous ASGI architecture using Daphne, Django Channels consumers, Redis channel layers for pub/sub broadcasting, and Agora SDK for media routing.",
      components: [
        "WebSocket Consumers: Handle connection lifecycle, room joins, typing events, and message broadcasting.",
        "Channel Layer: Redis managing pub/sub distribution across multiple worker threads.",
        "Media Layer: Agora RTC engine facilitating peer-to-peer and group audio/video streams.",
        "Social Subsystem: Manages friend requests, user blocks, and activity feeds."
      ]
    },
    implementationDetails: [
      "Built custom Django Channels WebSocket consumers handling room multiplexing and authentication.",
      "Integrated Agora token generation on the backend to secure live video channel admission.",
      "Constructed modular Django applications isolating chat, social relationships, and video room logic."
    ],
    responsibilities: [
      "Architected the ASGI server setup with Django Channels and Redis channel layer.",
      "Implemented the real-time messaging protocol, typing indicators, and read receipts.",
      "Integrated Agora RTC client and secure token generation endpoints."
    ],
    resultsAndOutcomes: [
      "Achieved instant, bi-directional message synchronization across active browser tabs.",
      "Delivered reliable multi-user video calling with seamless room creation and join flows."
    ],
    links: {
      github: "https://github.com/sidhu-26/SyncSpace",
      demo: null
    }
  }
];

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug || p.id === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter((p) => p.featured);
};

export const getProjectsByCategory = (category) => {
  if (!category || category === "all") return projects;
  return projects.filter((p) => p.category === category);
};
