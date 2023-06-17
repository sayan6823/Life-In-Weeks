function lifeInWeeks(age) {
        
   
    var days;
    var weeks;
    var months;
    
    days= (90-age)*365;
    weeks=(90-age)*52;
    months=(90-age)*12;
    
   
    var str= "You have "+days +" days, "+weeks+" weeks, and "+months+" months left.";
    return str;
	
}


var age=prompt("enter your age");
alert(lifeInWeeks(age));
