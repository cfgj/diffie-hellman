import { DiffieHellmanEncryptor } from './diffieHellmanEncryptor';

/**
 * Xor encryption algorithm with key established with DH key exchange.
 */
export class DHXorEncryptionAlgorithm extends DiffieHellmanEncryptor {
    public encrypt(message: string): string {
        let result = '';
        let key = this._sharedSecretKey.toString(16);

        while (key.length < message.length) key += key;

        for (let i = 0; i < message.length; ++i) {
            const mc = message.charCodeAt(i);
            const kc = key.charCodeAt(i);

            const xorValue = mc ^ kc;
            let hex = xorValue.toString(16);
            hex = hex.length < 2 ? '0' + hex : hex;

            result += hex;
        }

        return result;
    }

    public decrypt(message: string): string {
        let result = '';
        let key = this._sharedSecretKey.toString(16);

        while (key.length < message.length/2) key += key;

        for (let i = 0; i < message.length; i += 2) {
            const hexValue = message.substring(i, i + 2);
            let val1 = parseInt(hexValue, 16);
            let val2 = key.charCodeAt(i / 2);

            let xorValue = val1 ^ val2;

            result += String.fromCharCode(xorValue);
        }

        return result;
    }
}
