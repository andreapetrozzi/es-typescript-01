//01. Definire le variabili indicando il tipo
//02. EventHnndler: click su verifica
// Inizializzazione variabili Giocatore1 e Giocatore2
$(() => {
	$('#verifica').on('click', function () {
		let gamer1: number = Number($('#num1').val());

		//let Giocatore1: number = Number((<HTMLInputElement>document.getElementById('num1')).value);  -> ATTENZIONE
		let gamer2: number = Number($('#num2').val());

		//03. Prendere valori dagli input (e controllare che ci siano entrambi)
		if (!gamer1 || !gamer2) {
			$('#risultato').text('Entrambi i giocatori devono inserire un numero!');
			$('#num1').val('');
			$('#num2').val('');
			return;
		} else {
			$('#risultato').text('');
			confronto(gamer1, gamer2);
		}
	});

	
	// Dichiarazione function confronto passando parametri num1 e num2
	function confronto(num1: number, num2: number) {

		//04. Generare numero casuale
		// Inizializzazione di numero
		let numero: number = Math.floor((Math.random() * (100 - 1)) + 1);

		//05. Confrontare numero casuale con i due valori
		// Inizializzazione di diff1 e diff2
		let diff1: number = Math.abs(numero - num1), diff2 = Math.abs(numero - num2);
		$('#casuale').text('Numero casuale generato: ' + numero);


		//06. Controlli: 
		// Controllo tra numero e num1
		if (numero === num1) {
			$('#risultato').text('Il giocatore 1 ha indovinato!'); //...se 1 è uguale ha vinto
			// controllo tra numero e num2
		} else if (numero === num2) {
			$('#risultato').text('Il giocatore 2 ha indovinato!'); //...altrimenti se 2 è uguale ha vinto		
			// controllo tra diff1 e diff2
		} else if (diff1 < diff2) {
			$('#risultato').text('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!'); // ...altrimenti se 1 è più vicino di 2 si è avvicinato di più
		} else {
			$('#risultato').text('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');  //...altrimenti 2 si è avvicinato di più
		}
	}

	//07. Click su ricomincia: svuota tutti i campi
	$('#nuova').on('click', function() {
		$('#num1').val('');
		$('#num2').val('');
		$('#casuale').text('');
		$('#risultato').text('');
	});
});