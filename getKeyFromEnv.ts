import * as dotenv from 'dotenv';
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

dotenv.config;

const keypair = getKeypairFromEnvironment("SECRET_KEY")

console.log(keypair);
