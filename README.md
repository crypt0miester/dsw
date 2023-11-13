# Decentralized Application-Specific Wallet RFC

The concept of burner wallets, while innovative, falls short in terms of consistent usability across different devices and platforms. To address this in the growing Solana ecosystem, this proposal is an introduction of Decentralized Application-Specific Wallets (DSWs).

DSWs are tailored to both the decentralized application (dApp) and the user's public key (Pubkey). This means that a change in the Pubkey will result in a corresponding change in the DSW.

**Important Caution**: USERS MUST EXERCISE DUE DILIGENCE AND UNDERSTAND WHAT THEY ARE CONSENTING TO, GIVEN THE UNIQUE MANNER IN WHICH DSWS ARE GENERATED.

## Technical Implementation
- Users signs a unique message combined with a transaction specific to their PublicKey.
- A keypair is generated from the resulting signature, which is distinct for each user.
- This allows users to fund/deposit their DSW, while the dApp maintains a semi-control over the keys.

It is recommended that only open-source dApps implement this feature.

## Advantages:
- Seamless interaction: dApps can execute actions without repeated wallet pop-ups, improving user experience.
- Cross-platform functionality: The same DSW can operate on various platforms, including web browsers, mobile devices, gaming consoles, and IoT devices.
- Burner wallet characteristics: Users can choose how much to deposit into their DSW, enhancing control and security.
- Efficient transaction handling: dApps can manage high-volume transactions without user intervention for each action.

## Risks:
- Potential for misuse: The universal nature of DSWs might allow other dApps to replicate the signature message.
- User vigilance required: When engaging with a DSW request, users must carefully verify the dApp’s name and the message's authenticity.

This proposal aims to streamline user interactions with dApps on the Solana network, providing a balance between convenience and security.