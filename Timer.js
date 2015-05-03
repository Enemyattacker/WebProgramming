function time() {	

	day=document.getElementById('day').value;
	month=document.getElementById('month').value;
	year=document.getElementById('year').value;

	daypattern=/^(0[1-9]|[12][0-9]|3[01])$/;
	monthpattern=/^(0[1-9]|1[0-2])$/;
	yearpattern=/^\d\d\d\d/;

	dayproof=daypattern.test(day);
	monthproof=monthpattern.test(month);
	yearproof=yearpattern.test(year);


	if(dayproof==false||monthproof==false||yearproof==false)
	{
		alert("Неверно введена дата");
		exit(1);
	}
	
	timeend= new Date(year, month-1, day);
	
    	today = new Date();
	
	if((timeend-today)==0){
		alert("Введённая дата наступила!!!");
		exit(1);
	}

	if((timeend-today)<0){
		alert("Дата отсчёта не может быть раньше сегодняшней даты");
		exit(1);
	}
	
    	today = Math.floor((timeend-today)/1000);
    	sec=today%60;
	today=Math.floor(today/60); 
    	min=today%60; 
	today=Math.floor(today/60); 
    	hour=today%24;
	today=Math.floor(today/24);
	
    	document.getElementById('days').innerHTML= "До введённой даты осталось " + today+ " дней \n"; 
	if(hour<10){
	hour='0' + hour;
	}
	document.getElementById('hours').innerHTML=hour+ ":";
	if(min<10){
	min='0' + min;
	}
	if(sec<10){
	sec='0'+sec;
	}
	document.getElementById('mins').innerHTML=min+ ":";
	document.getElementById('secs').innerHTML=sec;
	setTimeout("time()",1000);
}