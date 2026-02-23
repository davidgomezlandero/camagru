# Camagru

Camagru is the first web application project of the Outer Core at École 42. This version is being developed as a **production-oriented, backend-focused application**, with strong emphasis on architecture, scalability, and infrastructure design.

⚠️ **Current Status**  
The project is currently in the **technical design and architectural decision phase**. Core folder structure, Docker configuration, and service separation have been defined. Application logic is being implemented progressively to ensure deep understanding of each technology involved.

Rather than treating Camagru as a purely academic assignment, this project is being developed as a **modular monolithic web application** following professional backend engineering practices. The objectives are: consolidate backend fundamentals, strengthen architectural decision-making, implement secure authentication flows, build a scalable Docker-based infrastructure, prepare the project for future production deployment, and develop confidence and technical depth in each integrated technology.

The application follows a **modular monolithic architecture**:

Client → Nginx (Reverse Proxy + HTTPS) → Backend API (Fastify + TypeScript) → PostgreSQL → Redis (caching, rate limiting, token management)

The backend is structured using the MVC pattern, service layer separation, repository pattern, and domain-based modular organization. This approach allows scalability and maintainability without introducing microservices complexity.

### Tech Stack (Planned)

**Backend:** Node.js, Fastify, TypeScript, PostgreSQL, Redis, JWT-based authentication (access & refresh tokens), schema validation, rate limiting, secure HTTP headers, modular architecture.  
**Frontend:** HTML, Vanilla JavaScript (ES Modules), Tailwind CSS.  
**Infrastructure:** Docker (multi-stage builds), Docker Compose (development & production configurations), Nginx (reverse proxy & HTTPS termination), Cloudflare (planned), AWS deployment (planned).  
**Testing (Planned):** Unit testing (service layer), Integration testing (API endpoints).

### Current Development Phase

The project is currently focused on defining and validating folder structure, designing backend modular architecture, creating Dockerfiles for each service (backend, PostgreSQL, Redis, Nginx), setting up development and production docker-compose configurations, and documenting technical and architectural decisions. Deployment and test environments are not yet implemented, as the current priority is consolidating core backend concepts and infrastructure understanding.

### Development Philosophy

This project prioritizes clear separation of concerns, scalable monolithic architecture, security-first design, testability, infrastructure awareness, and progressive, depth-oriented learning. Each technology is being integrated incrementally to ensure solid conceptual understanding rather than superficial implementation.

### Documentation

Detailed architectural decisions, roadmap phases, and technical explanations will be maintained inside the `/docs` directory as the project evolves.

### Author

Developed as part of the École 42 curriculum, with a strong focus on backend engineering, production-oriented architecture, and long-term professional growth.