
	var text = document.getElementById("text");

function color() {
 	  document.body.style.background = text.value; 
}

text.addEventListener("input", color);

