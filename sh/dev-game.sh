#!/bin/bash

echo '---------------------------------------start---------------------------------------'

cd /letv/gameStatic/

git pull
echo '---------------------------------------pull success---------------------------------------'

npm install
echo '---------------------------------------npm success---------------------------------------'

npm run build
echo '---------------------------------------build success---------------------------------------'

#cp dist/* /letv/www/ -rf
cd /letv/www
#find . -maxdepth 1 ! -name 'lbzcommon' -exec rm -rf {} \;
#排除 /letv/www 目录下的 lbzcommon文件夹 和 MP_verify_w6QYdGUxY8FL0cWm.txt 文件
find . -maxdepth 1 ! -regex '.*\.txt\|.*lbzcommon*' -exec rm -rf {} \;
mv /letv/gameStatic/dist/* ./
cd /letv/gameStatic/

echo '---------------------------------------end---------------------------------------'
