## Loom Link
https://www.loom.com/share/dc0e63ddc0cc43febc49ba53373ec0ce

# Emotion Reflection Tool 😌

A simple web application where users can reflect on their emotions through short text input. The app analyzes the input using a mock backend and returns a predicted emotion with confidence.

---

## ✨ Features

- Mobile-first responsive design
- Submit short reflections (e.g., “I feel nervous before my interview”)
- Backend returns a mock emotion + confidence
- Loading state while analyzing
- Clean and minimal UI
- Built using:
  - 🧠 React (TypeScript)
  - 🐍 Flask (Python)
  - 🔄 CORS for frontend-backend connection

---

## 🧩 Folder Structure

reactFlask/
│
├── Backend/ # Flask backend
│ └── app.py
│
├── Frontend/ # React frontend
│ ├── src/
│ │ └── HomePage.tsx
│ │ └── App.tsx
│ └── public/
│ └── package.json
│
└── .venv/ # Python virtual environment 



---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/lakshrajkumar26/sarthi.me
cd emotion-reflection-tool

## Run Backend (Flask)

cd Backend
python -m venv ../.venv
source ../.venv/bin/activate        # macOS/Linux
# OR
../.venv/Scripts/activate           # Windows PowerShell

pip install -r requirements.txt     # or manually: pip install flask flask-cors
python app.py

- The backend will run at http://127.0.0.1:5000

#  Run Frontend (React)
cd Frontend
npm install
npm run dev                         # or npm start
- The frontend will run at http://localhost:5173 

API Endpoint
POST /emotion

# Request:

{
  "text": "I feel nervous before my interview"
}

# Response:

{
  "emotion": "Anxious",
  "confidence": 0.85
}
🎥 Loom Video (Optional)
https://www.loom.com/share/dc0e63ddc0cc43febc49ba53373ec0ce

Submission Info
Developer: Laksh Raj Kumar
Submitted For: Web Development Internship – Sarthi.me
Deadline: 12 July 2025


























