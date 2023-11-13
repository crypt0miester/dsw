import { Keypair, CompiledInstruction, Message, MessageArgs, PublicKey } from '@solana/web3.js';
import base58 from 'bs58';
import crypto from 'crypto';

function generateMessage(dappName: string): String {
  const message = `DSW REQUEST: Sign to ${dappName}\n\n`;
  return message
}


export async function generatedAppSpecificKeypair(
  publicKey: PublicKey,
  dappName: string,
  signMessage?: (message: Uint8Array) => Promise<Uint8Array>,
): Promise<Keypair | undefined> {
  const message = generateMessage(dappName);

  const compiledInstruction: CompiledInstruction = {
    programIdIndex: 0,
    accounts: [0],
    data: base58.encode(Buffer.from("\n\nDecentralized Application-Specific Wallet"))
  }
  const recentBlockhash = PublicKey.default;
  const compiledMessage: MessageArgs = {
    header: { numRequiredSignatures: 1, numReadonlySignedAccounts: 1, numReadonlyUnsignedAccounts: 0 },
    accountKeys: [publicKey],
    recentBlockhash: recentBlockhash.toBase58(),
    instructions: [compiledInstruction]
  }
  let encodedMessage = new Message(compiledMessage).serialize();
  const messageToSign = new TextEncoder().encode(message + encodedMessage.toString())
  // console.log(messageToSign)

  let signature;
  try {
    if (!signMessage) return
    signature = await signMessage(messageToSign);
  } catch {
    return;
  }
  const hash = crypto.createHmac('sha256', signature).digest();
  const dAppSpecificWallet = Keypair.fromSeed(Uint8Array.from(hash));
  console.log(dAppSpecificWallet.publicKey.toBase58())
  return dAppSpecificWallet
}