const colors = [ 'rgba(133,122,200)', '#f15025' , 'pink' , 'yellow' , 'aqua' , 'whitesmoke' ,'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'teal', 'brown', 'black', 'white',
'lime', 'olive', 'navy', 'maroon', 'coral', 'turquoise', 'indigo', 'magenta', 'sienna', 'gold',
'silver', 'gray', 'sky blue', 'lavender', 'mint green', 'rose', 'maize', 'apricot', 'sienna',
'ochre', 'tan', 'salmon', 'plum', 'fuchsia', 'teal', 'olive', 'ivory', 'amethyst', 'crimson',
'chocolate', 'dandelion', 'honeydew', 'sky blue', 'chartreuse', 'ecru', 'midnight blue',
'firebrick', 'coral', 'turquoise', 'indigo', 'magenta', 'sienna'  ];


const btn = document.querySelector("#btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    
const randomNumber = getRandomNumber() ;
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
