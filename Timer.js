function time() {	
	day=document.getElementById('day').value;
	month=document.getElementById('month').value;
	year=document.getElementById('year').value;

	daypattern=/^(0[1-9]|[12][0-9]|3[01])$/;
	monthpattern=/^(0[1-9]|1[0-2])$/;
	yearpattern=/^\d\d\d\d/;

	dayVerify=daypattern.test(day);
	monthVerify=monthpattern.test(month);
	yearVerify=yearpattern.test(year);


	if(dayVerify==false||monthVerify==false||yearVerify==false)
	{
		alert("Неверно введена дата");
		exit(1);
	}
	
	endDate= new Date(year, month-1, day);
	startDate = new Date();
	dateDifference=endDate-startDate;
	
	if(dateDifference==0){
		alert("Введённая дата наступила!!!");
		exit(1);
	}

	if(dateDifference<0){
		alert("Дата отсчёта не может быть раньше сегодняшней даты");
		exit(1);
	}
	
    daysNumber = Math.floor(dateDifference/1000);
    secNumber=daysNumber%60;
	daysNumber=Math.floor(daysNumber/60); 
    minsNumber=daysNumber%60; 
	daysNumber=Math.floor(daysNumber/60); 
    hoursNumber=daysNumber%24;
	daysNumber=Math.floor(daysNumber/24);
	
	if(hoursNumber<10){
		hoursNumber='0' + hoursNumber;
	}
	
	if(minsNumber<10){
		min='0' + minsNumber;
	}
	
	if(secNumber<10){
		secNumber='0'+secNumber;
	}
	
	document.getElementById('days').innerHTML= "До введённой даты осталось " + daysNumber+ " дней \n"; 
	document.getElementById('hours').innerHTML=hoursNumber+ ":";
	document.getElementById('mins').innerHTML=minsNumber+ ":";
	document.getElementById('secs').innerHTML=secNumber;
	setTimeout("time()",1000);
}