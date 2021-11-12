var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input = createInput();
  input.position(5,50);

  heading = createElement('h4', 'Insira qualquer letra do Alfabeto');
  heading.position(5,1);

 textAlign(CENTER);
 textSize(50);
 
}

function draw() {
var value = input.value();

switch (value){
   case 'a':
   console.log("Volgal");
   break;

   case 'e':
   console.log("Volgal");
   break;

   case 'i':
   console.log("Volgal");
   break;

   case 'o':
   console.log("Volgal");
   break;

   case 'u':
   console.log("Volgal");
   break;

   default:
     console.log("Por favor, insira qualquer caractere");

}
  
}

