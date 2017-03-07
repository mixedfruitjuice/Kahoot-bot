# Kahoot-bot
Bot that joins the kahoot game with multiple names and starts awnsering random questions

Installation Guide:

1. Make sure that you have nodejs v6 or higher installed on your computer. If you don't you can download it from http://nodejs.org

2. Clone the repository and open your terminal or CMD

3. navigate to the directory where the Kahoot bot is cloned and type ```npm install```

Your bot is now ready to use!

If you want the bot to join a game you have to do the following:

1. Open the index.js file and change the ```var game_pin = {your_game_pin}``` variable to the game pin you are using

2. Open the cluster.js file and change the ```var amount = {amount of players to join}``` variable to the amount of players you want to join in the kahoot game

3. Open your cmd and navigate to the kahoot directory and type ```node cluster.js```

4. Wait a moment and the bots will join the game

Have fun!
