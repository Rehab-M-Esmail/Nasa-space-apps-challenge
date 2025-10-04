from flask import Flask, jsonify, request
import requests
from flask_cors import CORS

def get_aqi_level(aqi):
            if aqi == 1: return "1 (Good)"
            if aqi == 2: return "2 (Fair)"
            if aqi == 3: return "3 (Moderate)"
            if aqi == 4: return "4 (Poor)"
            if aqi == 5: return "5 (Very Poor)"
            return "Unknown"

app = Flask(__name__)
# Enable CORS for the Flask app to allow requests from your HTML file
CORS(app) 

@app.route('/', methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        latitude = data.get('latitude')
        longitude = data.get('longitude')
        
        if latitude is None or longitude is None:
             return jsonify({"error": "Missing latitude or longitude"}), 400

        print(f"Received coords: {latitude}, {longitude}")
        
        params = {
            'lat': latitude,
            'lon': longitude,
            'appid': '21f4dafe9e22a95082725b8997f7f54c' 
        }

        response = requests.get('http://api.openweathermap.org/data/2.5/air_pollution', params=params)
        response.raise_for_status() # Raises an exception for bad status codes (4xx or 5xx)
        
        api_data = response.json()
        
        aqi_number = api_data['list'][0]['main']['aqi']
        aqi_level = get_aqi_level(aqi_number)
        
        print(f"AQI Level: {aqi_level}")
        
        # *** CORRECT: Return the AQI level as a JSON object ***
        return jsonify({"aqi_level": aqi_level})

    except requests.exceptions.HTTPError as e:
        return jsonify({"error": f"OpenWeatherMap API error: {e}"}), 502
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return jsonify({"error": f"Server processing error: {e}"}), 500

if __name__ == '__main__':
    app.run(port=3000, debug=True)
