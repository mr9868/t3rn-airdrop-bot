clear;
echo -e    '========================================\n';
  echo -e '=      🚀 T3rn Auto Bridge Bot 🚀      =\n';
  echo -e '=     Created by HappyCuanAirdrop      =\n';
  echo -e '=           Modded by Mr9868            =\n';
  echo -e '=    https://t.me/HappyCuanAirdrop     =\n';
  echo -e '========================================\n';
echo -e "WELCOME TO T3RN AIRDROP BOT !\n
         Choose the network : \n
         1. Arbitrum Sepolia\n
         2. Base Sepolia\n
         3. Blast Sepolia\n
         4. Optimism Sepolia\n
         
        ";
read -p "Please select :" answer
if [[ $answer == 1 ]] ; then
  node arbt.js
elif [[ $answer == 2 ]] ; then
  node bssp.js
elif [[ $answer == 3 ]] ; then
  node blss.js
elif [[ $answer == 4 ]] ; then
  node opsp.js
else
  echo -e "Nothing to do !\n"
fi
