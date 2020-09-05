import os.path
from flask import Flask, request, send_from_directory, render_template, send_file, flash, redirect, url_for
from flask_cors import CORS
import csv
import json
import sqlite3
from src.connection import insert_feedback, __configure_database
import pandas as pd
import datetime as dt
import time
import re
import os 
dir_path = os.path.dirname(os.path.realpath(__file__))

file_path = f'{dir_path}/static/filename'
local_path = 'C:/Users/212751184/OneDrive/technion/semester8/interactive/final_project/images/'

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_folder="static")
CORS(app)
# __configure_database()
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


ID = "shir"
MODEL = "didn't choose manually or model yet"

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<path:path>')
def send_image(path):
    #todo: change - first is local
    return send_file(local_path + path)
    # return send_file('/data/shared-storage/ultranet_ds/' + path)

@app.route('/folder/<path:path>')
def get_folder(path):
    images = []
    for folder in os.listdir(local_path + path):
        if not folder.endswith("_t.jpg") and folder.endswith(".jpg"):
            image_url = '/{}/{}'.format(path, folder)
            # image_url = image_url.replace('S:/ultranet_ds/', '')
            images.append({"image": image_url})

    return {"images":images}


@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('static', path)


@app.route("/feedback", methods=["POST","GET"])
def insert_new_feedback():
    if request.is_json:
        content = request.get_json()
        content['time'] = dt.datetime.now()
        content['model'] = MODEL
        content['image'] = list(content.keys())[0]
        new_row = list(content.values())
        with open('corona_results/{}.csv'.format(ID), 'a+') as file:
            csv_writer = csv.writer(file)
            csv_writer.writerow(new_row)

        # if 'AI' in content.values():
        #     flash('AIAIA')
        #     return render_template('get_available_predictions', run_prediction=0, id='Shir')
            # df.to_csv('C:/Users/212751184/Shir/shir{}.csv'.format(timestr))
        return 'continue'
        # return insert_feedback(content)
    else:
        print("oops")


@app.route("/complete", methods=["POST","GET"])
def complete():
    if request.is_json:
        content = request.get_json()
        timestr = time.strftime("%Y%m%d-%H%M%S")
        content['time'] = timestr
        df = pd.DataFrame.from_dict(content, orient='index')
        sso = content['SSO']
        path = '{}/corona_results/{}-{}.csv'.format(dir_path,sso,timestr)
        df.to_csv(path)
        return 'OK'
    else:
        print("oops")


@app.route("/predictions",methods=["POST","GET"])
def get_available_predictions():
    url_str = re.split('=|&',request.get_json())
    id = url_str[3]
    model = url_str[5]

    global MODEL
    MODEL = model

    global ID
    ID = id
    chunk_num= url_str[1]
    # chunk_num = request.get_json().replace('?run_prediction=','')
    # chunk_num = request.args.get('run_prediction')
    f = open('{}/static/predictions/{}.csv'.format(dir_path,chunk_num), 'r')
    reader = csv.DictReader(f)
    # Parse the CSV into JSON
    out = json.dumps([row for row in reader])
    return out


if __name__ == '__main__':  # pragma: no cover
    #app.run(port=80)
    app.run(port=8080,debug=True,host='0.0.0.0')
	# app.run(host='0.0.0.0', debug=True, threaded=True, port=7000)

