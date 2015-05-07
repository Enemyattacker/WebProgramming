function chck(){

	number=parseInt(document.getElementById('first').value);

	if((document.getElementById('select').options.selectedIndex)==1){
		var num_pattern=/[^01]/;
		var proof=num_pattern.test(number);
	}

	if((document.getElementById('select').options.selectedIndex)==2){
		var num_pattern=/[^0-7]/;
		var proof=num_pattern.test(number);
	}

	if((document.getElementById('select').options.selectedIndex)==3){
		var num_pattern=/[^0-9]/;
		var proof=num_pattern.test(number);
	}

	if((document.getElementById('select').options.selectedIndex)==4){
		var num_pattern=/[^0-9A-Fa-f]/;
		var proof=num_pattern.test(number);
	}

	if(proof==true){

			alert("Число введено неправильно");
			document.getElementById('second').style.visibility="hidden"; 
			document.getElementById('third').style.visibility="hidden"; 
			document.getElementById('fourth').style.visibility="hidden"; 	
	}
	
	else{

		document.getElementById('second').style.visibility="visible"; 
		document.getElementById('third').style.visibility="visible"; 
		document.getElementById('fourth').style.visibility="visible"; 

		if((document.getElementById('select').options.selectedIndex)==1){

			number8=parseInt(number, 2).toString(8);
			number10=parseInt(number, 2).toString(10);
			number16=parseInt(number, 2).toString(16);
			document.getElementById('second').value=number8+ " в восьмеричной с/с";
			document.getElementById('third').value=number10+ " в десятичной с/с";
			document.getElementById('fourth').value=number16+ " в шестнадцатиричной с/с";
		}

		if((document.getElementById('select').options.selectedIndex)==2){
			number2=parseInt(number, 8).toString(2);
			number10=parseInt(number, 8).toString(10);
			number16=parseInt(number, 8).toString(16);
			document.getElementById('second').value=number2+ " в двоичной с/с";
			document.getElementById('third').value=number10+ " в десятичной с/с";
			document.getElementById('fourth').value=number16+ " в шестнадцатиричной с/с";
		}

		if((document.getElementById('select').options.selectedIndex)==3){
			number2=parseInt(number, 10).toString(2);
			number8=parseInt(number, 10).toString(8);
			number16=parseInt(number, 10).toString(16);
			document.getElementById('second').value=number2+ " в двоичной с/с";
			document.getElementById('third').value=number8+ " в восьмеричной с/с";
			document.getElementById('fourth').value=number16+ " в шестнадцатиричной с/с";
		}

		if((document.getElementById('select').options.selectedIndex)==4){
			number2=parseInt(number, 16).toString(2);
			number8=parseInt(number, 16).toString(8);
			number10=parseInt(number, 16).toString(10);
			document.getElementById('second').value=number2+ " в двоичной с/с";
			document.getElementById('third').value=number8+ " в восьмеричной с/с";
			document.getElementById('fourth').value=number10+ " в десятичной с/с";
		}
	}

}