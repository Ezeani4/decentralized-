from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows frontend (like your HTML/JS) to talk to Flask

@app.route('/')
def index():
    return render_template('index.html')  # You can change this if using static files

@app.route('/match', methods=['POST'])
def match():
    data = request.json

    name = data.get('name')
    sleep = data.get('sleep')
    environment = data.get('environment')
    tidy = data.get('tidy')
    snore = data.get('snore')
    music = data.get('music')

    # Dummy logic — you’ll improve this later
    if environment == "Quiet" and sleep == "Early Riser":
        match_name = "Michael"
    elif tidy == "Very Tidy" and snore == "No":
        match_name = "David"
    else:
        match_name = "Chris"

    response = {
        "status": "success",
        "yourName": name,
        "matchName": match_name,
        "room": "Block B, Room 12"
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
