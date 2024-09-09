clear;
echo -e "WELCOME TO T3RN AIRDROP BOT !\n
         Choose the network : \n
         1. Arbitrum Sepolia\n
         2. Base Sepolia\n
         3. Op Sepolia\n
         4. Blast Sepolia\n
        ";
read -p "Please select :" answer
if [[ $answer = 1 ]] ; then
  node arb.js;
elif [[ $answer = 2 ]] ; then
  node base.js;
elif [[ $answer = 3 ]] ; then
  node op.js;
elif [[ $answer = 4 ]] ; then
  node blast.js;
else
  echo -e "Nothing to do !\n"
fi
