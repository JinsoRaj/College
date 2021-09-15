from flask import Flask, request, jsonify
from pyDes import *
import base64

app = Flask(__name__)

def decrypt_url(url):
    des_cipher = des(b"38346591", ECB, b"\0\0\0\0\0\0\0\0",pad=None, padmode=PAD_PKCS5)
    enc_url = base64.b64decode(url.strip())
    dec_url = des_cipher.decrypt(enc_url, padmode=PAD_PKCS5).decode('utf-8')
    dec_url = dec_url.replace("_96.mp4", "_320.mp4")
    return dec_url

#decrypt_url('ID2ieOjCrwfgWvL5sXl4B1ImC5QfbsDySwCh0IcMdOUtBXzG+CXNxjTyc5egjHm6XtP9cFKGTqjnZ8gpoj8YvBw7tS9a8Gtq')

@app.route('/params')
def params():
    encurl = request.args['enc'].replace(" ", "+")
    print(encurl)
    return jsonify(decurl=decrypt_url(encurl))
