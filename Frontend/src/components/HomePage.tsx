// import React, { useState } from 'react'
// import axios from "axios";
// import "./HomePage.css";



// const HomePage = () => {

//   const [text, setText] = useState<string>("")
//   const [loading, setLoading] = useState<boolean>(false);
//   const [emotion, setEmotion] = useState<string | null>("");
//   const [confidence, setConfidence] = useState<number | null>(0);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); 
//     setError("");
//     setEmotion(null);
//     setConfidence(null);

//     try {
//       const res = await axios.post("http://127.0.0.1:5000/emotion", { text });
//       setEmotion(res.data.emotion);
//       setConfidence(res.data.confidence);

//     }
//     catch (err) {
//       console.log("error occurred Unavailable to recieve data", err);
//       setEmotion('Error fetching emotion');
//       setConfidence(0);
//     } finally   // after async completes
//     {
//       setLoading(false);
//     }

//   }
//   return (
//     <><div className="main">
//       <h1>Emotion Reflection Tool</h1>

//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Write how you feel..."
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? "Analyzing..." : "Submit"}
//         </button>
//       </form>

//       <div className="display-emotion">
//         <h2>Emotion : {emotion}</h2>
//         <h2>Confidence : {confidence}</h2>
//       </div>
//     </div>


//     </>
//   )
// }

// export default HomePage

import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emotion, setEmotion] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEmotion(null);
    setConfidence(null);

    try {
      if (!/[a-zA-Z]/.test(text.trim())) {
        setError("Please enter a meaningful sentence with words.");
        setLoading(false);
        return;
      }
      const res = await axios.post("http://127.0.0.1:5000/emotion", { text });
      setEmotion(res.data.emotion);
      setConfidence(res.data.confidence);
    } catch (err) {
      console.error("Error occurred while receiving data:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <h1 className="heading">Emotion Reflection Tool</h1>

      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write how you feel..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>

      {loading && <div className="loader">Analyzing...</div>}

      {error && <p className="error">{error}</p>}

      {emotion && confidence !== null && (
        <div className="result-card">
          <h2>Detected Emotion</h2>
          <p><strong>Emotion:</strong> {emotion}</p>
          <p><strong>Confidence:</strong> {Math.round(confidence * 100)}%</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
