import pandas as pd 
import numpy as np
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():

  df =pd.read_csv('data/DailyDelhiClimateTrain.csv')

  dic = []
  for idx, row in df.iterrows():
    dic.append({'date': row['date'], 
                'meantemp': row['meantemp'], 
                'humidity': row['humidity'],
                'wind_speed': row['wind_speed'],
                'meanpressure': row['meanpressure']})
    

  return jsonify(dic)

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')