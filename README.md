# CodeCraft Studio

<div align="center">
  <img src="./assets/codecraft_logo_web3.svg" alt="CodeCraft Studio Logo" width="400" height="120" />
  <h1>CodeCraft Studio</h1>
  <p><strong>AI-Powered Web App Builder with Next-Gen Web3 Aesthetic</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
  [![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://python.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal.svg)](https://fastapi.tiangolo.com/)
  [![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
</div>

## Overview

CodeCraft Studio is a revolutionary AI-powered web application builder that transforms natural language descriptions into production-ready Next.js applications. Featuring a modern Web3-inspired design, comprehensive documentation, and seamless integrations, it provides developers with an intuitive way to create, preview, and deploy web applications using advanced AI capabilities.

## ✨ Key Features

### 🤖 **AI-Driven Development**
- **Multi-Agent Support**: Integrated with Claude Code, Cursor Agent, and Windsurf Editor
- **Natural Language to Code**: Describe your app ideas in plain English and watch them transform into working applications
- **Real-time AI Assistance**: Interactive chat interface with thinking mode for continuous development guidance
- **Smart Code Generation**: Advanced AI agents that understand context and generate production-ready code

### 🎨 **Modern Web3-Inspired Design**
- **Futuristic Aesthetic**: Hexagonal network patterns, holographic gradients, and animated elements
- **Dark Mode Support**: Seamless light/dark theme switching with beautiful transitions
- **Transformative Teal Theme**: Modern color palette with purple-to-cyan Web3 gradients
- **Interactive UI**: Smooth animations, hover effects, and responsive design

### 🚀 **Developer Experience**
- **Live Preview**: Instant hot-reload previews with desktop and mobile viewport modes
- **VS Code-Style Editor**: Built-in file explorer with syntax highlighting for 50+ languages
- **Comprehensive Documentation**: Notion-like documentation at `/docs` with interactive examples
- **WebSocket Communication**: Real-time bidirectional updates between frontend and backend

### 🌐 **Deployment & Integration**
- **One-Click Publishing**: Deploy to Vercel with automatic GitHub integration
- **Service Integrations**: GitHub, Vercel, and Supabase with encrypted token storage
- **Automated Workflows**: Push to GitHub → Deploy to Vercel → Live URL generation
- **Environment Management**: Automatic port detection and configuration

### 🛠 **Advanced Architecture**
- **Next.js 15**: Built with App Router, React Server Components, and proper params handling
- **FastAPI Backend**: High-performance Python API with WebSocket support and terminal UI
- **Monorepo Structure**: Clean separation with pnpm workspaces
- **Type Safety**: Full TypeScript coverage with Zod validation

## 📁 Project Structure

```
code-craft-studio/
├── apps/
│   ├── api/                    # FastAPI Backend
│   │   ├── app/
│   │   │   ├── api/           # API routes (chat, projects, services)
│   │   │   ├── core/          # Terminal UI, crypto utilities
│   │   │   ├── models/        # SQLAlchemy database models
│   │   │   ├── services/      # Claude Code integration, Git ops
│   │   │   ├── prompt/        # System prompts for AI agents
│   │   │   └── main.py        # FastAPI application entry
│   │   └── requirements.txt
│   └── web/                   # Next.js Frontend
│       ├── app/              # App Router pages (/docs, /[project_id])
│       ├── components/       # React components (chat, settings, logo)
│       ├── hooks/           # Custom hooks (WebSocket, theme)
│       ├── contexts/        # Theme provider and global state
│       └── public/          # Static assets (Web3 logos)
├── data/                     # SQLite database and generated projects
├── scripts/                  # Development and build scripts
├── CLAUDE.md                # Project instructions for Claude Code
└── package.json             # Root workspace configuration
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** and **pnpm** - Package management
- **Python 3.8+** - Backend runtime  
- **AI Agent**: Claude Code, Cursor, or Windsurf Editor
- **Git** - Version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd code-craft-studio

# Install all dependencies (Node.js + Python)
pnpm install

# Start development servers
pnpm run dev
```

**Access Points:**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Documentation**: http://localhost:3000/docs
- **API Docs**: http://localhost:8080/docs

## 🛠 Development Commands

```bash
# Development
pnpm run dev                    # Start both frontend and backend
pnpm run dev:web               # Start Next.js frontend only
pnpm run dev:api               # Start FastAPI backend only

# Frontend-specific (from apps/web/)
cd apps/web
pnpm run build                 # Build Next.js app for production
pnpm run start                 # Start production server

# Database Management
pnpm run db:backup             # Create SQLite database backup
pnpm run db:reset              # Reset database to initial state

# Maintenance
pnpm run clean                 # Remove dependencies and virtual environments
```

## 🎨 New Features & Improvements

### **Web3-Inspired Branding**
- **New Logo Design**: Hexagonal network structure with holographic gradients
- **Animated Elements**: Floating particles, rotating hexagons, and shimmer effects
- **Modern Color Palette**: Purple-to-cyan gradients with transformative teal accents

### **Enhanced User Experience**
- **Dark Mode Toggle**: Available in General Settings with smooth transitions
- **Documentation Portal**: Comprehensive `/docs` page with Notion-like design
- **Interactive Code Blocks**: Copy-to-clipboard functionality with visual feedback
- **Search Functionality**: Quick navigation through documentation sections

### **Technical Improvements**
- **Next.js 15 Compatibility**: Proper async params handling with `React.use()`
- **Terminal UI System**: Beautiful ASCII logo and logging for backend services
- **Enhanced Error Handling**: Better error boundaries and user feedback
- **Type Safety**: Improved TypeScript coverage and validation

## 🔧 Configuration & Setup

### AI Agent Configuration

Configure your preferred AI agent in **Settings → AI Agents**:

1. **Claude Code** - Advanced reasoning and code generation
2. **Cursor Agent** - AI-powered code editor integration  
3. **Windsurf Editor** - Next-generation IDE with AI

### Service Integrations

#### GitHub Integration
```bash
# 1. Generate token at: https://github.com/settings/tokens
# 2. Add token in Settings → Service Integrations → GitHub
# 3. Connect project repository in Project Settings
```

#### Vercel Deployment
```bash
# 1. Get token from: https://vercel.com/account/tokens
# 2. Add token in Settings → Service Integrations → Vercel
# 3. Click "Publish" to deploy with GitHub integration
```

#### Supabase Database
```bash
# 1. Get credentials from Supabase Dashboard → Settings → API
# 2. Configure Project URL and API keys in Settings
# 3. Enable authentication and real-time features
```

## 📚 Documentation

Visit `/docs` for comprehensive documentation including:

- **Getting Started** - Installation and first project
- **Core Features** - AI agents, live preview, code editor
- **Integrations** - GitHub, Vercel, Supabase setup
- **API Reference** - REST endpoints and WebSocket connections
- **Troubleshooting** - Common issues and solutions

## 🏗 Architecture Deep Dive

### Backend Services (`apps/api/app/`)

- **`core/terminal_ui.py`** - ASCII logo and clean terminal interface
- **`services/claude_act.py`** - Multi-agent AI integration
- **`api/chat/`** - Real-time WebSocket chat functionality
- **`api/projects/`** - Project lifecycle management
- **`services/git_ops.py`** - Git operations and version control

### Frontend Architecture (`apps/web/`)

- **`app/docs/`** - Notion-like documentation portal
- **`components/CodeCraftLogo.tsx`** - Animated Web3-inspired logo component
- **`components/settings/GeneralSettings.tsx`** - Theme toggle and project settings
- **`hooks/useUserRequests.ts`** - Request tracking and management
- **`contexts/ThemeProvider.tsx`** - Dark/light mode management

### Data Flow & State Management

1. **User Interaction** - Natural language input through chat interface
2. **AI Processing** - Multi-agent system processes and generates code
3. **Real-time Updates** - WebSocket communication for live feedback  
4. **Code Generation** - Projects stored in `data/projects/{id}/repo/`
5. **Live Preview** - Hot-reload development server integration
6. **Deployment Pipeline** - GitHub → Vercel → Live URL

## 🔍 Troubleshooting

### Common Issues

**Params Warning (Next.js 15)**
- Fixed: Proper `React.use()` implementation for async params

**Port Conflicts**
```bash
# Ports auto-detected, check .env files for assignments
lsof -ti:3000 | xargs kill -9  # Kill port 3000
lsof -ti:8080 | xargs kill -9  # Kill port 8080
```

**AI Agent Connection**
- Ensure your AI agent (Claude Code, Cursor, etc.) is installed and logged in
- Check Settings → AI Agents for connection status
- Verify API keys and permissions

**Preview Server Issues**
- Stop and restart preview server
- Clear browser cache
- Check console for WebSocket connection errors

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Follow TypeScript and Python best practices
4. Test both frontend and backend changes
5. Update documentation if needed
6. Commit with descriptive messages
7. Push to branch and open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Roadmap

- **🎯 Enhanced AI Capabilities** - Multi-modal AI with image understanding
- **🌐 Web3 Integration** - Smart contract deployment and blockchain features  
- **📱 Mobile App Support** - React Native project generation
- **🔌 Plugin System** - Extensible architecture with community plugins
- **👥 Collaboration Features** - Real-time multi-user development
- **🚀 Advanced Deployment** - Kubernetes, AWS, and custom hosting options

---

<div align="center">
  <p>Built with ❤️ for the future of development</p>
  <p><strong>Transform your ideas into reality with AI-powered Web3 development</strong></p>
  
  [📖 Documentation](http://localhost:3000/docs) • [🚀 Get Started](#quick-start) • [💬 Discord](https://discord.gg/codecraft)
</div>