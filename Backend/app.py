
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# To keyword-based emotion Detection
def detect_emotion(text):
    text = text.lower()

    if any(word in text for word in ["sad", "down", "depressed", "unhappy"]):
        return "Sad", 0.90
    elif any(word in text for word in ["angry", "mad", "furious", "irritated"]):
        return "Angry", 0.88
    elif any(word in text for word in ["happy", "joy", "glad", "excited"]):
        return "Happy", 0.95
    elif any(word in text for word in ["nervous", "anxious", "worried", "scared"]):
        return "Anxious", 0.85
    else:
        return "Neutral", 0.60



#Testing Route Health Check
@app.route("/", methods = ["GET"])
def home():
    return "Server running",200


@app.route('/emotion', methods=['POST'])
def analyze():
    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({"error": "Missing 'text' field"}), 400
    
    text = data["text"]
    emotion, confidence = detect_emotion(text)

    # Fake  logic
    return jsonify({
        "emotion": emotion,
        "confidence": confidence
    })



if __name__ == '__main__':
    app.run(debug=True)


