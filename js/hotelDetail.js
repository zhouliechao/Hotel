function cha(num){
	for (var i=1;i<=3;i++) {
		if(i==num){
			document.getElementById("d"+num).style.display="block";
			document.getElementById("span"+num).style.backgroundColor="#32B16C";
			document.getElementById("span"+num).style.color="white";
		}else{
			document.getElementById("d"+i).style.display="none";
			document.getElementById("span"+i).style.backgroundColor="white";
			document.getElementById("span"+i).style.color="black";
		}
	}
	
}
