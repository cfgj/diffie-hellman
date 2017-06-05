import bigInt = require('big-integer');

/**
 * Interface represents method in cryptography by which cryptographic keys are exchanged
 * between two parties, allowing use of a cryptographic algorithm.
 */
export interface IExchangeKey {
    /**
     * Generates public key.
     * @return {bigInt.BigInteger} Public key.
     */
    generatePublicKey(): bigInt.BigInteger;

    /**
     * Computes shared secret key using key passed to method.
     * @param {bigInt.BigInteger} otherPublicKey Other public key.
     */
    computeSharedSecretKey(otherPublicKey: bigInt.BigInteger): void;
}
