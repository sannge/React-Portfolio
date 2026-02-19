"""One-time script to populate Vercel Blob with initial profile data and directory.
Run once: python api/setup_blob.py
"""

import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()

BLOB_TOKEN = os.getenv("BLOB_READ_WRITE_TOKEN", "")
BLOB_API = "https://blob.vercel-storage.com"


def blob_write(pathname, data, content_type="application/json"):
    if isinstance(data, (dict, list)):
        body = json.dumps(data, indent=2, ensure_ascii=False)
    else:
        body = str(data)
    r = requests.put(
        f"{BLOB_API}/{pathname}",
        headers={
            "Authorization": f"Bearer {BLOB_TOKEN}",
            "x-api-version": "7",
            "x-content-type": content_type,
            "x-add-random-suffix": "0",
        },
        data=body.encode("utf-8"),
    )
    print(f"  {pathname}: {r.status_code}")


def blob_upload_file(pathname, filepath, content_type):
    """Upload a binary file to Vercel Blob."""
    with open(filepath, "rb") as f:
        data = f.read()
    r = requests.put(
        f"{BLOB_API}/{pathname}",
        headers={
            "Authorization": f"Bearer {BLOB_TOKEN}",
            "x-api-version": "7",
            "x-content-type": content_type,
            "x-add-random-suffix": "0",
        },
        data=data,
    )
    print(f"  {pathname}: {r.status_code}")


# ── Directory ──────────────────────────────────────────────────────────────
directory = {
    "profile": {
        "summary": "San Nge — Full-Stack Software Engineer & IT Manager at Foxconn Industrial Internet (FII-NA), Katy TX. Nearly a decade of technical experience. Architecting enterprise manufacturing systems and deploying AI-powered applications to production, delivering 15+ applications serving 1,000+ daily users across 6 business units. Core expertise: C#/.NET Core, Next.js, React, SQL Server, and LLM engineering.",
        "sections": {
            "work_experience": {
                "file": "profile/work_experience.md",
                "summary": "IT Manager at Foxconn (Feb 2026–Present, 10+ engineers), Software Engineer at Foxconn (Mar 2021–Feb 2026, 15+ apps), Full-Stack Engineer at Bit Broker Labs (Oct 2020–Mar 2021), Research & Teaching at PLU (2019–2020)"
            },
            "skills": {
                "file": "profile/skills.md",
                "summary": "C#/.NET Core 93%, React/Next.js 92%, TypeScript 90%, JavaScript 92%, SQL Server 90%, RAG/AI 82%, Node.js 85%, PostgreSQL 80%, Python 70%, Docker 72%"
            },
            "projects": {
                "file": "profile/projects.md",
                "summary": "AI PMS (Electron/LangGraph/pgvector), RefMonkey (Affiliate SaaS), Slack Clone, Socix (Social Media), Athlete Profile Creator, Burger Builder, Connect 6 Game, X-Research"
            },
            "achievements": {
                "file": "profile/achievements.md",
                "summary": "15+ apps serving 1000+ daily users across 6 BUs, AI-powered Support Ticketing with RAG, real-time manufacturing dashboards, .NET 6/8 expertise, Azure DevOps CI/CD, Redis pub/sub scaling"
            },
            "contact": {
                "file": "profile/contact.md",
                "summary": "Katy TX, samngestep2@gmail.com, (253) 258-2324, LinkedIn: san-nge695b16180, GitHub: sannge"
            }
        }
    },
    "memory_categories": ["personal", "work"]
}

