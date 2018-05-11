	function main(){
	setInterval(getTime, 500);
	setInterval(startS, 1000);
	}
	
	function getTime()
	{
	var today = new Date();
	var curr_hour = today.getHours();
	var curr_minute = today.getMinutes();
	var curr_second = today.getSeconds();

	var dd = today.getDate();
	var mm = today.getMonth() +1;
	var y = today.getFullYear();

	var someFormattedDate = curr_hour + ':' + curr_minute + ':' + curr_second + '/' + dd + '/' + mm + '/'+ y;
	document.getElementById("clock").innerHTML = someFormattedDate;
	}