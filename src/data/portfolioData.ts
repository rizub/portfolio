export interface CaseStudy {
  id: string;
  title: string;
  category: 'AI & OCR' | 'Enterprise ERP & MES' | 'Cloud & K8s' | 'Middleware & DevEx' | 'Full-Stack';
  badge: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  impact: string[];
  techStack: string[];
  metrics: { label: string; value: string };
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export const portfolioData = {
  profile: {
    name: "Rizqi Ubaidillah",
    nickname: "Ubai",
    title: "Lead Platform & Systems Integration Engineer",
    subtitles: [
      "Multi-Node K3s Kubernetes Cluster Orchestrator",
      "Autonomous Multi-Agent AI & MCP Architect",
      "Enterprise Systems Integrator (NetSuite | Odoo | Lark)",
      "Intelligent Document Intelligence & PO Workflow Specialist",
      "Zero-Quota-Leak In-Cluster CI/CD Engineer"
    ],
    bio: "Systems architect and platform engineer specializing in cloud-native infrastructure, multi-agent AI automation, and mission-critical enterprise integrations. Orchestrating distributed Kubernetes clusters, high-precision document OCR pipelines, and Tier-1 ERP data bridges across 50+ production microservices.",
    location: "Jakarta, Indonesia",
    organization: "Prasetia Dwidharma",
    status: "Open to High-Impact Platform & AI Systems Initiatives",
    email: "emailnya.ubai@gmail.com",
    linkedin: "https://linkedin.com/in/rizubai",
    github: "https://github.com/rizub",
    portfolioUrl: "https://ubai.kreatekode.tech"
  },

  stats: [
    { label: "Enterprise Workloads", value: "50+", subtext: "Microservices & systems orchestrated" },
    { label: "Distributed K3s Nodes", value: "3 Nodes", subtext: "Joined via Tailscale Mesh VPN" },
    { label: "PO & Invoice OCR", value: ">85%", subtext: "Manual entry reduction time" },
    { label: "CI/CD Hosted Quota Leak", value: "0 mins", subtext: "100% In-Cluster Runner Fleet" },
  ],

  architectureLayers: [
    {
      layer: "01. Edge & Global Ingress",
      title: "Cloudflare Proxied Edge + Workers",
      description: "Anycast edge caching, DDoS mitigation, dynamic DNS, and custom Cloudflare Workers running OIDC adapters for Feishu/Lark OAuth 2.0.",
      tags: ["Cloudflare Edge", "Cloudflare Workers", "OIDC", "SSL/TLS Strict"]
    },
    {
      layer: "02. Secure Transport Mesh",
      title: "Tailscale Overlay VPN Mesh",
      description: "Encrypted WireGuard peer-to-peer mesh network (100.x.x.x) connecting distributed cloud VPS nodes across different data centers without open public ports.",
      tags: ["Tailscale", "WireGuard", "Zero Trust", "Private Mesh"]
    },
    {
      layer: "03. Compute & Orchestration Plane",
      title: "Multi-Node K3s Kubernetes Cluster",
      description: "Lightweight, production-grade K3s (v1.36) with dedicated control-plane (vn-core-prod-02) and dynamic worker node scheduling. Ingress routed via Nginx load balancer to NodePort services.",
      tags: ["K3s v1.36", "Dynamic Scheduling", "NodePort", "Nginx LB"]
    },
    {
      layer: "04. Autonomous In-Cluster CI/CD",
      title: "Self-Hosted Runner Fleet & Private Registry",
      description: "Org-scoped GitHub Actions runners hosted inside namespace build-system. Builds Docker images and deploys on in-cluster container registry (10.43.110.114:5000), eliminating hosted runner limits.",
      tags: ["In-Cluster Runners", "Private Registry", "Reusable Workflows", "Zero Quota Waste"]
    },
    {
      layer: "05. Multi-Agent AI & Platform DevEx",
      title: "pm-orchestrator + MCP Ecosystem + Orca IDE",
      description: "Persistent AI project management daemon coordinating Claude, Codex, and Antigravity inside background tmux sessions with custom Model Context Protocol (MCP) servers and instant session resurrect.",
      tags: ["pm-orchestrator", "Model Context Protocol", "tmux Native", "Persistent DevEx"]
    },
    {
      layer: "06. Enterprise Integration Layer",
      title: "Core Middleware & Tier-1 ERP Gateways",
      description: "Mission-critical transactional bridges connecting Oracle NetSuite ERP, Odoo MES, Lark Base tables, Mekari Sign digital legal signing, and WhatsApp Business API.",
      tags: ["NetSuite ERP", "Odoo MES", "Lark Base", "Mekari Sign", "VictoriaLogs"]
    }
  ],

  caseStudies: [
    {
      id: "po-extraction-pipeline",
      title: "Intelligent Procurement & Purchase Order (PO) Parsing Pipeline",
      category: "AI & OCR",
      badge: "Document AI",
      summary: "End-to-end automated document intelligence pipeline transforming unstructured supplier quotes and multi-format POs into validated JSON tables with direct sync to Lark Base & ERPs.",
      problem: "Procurement teams were manually transcribing multi-page supplier quotes, heterogeneous PDF purchase orders, and scanned invoices, taking 30-45 minutes per order and introducing pricing discrepancies.",
      solution: "Engineered an automated document intelligence pipeline combining high-precision computer vision, OCR preprocessing, and multimodal LLMs. Automatically extracts line-item matrices, tax structures, and supplier SKU mappings with validation rules.",
      architecture: [
        "Inbound PDF/Scan uploaded to webhook or MinIO bucket",
        "Document OCR normalization & computer vision grid alignment",
        "Multimodal LLM structured extraction with JSON schema validation",
        "Automated reconciliation against vendor price catalog",
        "Real-time streaming dispatch to Lark Base table & ERP webhook"
      ],
      impact: [
        "Reduced manual PO entry time by over 85% (from 40 mins to <15 seconds)",
        "Zero transcription error rate on line items and subtotal math",
        "Full audit trail with original document deep-linked in workspace"
      ],
      techStack: ["Python", "FastAPI", "Vision LLM", "MinIO S3", "Lark Base OpenAPI", "Docker"],
      metrics: { label: "Processing Speed", value: "<15s / PO" }
    },
    {
      id: "seafood-mes-odoo",
      title: "Manufacturing Execution System (MES) & Shopfloor Tracking",
      category: "Enterprise ERP & MES",
      badge: "Industrial IoT",
      summary: "Custom shopfloor MES for commercial seafood processing, bridging physical packing lines, lot traceability, and warehouse stock movements with on-premise Odoo ERP.",
      problem: "Cold-chain food processing required strict lot tracking, weight-yield monitoring, and immediate inventory adjustments that standard ERP forms were too cumbersome to capture in the wet packing room.",
      solution: "Architected a dedicated shopfloor touch terminal MES capturing barcode scan weights, production batch yields, and operator shifts, streaming validated production orders straight into Odoo ERP backend.",
      architecture: [
        "Rugged shopfloor terminals with fast barcode & digital scale input",
        "Real-time local queue buffer with offline tolerance",
        "Odoo XML-RPC / REST bridge syncing Work Orders & Stock Moves",
        "Batch yield analytics & temperature compliance checkpoints"
      ],
      impact: [
        "100% end-to-end batch traceability from raw catch to export crate",
        "Real-time visibility into production line yield and scrap percentage",
        "Zero delay in ERP finished-goods inventory availability"
      ],
      techStack: ["Next.js", "Node.js", "Odoo ERP API", "PostgreSQL", "Tailwind CSS", "Docker"],
      metrics: { label: "Batch Traceability", value: "100% Real-time" }
    },
    {
      id: "smart-bms-platform",
      title: "Commercial High-Rise Smart Building Management System (BMS)",
      category: "Full-Stack",
      badge: "Smart Facilities",
      summary: "Enterprise 8-module commercial high-rise building management platform built on Next.js 16 + PostgreSQL 18 managing tenant leasing, utilities, and facility assets.",
      problem: "Legacy building management relied on disconnected spreadsheets, paper visitor logs, and manual water/power meter reading rounds across 30+ floors.",
      solution: "Designed and built an all-in-one 8-module BMS orchestrating tenant tenancy lifecycles, tiered utility billing calculation, preventive maintenance work orders, IoT sensor anomaly alarms, visitor gate clearance, and facility asset depreciation.",
      architecture: [
        "Next.js 16 App Router frontend with role-based access control (RBAC)",
        "PostgreSQL 18 database with optimized relational schema for multi-tenant billing",
        "Automated utility calculation engine (kVA tiers, water cubic rates, VAT)",
        "Visitor pass QR generation with real-time turnstile validation"
      ],
      impact: [
        "Consolidated 5 legacy manual processes into one unified web portal",
        "Eliminated billing calculation disputes with transparent tenant breakdown",
        "Automated maintenance dispatching reducing ticket SLA from 48h to 4h"
      ],
      techStack: ["Next.js 16", "PostgreSQL 18", "Tailwind CSS", "shadcn/ui", "Docker", "K3s"],
      metrics: { label: "Operational Modules", value: "8 Modules" }
    },
    {
      id: "gymstock-wms-ams",
      title: "High-Precision Warehouse & Asset Management System (WMS/AMS)",
      category: "Enterprise ERP & MES",
      badge: "Supply Chain",
      summary: "Integrated WMS and Asset Management System for a tier-1 distributor of premium commercial fitness equipment (Technogym Indonesia partner).",
      problem: "High-value commercial fitness units required complex pre-delivery inspection (PDI), serialized component tracking, multi-warehouse transfers, and post-installation warranty dispatch.",
      solution: "Developed an enterprise WMS/AMS platform featuring barcode scanning, digital PDI checklists, serialized parts inventory, and field engineer warranty service dispatch.",
      architecture: [
        "Modern responsive web application with barcode scanner compatibility",
        "Serialized asset hierarchy (unit -> motor -> console -> wear parts)",
        "Automated warehouse transfer slips and stock reservation logic",
        "Integrated technician dispatch and customer handover sign-off"
      ],
      impact: [
        "Full lifecycle visibility on high-value commercial fitness hardware",
        "99.8% inventory accuracy across central warehouse and regional showrooms",
        "Streamlined customer delivery sign-off and warranty activation"
      ],
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "K3s"],
      metrics: { label: "Inventory Accuracy", value: "99.8%" }
    },
    {
      id: "kwix-receipt-intelligence",
      title: "Automated Financial Auditing & Receipt Intelligence Engine (Kwix)",
      category: "AI & OCR",
      badge: "FinTech AI",
      summary: "Computer vision and multimodal LLM service capable of parsing real-world crumpled thermal receipts and invoices into normalized accounting line items.",
      problem: "Employees and field agents submitted photos of crumpled thermal receipts with faded ink, skewed angles, and handwritten notes, causing massive finance backlogs.",
      solution: "Built an intelligent OCR engine leveraging vision LLMs with image contrast preprocessing, perspective correction, line item decomposition, and merchant tax ID extraction.",
      architecture: [
        "Image preprocessing (dewarping, contrast enhancement, noise reduction)",
        "Multimodal vision model prompt extraction with structured output constraints",
        "Currency normalization, VAT validation, and duplicate invoice hash detection",
        "Direct export to corporate expense reporting systems"
      ],
      impact: [
        "Processed thousands of field expenses with sub-second extraction",
        "Automated duplicate expense claim detection saving corporate leakage",
        "Standardized accounting records ready for tax compliance"
      ],
      techStack: ["Python", "OpenCV", "Vision LLM", "FastAPI", "Redis", "Docker"],
      metrics: { label: "Duplicate Detection", value: "Automated" }
    },
    {
      id: "netsuite-financial-middleware",
      title: "Mission-Critical Oracle NetSuite ERP Financial Middleware",
      category: "Middleware & DevEx",
      badge: "Enterprise ERP",
      summary: "Enterprise integration gateway bridging transactional banking feeds, billing events, and e-commerce systems with Oracle NetSuite ERP.",
      problem: "Multiple disparate revenue streams (e-commerce, payment gateways, retail POS) required automated reconciliation and posting into NetSuite General Ledger (GL) without double-entry risk.",
      solution: "Engineered high-reliability financial middleware with transactional idempotency, automated retry backoff, dead-letter queue (DLQ) alerts, and comprehensive audit logs.",
      architecture: [
        "Inbound webhook ingestion queue with HMAC signature validation",
        "Idempotency token cache in Redis to prevent duplicate ledger postings",
        "NetSuite SuiteTalk REST/SOAP API adapter with automated session refresh",
        "Transactional rollback & Dead Letter Queue (DLQ) for failed payloads"
      ],
      impact: [
        "Zero financial data loss or duplicate GL entries across thousands of transactions",
        "Real-time financial reconciliation replacing end-of-month manual batches",
        "Full compliance with corporate accounting auditing standards"
      ],
      techStack: ["TypeScript", "Node.js", "NetSuite SuiteTalk API", "Redis", "PostgreSQL"],
      metrics: { label: "Financial Data Loss", value: "0% Error Rate" }
    },
    {
      id: "digital-signature-automation",
      title: "Digital Signature & Certified E-Meterai Automation (VirtueSign)",
      category: "Middleware & DevEx",
      badge: "LegalTech",
      summary: "Middleware integrating collaborative workspace databases (Lark Base) with official digital signature providers (Mekari Sign / PERURI e-meterai).",
      problem: "Executing legal agreements, vendor contracts, and employment letters required manual PDF export, uploading to signing portals, purchasing e-meterai stamps, and tracking signers manually.",
      solution: "Developed an autonomous signing bridge connecting Lark Base approval workflows with Mekari Sign API. Generates contracts dynamically, applies certified PERURI e-meterai, and routes to signers with status webhooks.",
      architecture: [
        "Triggered automatically upon contract record approval in Lark Base",
        "Dynamic PDF generation with placeholder coordinate mapping",
        "Mekari Sign API integration with PERURI digital stamp stamping",
        "Bi-directional webhook synchronization updating contract status in Lark Base"
      ],
      impact: [
        "Turned a 3-day manual contract signing process into a 15-minute automated flow",
        "Government-certified legal validity with embedded verification QR code",
        "Zero manual tracking overhead for HR and Legal teams"
      ],
      techStack: ["Node.js", "TypeScript", "Mekari Sign API", "Lark Base OpenAPI", "Gotenberg"],
      metrics: { label: "Turnaround Time", value: "3 Days → 15 Mins" }
    },
    {
      id: "multi-node-k3s-cluster",
      title: "Distributed Multi-Node K3s Cluster & Zero-Quota-Leak CI/CD",
      category: "Cloud & K8s",
      badge: "Kubernetes & Cloud",
      summary: "3-node distributed Kubernetes (K3s) cluster over Tailscale Mesh VPN with in-cluster GitHub Actions runner fleet and VictoriaLogs observability.",
      problem: "Third-party hosted GitHub runners reached 2,000 min/mo org limits causing build halts, while disparate single-VPS docker containers exhausted host resources with no auto-recovery.",
      solution: "Orchestrated a 3-node distributed K3s cluster joined via Tailscale Mesh VPN. Built self-hosted GitHub Actions runners in the build-system namespace using an in-cluster private container registry.",
      architecture: [
        "Control plane (vn-core-prod-02) + 2 compute workers (pd-proc-prod-01, vn-core-prod-01)",
        "Encrypted Tailscale overlay network (100.x.x.x) bypassing public port exposure",
        "In-cluster GitHub Actions runner fleet with private registry (10.43.110.114:5000)",
        "Ultra-lightweight VictoriaLogs + Vector log shipping (<100MB RAM)",
        "Automated PR promotion gate and single-command rollout validation"
      ],
      impact: [
        "Zero hosted runner quota reliance (saved hundreds of dollars monthly in CI/CD)",
        "4x faster Docker builds using cached internal layers and local registry",
        "High availability and automated pod rescheduling upon node maintenance"
      ],
      techStack: ["Kubernetes (K3s)", "Tailscale", "GitHub Actions", "Docker", "VictoriaLogs", "Nginx"],
      metrics: { label: "Hosted Runner Usage", value: "0 min / month" }
    },
    {
      id: "pm-orchestrator-agents",
      title: "Autonomous Multi-Agent AI Task Manager (pm-orchestrator)",
      category: "Middleware & DevEx",
      badge: "AI Platform",
      summary: "AI project manager and multi-agent tmux daemon coordinating specialized LLM agents (Claude, Codex, Antigravity) across 50+ project repositories.",
      problem: "Managing dozens of active microservices created severe context switching, stale branching, and tedious manual task prompts for AI coding agents.",
      solution: "Created pm-orchestrator: an AI CLI daemon running on VPS with context enrichment (auto-inspecting git cleanliness, stack detection, team guidelines) and smart model routing to dedicated tmux worker sessions.",
      architecture: [
        "Centralized CLI (pm dispatch, pm list, pm peek, pm attach, pm chat)",
        "Context Enrichment Engine extracting branch state, framework, and rules",
        "Smart model router (Claude for audits, Codex for DevOps, Antigravity for rapid features)",
        "Clean tmux buffer injection dispatching tasks to background agent terminals",
        "SQLite task persistence tracking lifecycle state and completion criteria"
      ],
      impact: [
        "Dispatches tasks across 50+ repositories without terminal context switching",
        "Guarantees adherence to team standards (Rule 4: issue assignee, fresh branch, PR closing)",
        "Accessible from mobile terminal (Termius) or laptop PowerShell anywhere"
      ],
      techStack: ["Python", "tmux", "SQLite", "Model Context Protocol", "Bash", "LLM APIs"],
      metrics: { label: "Concurrent Agents", value: "50+ Repos" }
    },
    {
      id: "facial-recognition-kiosk",
      title: "Edge AI Facial Recognition Attendance Kiosk & Payroll Integration",
      category: "AI & OCR",
      badge: "Edge Vision",
      summary: "On-premise edge facial recognition kiosk for retail staff attendance with anti-spoofing liveness detection and real-time payroll synchronization.",
      problem: "Retail stores suffered from buddy punching, lost RFID cards, and manual end-of-month attendance log consolidation for wage calculation.",
      solution: "Deployed an offline-first edge computer vision kiosk performing fast face embedding matching with liveness detection, instantly synchronizing clock-ins to cloud payroll.",
      architecture: [
        "Edge camera stream with lightweight face detection and alignment",
        "Blink and depth liveness check preventing photo/video spoofing",
        "Local vector database for sub-300ms 1:N face identification",
        "Encrypted background sync to centralized Smart Salary payroll database"
      ],
      impact: [
        "Completely eliminated buddy-punching and RFID card replacement costs",
        "Under 500ms total clock-in verification time per employee",
        "100% automated payroll hours calculation with zero manual adjustment"
      ],
      techStack: ["Python", "OpenCV", "FaceNet/InsightFace", "SQLite", "REST APIs", "Docker"],
      metrics: { label: "Clock-in Speed", value: "<500ms" }
    },
    {
      id: "unified-commerce-flotim",
      title: "Regional Unified Commerce & B2B Supply Chain Platform",
      category: "Full-Stack",
      badge: "E-Commerce",
      summary: "Multi-tier commerce platform connecting regional MSMEs (UMKM), hotel hospitality chains, and food producers in Eastern Indonesia (Flores Timur).",
      problem: "Regional producers and artisans lacked direct access to hotel supply contracts and tourists, relying on exploitative middlemen with fragmented payment options.",
      solution: "Architected a unified digital commerce engine tailored for Eastern Indonesia featuring localized multi-vendor inventory, wholesale hotel ordering, payment gateways, and freight tracking.",
      architecture: [
        "High-performance Next.js store with mobile-first responsive layout",
        "Multi-vendor dashboard with localized shipping courier integration",
        "B2B quote-to-order workflow for bulk hotel and restaurant orders",
        "Automated WhatsApp order confirmation and payment reminders"
      ],
      impact: [
        "Connected hundreds of local MSME producers directly to institutional buyers",
        "Streamlined payment settlement via automated virtual accounts & QRIS",
        "Empowered regional supply chain digitisation"
      ],
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
      metrics: { label: "Supply Chain", value: "B2B + B2C" }
    },
    {
      id: "legal-tax-ai-assistants",
      title: "Conversational Legal & Tax AI Compliance Advisory",
      category: "AI & OCR",
      badge: "NLP Advisory",
      summary: "Conversational legal and tax compliance assistants grounded with Indonesian legal corpus and tax calculation logic for corporate advisory.",
      problem: "Entrepreneurs and SMBs struggled with intricate Indonesian corporate tax regulations (PPh 21/23, PPN) and required fast, accurate regulatory references.",
      solution: "Engineered domain-specific conversational AI chatbots grounded on indexed tax codes and legal frameworks, providing step-by-step compliance guidance and document drafts.",
      architecture: [
        "Curated knowledge base of Indonesian corporate tax and business law",
        "Hybrid semantic retrieval pipeline with citation verification",
        "Interactive chat interface with guided calculation prompts",
        "Exportable compliance checklists and formal correspondence drafts"
      ],
      impact: [
        "Provided instant, accurate statutory reference lookups in seconds",
        "Reduced initial legal & tax advisory consultation preparation time by 70%",
        "Grounded outputs preventing AI hallucination on legal penalties"
      ],
      techStack: ["TypeScript", "Next.js", "LangChain", "Vector DB", "Tailwind CSS", "Docker"],
      metrics: { label: "Advisory Prep Time", value: "-70% Time" }
    }
  ] as CaseStudy[],

  skillCategories: [
    {
      title: "Cloud & Kubernetes Orchestration",
      icon: "Cloud",
      skills: [
        { name: "K3s / Kubernetes v1.36", level: "Expert", highlight: true },
        { name: "Tailscale Mesh VPN", level: "Expert", highlight: true },
        { name: "In-Cluster CI/CD & Runners", level: "Expert", highlight: true },
        { name: "Docker & Containerization", level: "Expert" },
        { name: "Cloudflare Edge & Workers", level: "Advanced", highlight: true },
        { name: "VictoriaLogs & Vector", level: "Advanced" },
        { name: "Nginx Load Balancing", level: "Advanced" },
        { name: "MinIO S3 Storage", level: "Advanced" },
      ]
    },
    {
      title: "Multi-Agent AI & Platform DevEx",
      icon: "Cpu",
      skills: [
        { name: "Multi-Agent Orchestration", level: "Expert", highlight: true },
        { name: "Model Context Protocol (MCP)", level: "Expert", highlight: true },
        { name: "Antigravity CLI / AGY", level: "Expert", highlight: true },
        { name: "Claude Code & Cursor Agent", level: "Expert" },
        { name: "Persistent tmux Dev Hooks", level: "Expert", highlight: true },
        { name: "Document OCR & Vision LLM", level: "Advanced", highlight: true },
        { name: "Ollama Local Inference", level: "Advanced" },
        { name: "LiteLLM AI Gateway", level: "Advanced" },
      ]
    },
    {
      title: "Enterprise Systems Integration",
      icon: "Network",
      skills: [
        { name: "Oracle NetSuite ERP", level: "Advanced", highlight: true },
        { name: "Odoo ERP (MES / Inventory)", level: "Advanced", highlight: true },
        { name: "Lark Suite OpenAPI & Base", level: "Expert", highlight: true },
        { name: "Mekari Sign (PERURI E-Meterai)", level: "Expert", highlight: true },
        { name: "WhatsApp Business API", level: "Advanced" },
        { name: "REST / Webhooks / SSE / gRPC", level: "Expert" },
        { name: "Transactional Idempotency", level: "Expert", highlight: true },
      ]
    },
    {
      title: "Full-Stack Development & Data",
      icon: "Code2",
      skills: [
        { name: "TypeScript & JavaScript", level: "Expert", highlight: true },
        { name: "Next.js (App Router)", level: "Expert", highlight: true },
        { name: "React & Tailwind CSS", level: "Expert" },
        { name: "Node.js & Python", level: "Expert" },
        { name: "Go & PHP / Laravel", level: "Advanced" },
        { name: "PostgreSQL & Redis", level: "Expert", highlight: true },
        { name: "MySQL & SQLite", level: "Advanced" },
        { name: "Prisma & Drizzle ORM", level: "Advanced" },
      ]
    }
  ],

  terminalPresets: [
    {
      cmd: "pm status",
      output: [
        "[+] PM Orchestrator Daemon v2.4 (Active on vn-core-prod-02)",
        "[-] Cluster Mesh: 3 Nodes Connected (Tailscale 100.x.x.x)",
        "[-] Active Resident tmux Sessions: 52 Projects Across 8 Squads",
        "[-] Agent Pool: Claude 3.7 Sonnet | OpenAI Codex | Antigravity Flash",
        "[*] Current Load: All workers healthy, 0 queued failures, 0 runner leaks",
        ">> Ready for interactive task dispatch."
      ]
    },
    {
      cmd: "k3s cluster-status",
      output: [
        "NAME             STATUS   ROLES           AGE   VERSION    INTERNAL-IP",
        "vn-core-prod-02  Ready    control-plane   82d   v1.36.4    100.81.101.117",
        "vn-core-prod-01  Ready    worker          82d   v1.36.4    100.122.218.25",
        "pd-proc-prod-01  Ready    worker          82d   v1.36.4    100.92.8.50",
        "",
        "CI/CD Runner Fleet (namespace: build-system):",
        "runner-prod02-01   Running   10.43.110.114:5000 [self-hosted, in-cluster, k3s]",
        "runner-proc01-01   Running   10.43.110.114:5000 [self-hosted, in-cluster, k3s]",
        "Status: 100% In-Cluster Builds | 0 min hosted runner consumption."
      ]
    },
    {
      cmd: "po-pipeline --test",
      output: [
        "[*] Simulating Multi-Page Purchase Order Ingestion (Sample_PO_2026.pdf)...",
        "[+] OCR Normalization: Extracted 24 line items with 99.4% confidence",
        "[+] Multimodal LLM: Reconciled SKUs, discounts, and 11% PPN tax calculations",
        "[+] Schema Validation: Converted to structured JSON schema (passed)",
        "[+] Dispatching to Lark Base: Table ID tbl_procure_2026... OK (HTTP 200)",
        "[+] ERP Integration: Synced to procurement staging pipeline... OK (HTTP 200)",
        ">> Pipeline completed in 11.4 seconds. Manual hours saved: ~35 mins."
      ]
    },
    {
      cmd: "tech-stack --summary",
      output: [
        "Core Philosophy: High-Reliability Cloud-Native & Autonomous Multi-Agent AI",
        "1. Compute: Multi-Node K3s Cluster + Tailscale Mesh Overlay",
        "2. CI/CD: Org Reusable Workflows + In-Cluster Runner Fleet",
        "3. Integration: Oracle NetSuite + Odoo MES + Lark Base + Mekari Sign",
        "4. Languages: TypeScript (Primary), Python, Go, PHP, Rust, SQL",
        "5. Observability: VictoriaLogs + Vector (<100MB footprint, zero bloat)"
      ]
    }
  ]
};
