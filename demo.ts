import { Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, Keypair, sendAndConfirmRawTransaction } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];

const toPubkey = new PublicKey(suppliedPublicKey);

const senderKeypair = new PublicKey("8psFPH3hUqBjVT74otEgT54527n8D2MJiN7SCPGrkxPe");

const connection = new Connection(clusterApiUrl("devnet"));

console.log(`✅ Loaded our own keypair, the destination public key, and connected to Solana`);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sentSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair,
    toPubkey,
    lamports: LAMPORTS_TO_SEND
})

transaction.add(sentSolInstruction)

const signature = await sendAndConfirmRawTransaction(connection, transaction, [
    senderKeypair,
])

console.log(`💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `);
console.log(`Transaction signature is ${signature}!`);