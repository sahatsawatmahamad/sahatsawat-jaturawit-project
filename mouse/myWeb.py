from flask import Flask
import preprj2

app = Flask(__name__)


@app.route('/')
def Home():
    return preprj2


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8000)