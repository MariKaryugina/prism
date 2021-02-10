import spacy
from flask import Flask, request, jsonify
app = Flask(__name__)
nlp = spacy.load("en_core_web_lg")

@app.route("/", methods=['POST'])
def hello():
    req = request.get_json()

    threshold = req['threshold']
    req_skills = nlp(req['required_skills'])
    candidates = req['candidates']

    # approved by threshold
    approved_candidates = []

    for candidate in candidates:
        candidate_skills = nlp(candidate['skills'])
        similarity = req_skills.similarity(candidate_skills)
        if similarity >= threshold:
            approved_candidates.append(candidate)

    return jsonify(approved_candidates), 201

if __name__ == "__main__":
    app.run()
