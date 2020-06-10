**To run app** on the _another port_, you will need to:
```$xslt
cd app
npm install
npm run start
```
If you cannot start the app, please, follow the next steps:
```
cd src                      #for change to correct directory
rm -rf node_modules         #get rid of all the already installed node-modules in the project
npm cache clean --force     #force the node cache to be cleared
npm i                       #install all the zigbee2mqtt modules again
npm cache verify            #just to check that the cache is correct this time
npm start                   #start zigbee2mqtt
```