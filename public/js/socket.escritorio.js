// Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

if (!searchParams.has('escritorio')) {
	window.location = 'index.html';
	throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {
	socket.emit('atenderTicket', { escritorio }, function (resp) {
		if (resp === 'No hay tickets') {
            label.text(resp);
			alert(resp);
			return;
		}
		label.text(resp.numero);
	});
});

socket.on('connect', function () {
	console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
	console.log('Se ha desconectado del servidor');
});
