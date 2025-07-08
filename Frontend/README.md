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


Submission Info
Developer: Laksh Raj Kumar
Submitted For: Web Development Internship – Sarthi.me
Deadline: 12 July 2025


























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
