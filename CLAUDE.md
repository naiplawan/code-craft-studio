# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CodeCraft Studio is a Next.js-based web app builder that combines Claude Code's AI agent capabilities with shell-level efficiency and transformative development workflow. It consists of a FastAPI backend (`apps/api/`) and a Next.js frontend (`apps/web/`) in a monorepo structure. Users describe their app ideas in natural language, and CodeCraft Studio generates production-ready Next.js code with live preview functionality.

## Development Commands

Use `pnpm` for all package management operations:

```bash
# Setup and start development
pnpm install                    # Install all dependencies (Node.js and Python)
pnpm run dev                    # Start both frontend and backend servers

# Individual services
pnpm run dev:web                # Start Next.js frontend only
pnpm run dev:api                # Start FastAPI backend only

# Database operations
pnpm run db:backup              # Create SQLite database backup
pnpm run db:reset               # Reset database to initial state
pnpm run clean                  # Remove dependencies and virtual environments

# Frontend-specific (run from apps/web/)
cd apps/web
pnpm run build                  # Build Next.js app for production
pnpm run start                  # Start production server
```

**Important**: Always run `pnpm run build` from `apps/web/` after making code changes to verify the build works correctly. Never start development servers - users handle server processes.

## Architecture Overview

### Monorepo Structure
- **Root**: Workspace configuration, shared scripts, and database
- **`apps/web/`**: Next.js 14 frontend with App Router, TypeScript, Tailwind CSS
- **`apps/api/`**: FastAPI backend with WebSocket support, SQLAlchemy, Claude Code SDK integration
- **`data/`**: SQLite database and generated project files

### Key Technologies
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS with transformative teal theme, Framer Motion
- **Backend**: FastAPI, SQLAlchemy, WebSockets, Claude Code SDK
- **Database**: SQLite for development, PostgreSQL for production (Supabase)
- **Deployment**: Vercel (frontend), integrates with GitHub and Supabase

### Core System Components

**Backend Services (`apps/api/app/`):**
- **`services/claude_act.py`**: Claude Code SDK integration and AI agent management
- **`api/chat/`**: WebSocket-based chat functionality for real-time AI interaction
- **`api/projects/`**: Project CRUD operations and management
- **`services/git_ops.py`**: Git operations and version control integration
- **`models/`**: SQLAlchemy database models for projects, sessions, tokens

**Frontend Architecture (`apps/web/`):**
- **`app/`**: Next.js App Router pages and layouts
- **`components/chat/`**: Real-time chat interface components
- **`hooks/`**: Custom React hooks for WebSocket, chat, and project management
- **`contexts/`**: React context for authentication and global state

### Data Flow
1. User describes app idea through chat interface
2. Frontend sends request via WebSocket to FastAPI backend
3. Backend uses Claude Code SDK to generate/modify code
4. Generated projects stored in `data/projects/{project_id}/repo/`
5. Live preview renders from generated Next.js code
6. Integration services handle GitHub, Vercel, and Supabase connections

### Environment Configuration
The setup automatically detects available ports and creates `.env` files:
- Frontend: http://localhost:3000 (default)
- Backend: http://localhost:8080 (default)
- API Documentation: http://localhost:8080/docs

### AI Integration Patterns
- Uses Claude Code SDK (`claude-code-sdk`) for AI agent interactions with shell-level efficiency
- System prompt located in `apps/api/app/prompt/system-prompt.md` (identifies as "CodeCraft Studio AI")
- Implements MVP approach: build only requested features, avoid feature creep
- Follows Next.js 15 patterns with App Router and React Server Components
- Integrates with Supabase for database and Vercel for deployment by default
- Features transformative teal color scheme throughout the UI

### Project Generation
Generated projects follow standard Next.js structure:
- Stored in `data/projects/{project_id}/repo/`
- Include complete `package.json`, TypeScript config, and Next.js setup
- Use Tailwind CSS and shadcn/ui for styling
- Implement proper error boundaries and accessibility patterns

## Development Guidelines

### Code Patterns
- Follow Next.js App Router conventions
- Use TypeScript with strict configuration
- Implement proper error handling and loading states
- Use Zod for schema validation when working with generated projects
- Follow accessibility best practices (ARIA, semantic HTML)

### Database Operations
- SQLite auto-creates at `data/cc.db` on first run
- Use `pnpm run db:backup` before major changes
- Projects data stored in `data/projects/` directory structure

### API Development
- FastAPI backend with automatic OpenAPI documentation
- WebSocket endpoints for real-time chat functionality
- RESTful APIs for project and settings management
- Integration APIs for GitHub, Vercel, and Supabase services

### Security Considerations
- Environment variables for sensitive configuration
- SQLAlchemy models with proper relationships and constraints
- Cryptographic utilities in `apps/api/app/core/crypto.py`
- Token-based authentication for service integrations