# ── Profile files ──────────────────────────────────────────────────────────
profiles = {
    "profile/work_experience.md": """## Work Experience

### IT Manager — Foxconn Industrial Internet (FII-NA) | Feb 2026 – Present
- Tech Lead overseeing 10+ engineers across 6 business units
- Own resource allocation, project prioritization, and technical roadmap
- Define coding standards, conduct architectural reviews, maintain CI/CD pipelines
- Continue hands-on development of AI-powered systems

### Software Engineer — Foxconn Industrial Internet (FII-NA) | Mar 2021 – Feb 2026
- Built AI-powered Support Ticketing System with RAG using OpenAI Agent SDK and PostgreSQL pgvector
- Delivered 15+ full-stack apps (ASP.NET Core, Next.js, React, SQL Server) serving 1,000+ daily users
- Real-time manufacturing monitoring with WebSockets and Socket.io
- Mentored 3 junior developers

### Full-Stack Engineer — Bit Broker Labs | Oct 2020 – Mar 2021
- React, GraphQL, MongoDB, Express.js

### Research & Teaching — Pacific Lutheran University | 2019–2020
- Undergraduate researcher (protein structure prediction, smart home tech)
- Computer Science Teaching Assistant

### Leadership Style
- Leads from the codebase — believes the strongest engineering cultures are built by managers who still ship code
- Runs knowledge-sharing sessions for onboarding and technical growth
- Evaluates and introduces new technologies after prototyping alternatives
- Collaborates directly with operations leadership to align engineering priorities with business objectives
- Manages vendor relationships""",

    "profile/skills.md": """## Technical Skills
- C# / ASP.NET Core: 93%
- React / Next.js: 92%
- TypeScript: 90%
- JavaScript: 92%
- SQL Server: 90%
- RAG / Agentic AI: 82%
- OpenAI Agent SDK: 80%
- LangChain/LangGraph: 75%
- Prompt Engineering: 85%
- Node.js/Express: 85%
- PostgreSQL: 80%
- GraphQL: 78%
- WebSockets: 82%
- Python: 70%
- Docker/Kubernetes: 72%
- AWS: 68%
- Azure: 65%

## .NET Expertise (5–7 years commercial)
- Production stack runs on .NET 6 and .NET 8 for ASP.NET Core Web APIs serving manufacturing BUs
- Migrated legacy .NET Framework services to .NET 6 LTS; new greenfield APIs built on .NET 8 leveraging native AOT and minimal API patterns
- Built: RESTful APIs (ASP.NET Core Web API), full-stack web apps (ASP.NET Core MVC + Razor / Next.js frontends), desktop applications (WinForms/WPF for robot communication), microservices, and background services (Hosted Services / Worker Services) for data synchronization between manufacturing systems

## DevOps & CI/CD
- Azure DevOps Pipelines: YAML-based CI/CD pipelines that build, test, and deploy .NET APIs and Next.js frontends
- Git (Azure Repos): Feature branch strategy with PR reviews and merge policies enforcing build validation
- Docker: Containerized deployments for consistent environments across dev, staging, and production
- SQL Server Migrations: Version-controlled schema changes applied through automated migration scripts in the deployment pipeline
- Automated testing: Unit tests run as CI gates before PRs can merge

## Azure Experience
- Azure App Services, Azure SQL Database, Azure DevOps (project management, repos, pipelines, artifact feeds for NuGet packages), Azure Blob Storage, Azure Active Directory (OAuth 2.0 / OIDC)""",

    "profile/projects.md": """## Notable Projects

### 1. AI Project Management & Knowledge Base System (PMS)
- Stack: Electron, TypeScript, LangGraph, PostgreSQL pgvector, RAG, Redis, Meilisearch
- GitHub: github.com/sannge/PMS
- Project management app with task management — stories, bugs, and epics on Kanban boards
- Used a single-table design with type discriminator instead of separate tables per task type — every board view pulls all types at once, sorts by priority, filters by status/assignee. Composite indexes on (project_id, status, assignee) keep reads fast
- FastAPI backend with SQLAlchemy 2.0, Pydantic schema validation, Alembic migrations — architectural patterns map directly to .NET: DI, EF Core migrations, FluentValidation, repository/service pattern
- Database design philosophy: consistency boundary within bounded context (transactional), eventual consistency across services (message queues/events). Read/write separation with Redis caching. Indexes designed from query patterns, not table structure. Schema changes version-controlled with rollback scripts. Optimistic concurrency (rowversion/concurrency tokens) as the default

### 2. RefMonkey — Affiliate Tracking SaaS
- Stack: React, Node.js, MongoDB, Stripe

### 3. Full Stack Slack Clone
- Stack: React, PostgreSQL, GraphQL, Docker, AWS

### 4. Socix — Social Media App
- Stack: React, MySQL, GraphQL, WebRTC

### 5. Athlete Profile Creator
- Stack: MERN, Google Maps API, TailwindCSS

### 6. Burger Builder
- Stack: React, Redux, Firebase

### 7. Connect 6 Game
- Stack: JavaScript, Java, REST

### 8. X-Research Desktop App
- Stack: Electron, AI, JavaScript""",

    "profile/achievements.md": """## Key Achievements at Foxconn

- Built a company-wide AI-powered Support Ticketing System from scratch: .NET Core Web API backend, Next.js/React frontend, SQL Server data layer. Integrated a RAG pipeline backed by a Knowledge Base with an AI agent that intercepts requests before a ticket is created — resolving issues instantly from historical documentation. For tickets that do come through, the agent surfaces step-by-step resolution guidance to the ticket owner. This eliminated knowledge silos across the organization.

- Built real-time production dashboards using Socket.io and WebSockets that visualize live manufacturing data — production throughput, turn-around time, line status, and bottleneck indicators — streamed directly from the factory floor. These gave leadership visibility into how the entire factory was operating for the first time, directly impacting revenue decisions.

- Developed shipping systems and manufacturing execution systems using C#/.NET Core and SQL Server, serving BUs whose end customers include NVIDIA, Cisco, Oracle, Facebook, Microsoft, and Pure Storage.

- Led modernization of robot communication pipelines, migrated frontend applications to Next.js and React, and architected RESTful APIs and database schemas handling high-volume transaction loads.

- Built warehouse management systems integrated with existing ERP workflows using Docker-containerized microservices.

- In manufacturing, there is no tolerance for downtime — every system was designed with that constraint.

## Architectural Decisions

- Scaled a real-time MES production system: originally used SignalR for direct server-to-client communication, which broke when scaling to multiple server instances. Introduced a Redis pub/sub queue as the backplane so any server instance could publish updates and every connected client would receive them regardless of which server they were on. This enabled horizontal scaling behind a load balancer and multi-tenant customer onboarding onto a single deployment. Still running in production today.""",

    "profile/contact.md": """## Contact Information
- Location: Katy, TX, United States
- Email: samngestep2@gmail.com
- Phone: +1 (253) 258-2324

## Online Profiles
- LinkedIn: linkedin.com/in/san-nge695b16180
- GitHub: github.com/sannge
- Email (personal): samngestep@gmail.com
- Email (portfolio): samngestep2@gmail.com"""
}

