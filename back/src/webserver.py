from flask import Flask, request
from flask_cors import CORS

from src.lib.utils import object_to_json
from src.domain.spaces import Space


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

    @app.route("/api/space", methods=["POST"])
    def spaces_post():
        body = request.json
        space = Space(**body)
        repositories["space"].save(space)

        return ''


    return app
