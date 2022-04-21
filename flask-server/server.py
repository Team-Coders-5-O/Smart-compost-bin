from flask import Flask

app = Flask(__name__)

moisture = 12
stage = 50
temp = 35
days = 5


@app.route("/dashboard")
def dashboard():
    return {
        'moisture': moisture,
        'stage': stage,
        'temp': temp,
        'days': days
    }


if __name__ == "__main__":
    app.run(debug=True)
