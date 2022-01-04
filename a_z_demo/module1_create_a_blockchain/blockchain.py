import datetime
import hashlib
import json
from flask import Flask, jsonify

class BlockChain:
    def  __init__(self):
        self.chain = []
        self.creat_blocks(proof = 1, previous_hash = '0')