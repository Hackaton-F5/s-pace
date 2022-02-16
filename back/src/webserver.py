from flask import Flask
from flask_cors import CORS

from src.lib.utils import object_to_json


def create_app(repositories):
    app = Flask(__name__)
    CORS(app)

    @app.route("/", methods=["GET"])
    def hello_world():
        return "...magic!"

    @app.route("/api/space", methods=["GET"])
    def spaces_get():
        all_spaces = repositories["space"].get_spaces()
        return object_to_json(all_spaces)

    @app.route("/api/space/<id>", methods=["GET"])
    def space_get_by_id(id):
        space = repositories["space"].get_by_id(id)
        return object_to_json(space)


    return app
