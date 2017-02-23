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

    //subscribe to an event
    session.subscribe(EVT_ONE, function(data){
        console.log('event triggered: ', data);

        //output event
        var output = document.getElementById('output');
        output.innerHTML = 'Event received: ' + data.toString();
    });

};

//start connection
connection.open();