import os
from flask import Flask

from src.config import log
from src.routes import setup_routes


def create_app():
    """Create and configure the Flask application"""
    app = Flask(__name__, template_folder="templates", static_folder="static")
    setup_routes(app)
    log.info("Flask app created")
    return app


app = create_app()

if __name__ == "__main__":
    debug_mode = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    app.run(debug=debug_mode, host="0.0.0.0", port=5000)
