import capture
import moisture_sense
import temperature_sense
import waterpump
from flask import Flask , render_template, jsonify

import json
import base64


    





#from flask_cors import CORS
import datetime

app = Flask(__name__)

#CORS(app)

@app.route('/',methods=['GET'])
def hello():
    moisture = moisture_sense.getMoistureState()
    humidity , temperature = temperature_sense.get_temp()
    capture.capture_image()
    capture.capture_image()
    
    data = {}
    with open('image.jpg', mode='rb') as file:
        img = file.read()
        
    data['img'] = base64.encodebytes(img).decode('utf-8')    
    image_encoded = json.dumps(data)
    
    
    templateData =jsonify( {
        'moisture' : moisture,
        'humidity' : humidity,
        'temperature' : temperature,
        'days' : 0,
        'data' : data['img']
        })
    templateData.headers.add("Access-Control-Allow-Origin", "*")
    return templateData

if __name__ == '__main__':
    app.run(debug = True, port = 8000, host='0.0.0.0')


