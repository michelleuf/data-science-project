from flask import Flask
from flask_cors import CORS, cross_origin

api = Flask(__name__)
CORS(api, support_credentials=True)

@api.route('/test')
@cross_origin(supports_credentials=True)
def my_profile():
    response_body = {
        "name": "Ovin",
        "about" :"Hello!This is the start of data science project "
    }

    return response_body