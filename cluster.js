var cluster = require('cluster');
var config = require("./config.json")
var amount = config.clusterSize;

if (cluster.isMaster) {

    for (var i = 0; i < amount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', function () {
        cluster.fork();
    });

} else {
    require('./index');
}
