var when = require('when');
var autobahn = require('autobahn');

//display autobahn js version
console.log('Autobahn version: ', autobahn.version);

//create connection
var connection = new autobahn.Connection({
    url: 'ws://127.0.0.1:9000/ws',
    realm: 'realm1'
});

connection.onopen = function(session){

    var EVT_ONE = 'ch.intersim.event.one';

    //show opening of connection
    console.log('connection initialized; event: ', EVT_ONE);

    //trigger an event
    session.publish(EVT_ONE, ['Hello World!']);

};

//start connection
connection.open();