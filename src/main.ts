import { PublicKey } from '@solana/web3.js';

import { generatedAppSpecificKeypair } from './utils';


async function main() {
  const keyPair = await generatedAppSpecificKeypair(PublicKey.default, "DSW Test")
}
// main();