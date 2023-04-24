
function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "none") {
      options.style.display = "block";
    } else {
      options.style.display = "none";
    }
}

function buton1(){
  document.getElementById("price").innerHTML="100,-kr";
}
function buton2(){
  document.getElementById("price").innerHTML="200,-kr";
}
function buton3(){
  document.getElementById("price").innerHTML="300,-kr";
}