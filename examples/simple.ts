import bigInt = require('big-integer');

import { DHXorEncryptionAlgorithm } from './../src/index';

const generator = bigInt(5);

const alice = new DHXorEncryptionAlgorithm(128, generator);
const bob = new DHXorEncryptionAlgorithm(alice.prime, alice.generator);

const alicePublicKey = alice.generatePublicKey();
const bobPublicKey = bob.generatePublicKey();

alice.computeSharedSecretKey(bobPublicKey);
bob.computeSharedSecretKey(alicePublicKey);

const message = 'Lorem ipsum dolor sit amet.';
const ciphertext = alice.encrypt(message);
const decryptedMessage = bob.decrypt(ciphertext);

console.log(`Origial message: ${message}`);
console.log(`Ciphertext: ${ciphertext}`);
console.log(`Decrypted message: ${decryptedMessage}`);