# ── Memories (migrated from learned.json) ──────────────────────────────────
memories = [
    {"key": "languages", "category": "personal", "content": "Burmese", "created_at": "2026-02-18T01:25:50"},
    {"key": "work_schedule", "category": "work", "content": "San goes to the office 5 days a week.", "created_at": "2026-02-18T10:32:45"},
]


def main():
    if not BLOB_TOKEN:
        print("ERROR: BLOB_READ_WRITE_TOKEN not set in .env")
        return

    print("Uploading directory.json...")
    blob_write("directory.json", directory)

    print("\nUploading profile files...")
    for path, content in profiles.items():
        blob_write(path, content, content_type="text/markdown")

    print("\nUploading memories.json...")
    blob_write("memories.json", memories)

    print("\nUploading downloadable files...")
    files_to_upload = {
        "files/resume.docx": ("public/San_Nge_Resume.docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
        "files/cover-letter.docx": ("public/San_Nge_Cover_Letter.docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
    }
    for blob_path, (local_path, ctype) in files_to_upload.items():
        if os.path.exists(local_path):
            blob_upload_file(blob_path, local_path, ctype)
        else:
            print(f"  SKIP {local_path} (not found)")

    print("\nDone! All initial data uploaded to Vercel Blob.")


if __name__ == "__main__":
    main()
