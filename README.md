# Monkeytalks

Monkeytalks is an on-chain messaging/chat system that uses BANANO. Messages are encoded on the BANANO Block Lettuce™, and decoded and displayed by the application.

In addition, it also has a basic faucet included.

# Development

MonkeyTalks consists of two parts:

1) A Vue.JS front end, using TypeScript and webpack as a bundler

2) A Python backend, written with Flask

Setting up the development environment is simple on UNIX-based systems (Mac, Linux, WSL):
```
virtualenv -p python3.6 venv
source venv/bin/activate
pip install -r requirements.txt
npm install
./init_local.sh
```

To start a development server, run `npm start`

# Deploying to production

It is recommended to use any of the methods described in the flask-socketio documentation. (gunicorn, uwsgi, etc.)

https://flask-socketio.readthedocs.io/en/latest/
