
function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

function etchasketch(){
let container = document.getElementById("container");
let colorful = document.getElementById("colorful");
let toblack = document.getElementById("toblack");


container.innerHTML = "";
//this gets rid of previous divs

let boxes = prompt("Give me a number of boxes!");

for(i = 0; i < (boxes*boxes); i++){
	let div = document.createElement('div');
	container.appendChild(div);
	div.style.backgroundColor = "rgb(211, 211, 211)";
	div.setAttribute("class", "grid-item"); 

}
container.style.gridTemplateColumns = "repeat(" + boxes + ", auto)";

document.body.addEventListener("mouseover", function(e){
    if (event.target.className == "grid-item" && colorful.checked){
    	event.target.style.backgroundColor = random_rgb();
    } else if (event.target.className == "grid-item" && toblack.checked){
        let oldColor = event.target.style.backgroundColor;
        oldColor = oldColor.slice(4, oldColor.length-1).split(", ");        
        for(i=0; i<3; i++){
            if(oldColor[i]>=25){
             oldColor[i] -=25;
            } else {
                oldColor[i] = 0;
                }
        }
        let newColor =  "rgb(" + oldColor[0] + ", " + oldColor[1] + ", " + oldColor[2] + ")" ;
        event.target.style.backgroundColor = newColor;
    }
});

}