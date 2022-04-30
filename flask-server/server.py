from flask import Flask, jsonify

import requests
import json
import base64

app = Flask(__name__)

@app.route("/dashboard")
def dashboard():
    # Requesting raspberry pi device for telemetry data and the image
    response = (requests.get('https://c0d7-2402-4000-b199-9f4b-704d-57a9-c80b-879a.in.ngrok.io/dashboard'))

    iot_json = response.json()
    final_json = jsonify({"days" : iot_json["days"], "humidity" : iot_json["humidity"], "moisture": iot_json["moisture"],"stage": iot_json["stage"], "temperature": iot_json["temperature"] })
    
    final_json.headers.add("Access-Control-Allow-Origin","*")
    return final_json
    
if __name__ == "__main__":
    app.run(debug=True)
