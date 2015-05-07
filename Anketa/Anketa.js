function regExp()
{
	login=document.getElementById('first').value;
	email=document.getElementById('second').value;
	phone1=document.getElementById('third').value;
	phone2=document.getElementById('fourth').value;
	seven=document.getElementById('seven').value;
	bank1=document.getElementById('five').value;
	bank2=document.getElementById('six').value;
	bank3=document.getElementById('nine').value;
	bank4=document.getElementById('eigth').value;
	day=document.getElementById('day').value;
	month=document.getElementById('month').value;
	year=document.getElementById('year').value;
	
	loginpattern=/^[a-z0-9_-]{4,16}$/i;
	emailpattern=/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/
	phone1pattern=/^[0-9]{3}$/;
	phone2pattern=/^[0-9]{5,7}$/;
	bankpattern=/^[0-9]{4}$/;
	daypattern=/^(0[1-9]|[12][0-9]|3[01])$/;
	monthpattern=/^(0[1-9]|1[0-2])$/;
	yearpattern=/^(19)\d\d|(20)[0][0-9]$/;

	logproof=loginpattern.test(login);
	emailproof=emailpattern.test(email);
	phone1proof=phone1pattern.test(phone1);
	phone2proof=phone2pattern.test(phone2);
	bank1proof=bankpattern.test(bank1);
	bank2proof=bankpattern.test(bank2);
	bank3proof=bankpattern.test(bank3);
	bank4proof=bankpattern.test(bank4);
	dayproof=daypattern.test(day);
	monthproof=monthpattern.test(month);
	yearproof=yearpattern.test(year);

	if(logproof==false)
	{
		alert("Неверно введён логин");
	}
	
	if(emailproof==false)
	{
		alert("Неверно введён E-mail");
	}
	
	if(phone1proof==false||phone2proof==false)
	{
		alert("Неверно введён номер телефона");
	}

	if(bank1proof==false||bank2proof==false||bank3proof==false||bank4proof==false)
	{
		alert("Неверно введён номер банковской карты");
	}

	if(dayproof==false||monthproof==false||yearproof==false)
	{
		alert("Неверно введена дата");
	}

	if(logproof==true&&emailproof==true&&phone1proof==true&&phone2proof==true&&bank1proof==true&&bank2proof==true&&bank3proof==true&&bank4proof==true&&dayproof==true&&monthproof==true&&yearproof==true){
		alert("Логин " + login + "\nE-Mail " + email + "\nТелефон" + seven +"("+phone1+")" + phone2 + "\nКарта " + bank1 + " " + bank2 + " " + bank3 + " " + bank4 + "\nДата рождения " + day + "." + month + "." + year);
	}
	

}