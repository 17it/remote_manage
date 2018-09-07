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

# todo 备份logs

sudo pm2 list
sudo pomelo list
echo '---------------------------------------reloaded status end---------------------------------------'
