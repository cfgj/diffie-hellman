/**
 * Interface represents encryption algorithm.
 */
export interface IEncryptor {
    /**
     * Encrypts message.
     */
    encrypt(message: string): string;

    /**
     * Decrypts message.
     */
    decrypt(message: string): string;
}
