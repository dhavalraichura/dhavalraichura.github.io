let visits;
if(!localStorage.getItem("visits")){localStorage.setItem("visits", 1)};
visits = parseInt(localStorage.getItem("visits"));
let incrementedVisits = visits+1;
localStorage.setItem("visits",incrementedVisits);
document.onreadystatechange = function(){
    document.getElementById("count").innerHTML = incrementedVisits.toString();
    console.log("The site has been visited "+incrementedVisits.toString()+" times");

}
function myFunction(){
    var box =  document.getElementById("box");
    var x = document.getElementById("linklist");
    if (screen.width <= 480){    
        if (x.style.display === "flex"){
            x.style.display = "none";
            box.style.marginLeft = "80vw";
        } else {
            x.style.display = "flex";
            box.style.marginLeft = "8.75vw";
            x.style.marginLeft = "40vw";
            x.style.marginTop = "20vh";
        }
    }
}
