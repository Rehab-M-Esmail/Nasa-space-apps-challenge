from flask import Flask, render_template, request
import requests

def get_aqi_level(aqi):
            if aqi == 1: return "1 (Good)"
            if aqi == 2: return "2 (Fair)"
            if aqi == 3: return "3 (Moderate)"
            if aqi == 4: return "4 (Poor)"
            if aqi == 5: return "5 (Very Poor)"
            return "Unknown"

app = Flask(__name__)
@app.route('/', methods=['GET'])
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    print(latitude, longitude)
    params = {
        'lat': latitude,
        'lon': longitude,
        'appid': '96f1b2bdb2f549c8dbb50006e26339d3'
    }

    response = requests.get('http://api.openweathermap.org/data/2.5/air_pollution', params=params)
    api_data = response.json()
    print(api_data)
    aqi_number = api_data['list'][0]['main']['aqi']
    aqi_level = get_aqi_level(aqi_number)
    print(aqi_level)
    #return (aqi_level)
    return render_template('index.html', aqi_level=aqi_level)


if __name__ == '__main__':
    app.run(port=3000, debug=True)