const names=document.querySelector(".info-name");
const image=document.querySelector(".info-image");
const imagerow=document.querySelector(".info");
const fetchPokeData = () => {
    fetch('https://hp-api.onrender.com/api/characters/students')
    .then(res => res.json())
    .then(data => {

       for(var i=0;i<6;i++)
       {   
           names.textContent=data[i].name;
           image.src=data[i].image;
       }
       
    })}

    fetchPokeData();