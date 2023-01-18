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
            box.style.marginLeft = "12.75vw";
            x.style.marginLeft = "36vw";
            x.style.marginTop = "12vh";
            x.style.marginBottom = "3vh";
            x.style.textAlign = "center";
        }
    }

}
if (screen.width <= 500){
    function homeScroll(){
        myFunction();
        scrollTo(0,0);
    }
    function certificateScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("certificatesCard");
        scrollTo(0,000);
        
    }
    function projectsScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("projectCard");
        scrollTo(0,750);
        
    }
    function contactScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("contactCard");
        scrollTo(0,2000);
    }
}
else if (screen.width <= 1366){
    function homeScroll(){
        myFunction();
        scrollTo(0,0);
    }
    function certificateScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("certificatesCard");
        scrollTo(0,750);
        
    }
    function projectsScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("projectCard");
        scrollTo(0,2700);
        
    }
    function contactScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("contactCard");
        scrollTo(0,5000);
    }
}
else {
    function homeScroll(){
        myFunction();
        scrollTo(0,0);
    }
    function certificateScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("certificatesCard");
        scrollTo(0,1050);
        
    }
    function projectsScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("projectCard");
        scrollTo(0,4700);
        
    }
    function contactScroll(){
        myFunction();
        var elmntToView = document.getElementsByClassName("contactCard");
        scrollTo(0,9000);
    }
}