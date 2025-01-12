import contextlib
from io import StringIO
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/run-python', methods=['POST'])
def run_python():
    code = request.json.get('code', '')
    output = StringIO()
    with contextlib.redirect_stdout(output):
        try:
            exec(code)
            result = output.getvalue()
        except Exception as e:
            result = str(e)

    return jsonify({'output': result})


if __name__ == '__main__':
    app.run(port=3001)
