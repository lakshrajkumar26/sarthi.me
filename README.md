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

[reactFlask/
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
└── .venv/ # Python virtual environment ](https://tree.nathanfriend.com/?s=(%27optiJs!(%27fancyW~fullPath!false~trailingSlashW~rootDotW)~Q!(%27Q!%27reactX9*63Roo7pUfolder82FrJtNd9V3Reac7%2B%20TypeScrip7frJtNd0*2src9YZQ%20codeK2_%2FY*63Reusable%20_K5pages9Zpage%20%7BHomePage.tsx%7D0*2public9*3Staticqssets%20%7BicJs%2C%20favicJ%2C%20etc.%7D0*2index.html43HTML%20template0*5package.jsJYY63PUdepNdNciesCscripts082BackNd9Y3X%20backNd0*5app.py463Xqpp%20with%20POST%20%2FemotiJ%20API082.vNv9*V3PythJ%20virtual%20NvirJmN7%7Bno7pushezto%20GitHub%7D082README.md4V3Setup%20guideCpUoverview85.gitignore463IgnorezfilesCfolders8%27)~versiJ!%271%27)V%20-%E2%94%80%E2%94%80%2008%E2%94%822%E2%94%9C-3%23%204YYY5%E2%94%94-6*%207t%208%5Cn9%2F4CqnzJonK0*%E2%94%82*NenQsourceUrojec7V6%20W!trueXFlaskY**Z3Main%20_compJNtsq%20azd%20%01zq_ZYXWVUQNKJC987654320-*)



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


























