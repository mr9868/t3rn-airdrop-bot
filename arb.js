require("colors");
const { Wallet, JsonRpcProvider, ethers, parseUnits } = require("ethers");
const fs = require("fs");

const readlineSync = require("readline-sync");
const moment = require("moment");
const T3RN_ABI = require("./contracts/ABI_arb");
const { displayHeader } = require("./utils/display");
const { transactionData, delay } = require("./utils/helper");
const { getAmount } = require("./utils/api");

const PRIVATE_KEYS = JSON.parse(fs.readFileSync('privateKeys.json', 'utf-8'));
const RPC_URL = T3RN_ABI.at(-1).RPC_ARBT;

const provider = new JsonRpcProvider(RPC_URL);
const CONTRACT_ADDRESS = T3RN_ABI.at(-1).CA_ARBT;

(async () => {
  displayHeader();
  console.log("⏳ Please wait...".yellow);
  console.log("");

  const options = readlineSync.question(
    "Choose the network that you want to use 👇\n1. Arbitrum Sepolia to Base Sepolia\n2. Arbitrum Sepolia to Blast Sepolia\n3. Arbitrum Sepolia to Optimism Sepolia\n4. Exit\n\nEnter 1, 2, 3, or 4: "
  );

  if (options === "4" || !options) {
    console.log("👋 Exiting the bot. See you next time!".cyan);
    console.log("Subscribe: https://t.me/HappyCuanAirdrop.".green);
    process.exit(0);
  }

  const numTx = readlineSync.questionInt(
    "🔄 How many times you want to swap or bridge? "
  );
 
  function getRandomDelay() {
  // Random delay between 2 minutes (120000 ms) and 5 minutes (300000 ms)
  return Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;
}

  const tunda = readlineSync.questionInt(
    "🔄 Set delay for every transaction ? Set 0 for random delay  => "
  );
  if (tunda <= 4 && tunda > 0) {
    console.log("❌ Number of delay must be greater than 5 second!".red);
    process.exit(1);
  }
  
  if (numTx <= 0) {
    console.log("❌ Number of transactions must be greater than 0!".red);
    process.exit(1);
  }

  for (const PRIVATE_KEY of PRIVATE_KEYS) {
    const wallet = new Wallet(PRIVATE_KEY, provider);
    let totalSuccess = 0;

    while (totalSuccess < numTx) {
      try {
        const balance = await provider.getBalance(wallet.address);
        const balanceInEth = ethers.formatUnits(balance, "ether");

        console.log(
          `⚙️ [ ${moment().format(
            "HH:mm:ss"
          )} ] Doing transactions for address ${wallet.address}...`.yellow
        );

        if (balanceInEth < 0.01) {
          console.log(
            `❌ [ ${moment().format(
              "HH:mm:ss"
            )} ] Your balance is too low (💰 ${balanceInEth} ETH), please claim faucet first!`
              .red
          );
          process.exit(0);
        }

        let counter = numTx - totalSuccess;

        while (counter > 0) {
          try {
            const amount = await getAmount(options);
            if (!amount) {
              console.log(
                `❌ Failed to get the amount. Skipping transaction...`.red
              );
              continue;
            }
            //   Random value between 0.0003 ETH and 0.0010 ETH
              // const min = 0.01;
              // const max = 0.05;
              // const randomValue = Math.random() * (max - min) + min;
              // let rValue = randomValue.toFixed(2);
              // return {
                // value: parseUnits(randomValue.toFixed(2), "ether"),
                // amountInEth: randomValue.toFixed(2)
              // };
            const request =
              "0x56591d5962737370000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062a459f164fbb4acf8be5e2fed615dd85baa40700000000000000000000000000000000000000000000000000238610fdcf980e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002386f26fc10000";
            const gasPrice = parseUnits("0.1", "gwei"); // adjustable

            const transaction = {
              data: request,
              to: CONTRACT_ADDRESS,
              gasLimit: 2000000, // adjustable
              gasPrice,
              from: wallet.address,
              value: parseUnits("0.01", "ether"),
            };

            const result = await wallet.sendTransaction(transaction);
            console.log(
              `✅ [ ${moment().format(
                "HH:mm:ss"
              )} ] Transaction successful from Arbitrum Sepolia to ${
                options === "1" ? "Base" : options === "2" ? "Blast" : "OP"
              } Sepolia!`.green
            );
            console.log(
              `🔗 [ ${moment().format(
                "HH:mm:ss"
              )} ] Transaction hash: https://sepolia.arbiscan.io/tx/${
                result.hash
              }`.green
            );
            
            totalSuccess++;
            counter--;

           if (counter > 0) {
             if (tunda <= 0) {
                const randomDelay = getRandomDelay();
                console.log(`⏳ [ ${moment().format('HH:mm:ss')} ] Waiting ${randomDelay / 1000} seconds before next transaction...`.yellow);
                console.log(wallet.address);
                await delay(randomDelay);
            } else {
                let Dtunda =  tunda * 1000;
                await delay(Dtunda);
            }
           }
          } catch (error) {
            console.log(
              `❌ [ ${moment().format(
                "HH:mm:ss"
              )} ] Error during transaction: ${error}`.red
            );
          }
        }
      } catch (error) {
        console.log(
          `❌ [ ${moment().format(
            "HH:mm:ss"
          )} ] Error in processing transactions: ${error}`.red
        );
      }
    }
  }

  console.log("");
  console.log(
    `🎉 [ ${moment().format(
      "HH:mm:ss"
    )} ] All ${numTx} transactions are complete!`.green
  );
  console.log(
    `📢 [ ${moment().format(
      "HH:mm:ss"
    )} ] Subscribe: https://t.me/HappyCuanAirdrop`.green
  );
})();
