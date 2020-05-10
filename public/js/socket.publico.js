var socket = io();
var ticket = '#lblTicket';
var escritorio = '#lblEscritorio';

socket.on('estadoActual', function (data) {
	actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function (data) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
	actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4) {
	for (var i = 0; i < 4; i++) {
		$(ticket + (i + 1)).text('Ticket ' + ultimos4[i].numero);
		$(escritorio + (i + 1)).text('Escritorio ' + ultimos4[i].escritorio);
	}
}
