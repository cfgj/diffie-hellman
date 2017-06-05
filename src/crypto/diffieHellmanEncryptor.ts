import { DiffieHellman } from './diffieHellman';
import { IEncryptor } from './encryptor';

/**
 * Represents encryption algorithm with DH key exchange.
 */
export abstract class DiffieHellmanEncryptor extends DiffieHellman implements IEncryptor {
    public abstract encrypt(message: string): string;

    public abstract decrypt(message: string): string;
}
