# t3rn-airdrop-bot
### Codded By : dante4rt
github : https://github.com/dante4rt
### Modded By : Mr9868
https://github.com/mnur9868

https://github.com/mr9868


A bot designed to automate transactions and bridge assets on the t3rn network, making the process seamless and efficient. Now supports **All Chain**.

## Features

- Automates asset bridging and swapping on the t3rn network.
- Supports multiple wallets through a JSON file containing private keys.
- Robust error handling with retry mechanisms to ensure all transactions are completed.
- User-friendly and easy to set up.
- Supports bridging from **All Chain**.

## Requirements

- Node.js (v14 or later)
- NPM (v6 or later)
- Private keys for the wallets you intend to use (stored in `privateKeys.json`).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mnur9868/pure-bot.git
   cd pure-bot
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Create `privateKeys.json`**:
   Create a file named `privateKeys.json` in the root directory with the following format:

   ```json
   [
     "your_private_key_1",
     "your_private_key_2"
   ]
   ```

4. **Run the Bot**:

   - To check the available menu options:

     ```bash
     npm start
     ```
     Or
     ```
     chmod +x start.sh && ./start.sh;
     ```

   - To run the bot for **Arbitrum Sepolia**:

     ```bash
     npm run arbt
     ```
   - To run the bot for **Base Sepolia**:

     ```bash
     npm run bssp
     ```
   - To run the bot for **Base Sepolia**:

     ```bash
     npm run blss
     ```

   - To run the bot for **Optimism Sepolia**:

     ```bash
     npm run opsp
     ```

## Usage

- Use `npm start` to check the menu options available.
- Choose the appropriate command based on the network you want to use.
- The bot will automatically execute the transactions, handling any errors and retrying as needed.

## Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **Solana**: `GLQMG8j23ookY8Af1uLUg4CQzuQYhXcx56rkpZkyiJvP`
- **EVM**: `0x960EDa0D16f4D70df60629117ad6e5F1E13B8F44`
- **BTC**: `bc1p9za9ctgwwvc7amdng8gvrjpwhnhnwaxzj3nfv07szqwrsrudfh6qvvxrj8`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
