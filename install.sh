clear;
apt update -y && apt upgrade -y && apt install nodejs && apt install npm && npm install;
chmod +x start.sh;
rm -rf install.sh
./start.sh;

