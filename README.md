# CodeReview AI Lite

> AI-powered code review platform built with Next.js, TypeScript, MongoDB Atlas, and Gemini AI.

CodeReview AI Lite is a full-stack web application that performs intelligent code reviews using Google's Gemini API. Developers can submit JavaScript, TypeScript, React, or Node.js code and receive AI-generated insights including code quality assessment, bug detection, security analysis, performance recommendations, maintainability scoring, optimized code generation, and interview questions.

The project was built to demonstrate practical Full Stack Development and Generative AI integration while following modern software engineering practices.

---

## Features

**Authentication**

- User registration and login
- JWT authentication
- Protected routes
- User profile
- Secure logout

**AI Code Review**

- JavaScript, TypeScript, React and Node.js support
- Code quality analysis
- Performance analysis
- Security analysis
- Maintainability assessment
- Best practice recommendations

**Bug Detection**

- Logic errors
- Missing validation
- Missing error handling
- Code smells
- Anti-patterns
- Potential security issues

**Optimization Suggestions**

- Refactoring recommendations
- Performance improvements
- Better naming conventions
- Cleaner architecture
- Reusable implementations

**Improved Code Generation**

- AI-generated optimized code
- Side-by-side comparison
- Explanation of improvements

**Interview Question Generator**

- Beginner questions
- Intermediate questions
- Advanced questions
- Concept-based discussion

**Analysis History**

- Persistent report storage
- Previous analysis history
- Report details
- Delete reports

**Dashboard**

- Total analyses
- Average quality score
- Security trends
- Performance trends
- Interactive charts

**Modern UI**

- Responsive design
- Dark mode
- Glassmorphism interface
- Framer Motion animations
- Loading skeletons
- Syntax highlighting

---

## Tech Stack

| Layer | Technologies |
|--------|--------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, Shadcn UI |
| Backend | Next.js API Routes |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT |
| AI | Google Gemini API |
| Charts | Recharts |
| Animations | Framer Motion |
---

## Architecture

The application follows a modern full-stack architecture built with the Next.js App Router.

Users authenticate through JWT-based authentication before accessing protected features. Submitted code is validated on the backend and sent to the Gemini API using a structured prompt engineered for software code review. The AI returns a structured JSON response containing quality scores, detected issues, optimization suggestions, improved code, and interview questions.

Analysis reports are stored in MongoDB Atlas, allowing users to revisit previous reviews and monitor their progress through the analytics dashboard.

---

## Workflow

```text
User Login
      │
      ▼
Paste Source Code
      │
      ▼
Select Language
      │
      ▼
Backend Validation
      │
      ▼
Gemini API
      │
      ▼
AI Analysis
      │
      ▼
Store Report in MongoDB
      │
      ▼
Dashboard & Report History
```

---

## REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Authenticate a user |
| POST | `/api/analyze` | Analyze source code |
| GET | `/api/reports` | Get all reports |
| GET | `/api/reports/:id` | Get report details |
| DELETE | `/api/reports/:id` | Delete report |
| GET | `/api/dashboard/stats` | Dashboard analytics |

---

## Getting Started

Clone the repository

```bash
git clone https://github.com/HaaDil-404/CodeReviewAI.git
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=
```

Start the development server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

## Key Learning Outcomes

This project demonstrates practical experience with:

- Full Stack Development
- Generative AI Integration
- Prompt Engineering
- REST API Development
- JWT Authentication
- MongoDB Atlas
- TypeScript
- Next.js App Router
- Responsive UI Development
- Reusable Component Architecture

---

## Future Improvements

- GitHub Repository Integration
- PDF Report Export
- Shareable Reports
- AI Chat Assistant
- Monaco Editor Integration
- Team Collaboration
- Report Comparison
- Rate Limiting

---

## License

This project is available for educational and portfolio purposes.
