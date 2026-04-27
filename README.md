</p>
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=40&pause=1000&color=F700FF&center=true&vCenter=true&width=1200&lines=PortfoGen;Autonomous+AI;Resume-to-Portfolio+Generator" alt="Typing SVG" />
</p>

> Turn your resume into a recruiter-ready portfolio website in seconds.


## 🌟 Overview



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
