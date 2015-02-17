var linkedin = document.getElementById("linkedin");
var github = document.getElementById("github");
var resume = document.getElementById("resume");
var about = document.getElementById("about");

var imageContainer = document.getElementById("imageContainer");
console.log(imageContainer);

var comein = function(string){
	var image;
	switch (string) {
		case "linkedin":{
			image = "linkedin.png";
			break;
		}
		case "github":{
			image = "github.png";
			break;
		}
		case "resume":{
			image = "linkedin.png";
			break;
		}
		case "about":{
			image = "linkedin.png";
			break;
		}
	}
	
	imageContainer.innerHTML = '';
	imageContainer.innerHTML += '<img src="'+ image +'" />';
}

//linkedin.onmouseover = comein("linkedin");
//github.onmouseover = comein("github");