#!/bin/bash

echo '---------------------------------------start---------------------------------------'

sudo pm2 list
sudo pm2 reload pomelo_mq
echo '---------------------------------------reload pm2 end---------------------------------------'

cd /letv/gameServer
pomelo list
pomelo stop
pomelo start --daemon
echo '---------------------------------------reload pomelo end---------------------------------------'

ls_date=`date +%Y%m%d`
zip -R logs-${ls_date}.zip ./logs/*
echo '---------------------------------------backup logs end---------------------------------------'

sudo pm2 list
sudo pomelo list
echo '---------------------------------------reloaded status end---------------------------------------'
