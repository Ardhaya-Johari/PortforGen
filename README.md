# 🚀 PortfoGen  
### Autonomous AI Resume-to-Portfolio Generator  
<svg width="800" height="100" xmlns="http://www.w3.org/2000/svg">
  <style>
    .text { font: bold 24px monospace; fill: #FF00FF; }
  </style>
  <!-- Main text -->
  <text x="50%" y="50%" text-anchor="middle" class="text">
    PortfoGen - Autonomous AI Resume-to-Portfolio Generator
    <!-- Blinking cursor -->
    <tspan>|</tspan>
    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
  </text>
</svg>

> Turn your resume into a recruiter-ready portfolio website in seconds.

---
## 🌟 Overview

**PortfoGen** is an AI-powered full-stack web application that transforms a traditional PDF resume into a fully structured, professional portfolio website within seconds.

Instead of manually designing and rewriting portfolio content, users simply upload their resume, and PortfoGen intelligently analyzes the document using **Google Gemini AI**. The system extracts key information such as professional summary, skills, projects, experience, and education, refines the language for recruiter impact, and restructures everything into a clean, modern, portfolio-ready format.

The generated output is not just a visual template conversion — it is an AI-optimized transformation that enhances clarity, storytelling, and professional presentation. Users can then preview, save, and publish their personalized digital portfolio through a shareable link.

PortfoGen bridges the gap between raw achievements and compelling professional presence.

---

## 🎯 Problem Statement

Students and professionals struggle to convert raw resume achievements into visually appealing portfolio websites.

Manual portfolio creation:
- Takes hours
- Requires design knowledge
- Lacks storytelling impact

---

## 💡 Solution

PortfoGen automates the entire process:

1. Upload Resume (PDF)
2. AI extracts and optimizes content
3. Portfolio website is generated instantly
4. User can save and publish it

---

## 🧠 How It Works

```
Resume Upload (PDF)
        ↓
PDF Text Extraction
        ↓
Gemini AI Processing
        ↓
Structured Portfolio JSON
        ↓
React Portfolio Website
        ↓
Save & Publish
```

---

## 🏗️ Tech Stack

### 🖥 Frontend
- React.js (Vite)
- React Router
- Modern CSS
- Dark/Light Theme Toggle

### ⚙ Backend
- Node.js
- Express.js
- Multer (file upload)
- pdf-parse

### 🤖 AI
- Google Gemini API

### 🗄 Database
- PostgreSQL

---


## 📁 Project Structure

```
PortfoGen/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── db/
│   │   └── app.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## 🔄 System Workflow

```mermaid
flowchart TD
    A[User Uploads Resume PDF] --> B[Backend Receives File]
    B --> C[PDF Text Extraction using pdf-parse]
    C --> D[Send Resume Text to Gemini AI]
    D --> E[Gemini Generates Structured Portfolio JSON]
    E --> F[Save Portfolio JSON in PostgreSQL]
    F --> G[Return Portfolio ID to Frontend]
    G --> H[Render Portfolio Website]
    H --> I[User Can Save & Publish Portfolio]
```

---

## 🏗️ System Architecture

```mermaid
flowchart LR
    User --> Frontend[React Frontend]
    Frontend -->|POST Resume| Backend[Node + Express Backend]
    Backend -->|Extract Text| PDFParser[pdf-parse]
    Backend -->|Send Text| Gemini[Google Gemini API]
    Gemini -->|Structured JSON| Backend
    Backend -->|Store Data| Database[(PostgreSQL)]
    Backend -->|Send Portfolio JSON| Frontend
    Frontend --> PortfolioPage[Generated Portfolio Website]
```

---

## 🔐 Environment Variables

Create a `.env` file inside `backend/`:

```
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=postgresql://user:password@localhost:5432/portfogen
```

⚠ Never push `.env` to GitHub.

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```
git clone <your-repo-url>
cd PortfoGen
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

Backend runs at:
```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 📦 API Endpoint

### Upload Resume

```
POST /api/resume/upload
```

Form-data:
```
resume: PDF file
```

Response:
```json
{
  "portfolio": { ...structured portfolio JSON... }
}
```

---

## 🧩 Portfolio JSON Structure

```json
{
  "about": "",
  "contact": {
    "email": "",
    "phone": "",
    "linkedin": "",
    "github": ""
  },
  "skills": {
    "languages": [],
    "frameworks": [],
    "tools": []
  },
  "projects": [
    {
      "title": "",
      "description": []
    }
  ],
  "education": [
    {
      "degree": "",
      "institute": "",
      "year": ""
    }
  ],
  "additional": []
}
```

---

## 🔥 Key Features

- AI-generated professional summary
- Skill categorization
- Project rewriting & optimization
- Contact extraction
- Save & publish functionality
- Shareable public link

---

## 🏆 Scope (MVP)

### Implemented
- PDF upload
- Gemini AI integration
- Portfolio generation
- Save & publish
- Single modern template

### Future Scope
- DOCX support
- Authentication system
- Multiple portfolio templates
- Editing interface
- ATS scoring
- Custom domain support

---

## 👩‍💻 Author

**Ardhaya Johari**  
Full-Stack + AI Enthusiast  

* GitHub: [https://github.com/Ardhaya-Johari](https://github.com/Ardhaya-Johari)
* LinkedIn: [https://www.linkedin.com/in/ardhaya-johari-819275321/](https://www.linkedin.com/in/ardhaya-johari-819275321/)

---

## ⭐ Final Statement

PortfoGen bridges the gap between raw achievements and professional presentation.

AI-powered.  
Recruiter-ready.  
Instantly generated.
