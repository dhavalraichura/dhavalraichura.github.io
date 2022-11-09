let visits;
if(!localStorage.getItem("visits")){localStorage.setItem("visits", 1)};
visits = parseInt(localStorage.getItem("visits"));
let incrementedVisits = visits+1;
localStorage.setItem("visits",incrementedVisits);
document.onreadystatechange = function(){
    document.getElementById("count").innerHTML = incrementedVisits.toString();
    console.log("The site has been visited "+incrementedVisits.toString()+" times");
}