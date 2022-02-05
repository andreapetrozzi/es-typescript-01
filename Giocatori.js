// inizializzazione variabili gamer1 e gamer2
$(function () {
    $('#verifica').on('click', function () {
        var gamer1 = Number($('#num1').val());
        //let gamer1: number = Number((<HTMLInputElement>document.getElementById('num1')).value);
        var gamer2 = Number($('#num2').val());
        if (!gamer1 || !gamer2) {
            $('#risultato').text('Entrambi i giocatori devono inserire un numero!');
            $('#num1').val('');
            $('#num2').val('');
            return;
        }
        else {
            $('#risultato').text('');
            confronto(gamer1, gamer2);
        }
    });
    // dichiarazione function confronto passando parametri num1 e num2
    function confronto(num1, num2) {
        // inizializzazione di numero
        var numero = Math.floor((Math.random() * (100 - 1)) + 1);
        // inizializzazione di diff1 e diff2
        var diff1 = Math.abs(numero - num1), diff2 = Math.abs(numero - num2);
        $('#casuale').text('Numero casuale generato: ' + numero);
        // controllo tra numero e num1
        if (numero === num1) {
            $('#risultato').text('Il giocatore 1 ha indovinato!');
            // controllo tra numero e num2
        }
        else if (numero === num2) {
            $('#risultato').text('Il giocatore 2 ha indovinato!');
            // controllo tra diff1 e diff2
        }
        else if (diff1 < diff2) {
            $('#risultato').text('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!');
        }
        else {
            $('#risultato').text('Nessuno dei due ha azzeccato il numero casuale,ma il giocatore 2 si è avvicinato di più!');
        }
    }
    $('#nuova').on('click', function () {
        $('#num1').val('');
        $('#num2').val('');
        $('#casuale').text('');
        $('#risultato').text('');
    });
});
