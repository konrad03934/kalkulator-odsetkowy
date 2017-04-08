
function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
	var oprocentowanieOpodatkowane = 0;
	//sprawdzam czy jeżeli jest checked to mam odjąć 19%
	if (podatek == true) {
		oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie * 0.19); 
	} else {
		oprocentowanieOpodatkowane = oprocentowanie;
	}
	
	//zmienna kapitał-upewnić sie czy wewnątrz funkcji!!!
	var kapital = wplata * Math.pow(1 + (oprocentowanieOpodatkowane / okresKapitalizacji), iloscLat * okresKapitalizacji );
	
	
	return parseFloat(kapital).toFixed(2);
}



function oblicz() {
	
var wplata = parseInt(document.getElementById('wplata').value);

var iloscLat = parseInt(document.getElementById('ilosc-lat').value);

var okresKapitalizacji = parseInt(document.getElementById('okres-kapitalizacji').value);

var oprocentowanie = parseInt(document.getElementById('oprocentowanie').value) / 100 ;

var podatek = document.getElementById('podatek').value;
	
var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);	

	document.getElementById('wynik').innerHTML = wynik;
	
}