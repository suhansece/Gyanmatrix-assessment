
const species=document.querySelector(".species");
const gender=document.querySelector(".gender");
const house=document.querySelector(".house");
const dob=document.querySelector(".dob");
const aneceirys=document.querySelector(".aneceiry");
const eyecolor=document.querySelector(".eye-color");
const haircolor=document.querySelector(".hair-color");
const wands=document.querySelector(".wand");
const patronus=document.querySelector(".patronus");
const detailimage=document.querySelector("#detailimage");
const houseImage=document.querySelector("#typesimage");
const namesh1=document.querySelector("h2");

const fetchstaffstudents = () => {
    fetch('https://hp-api.onrender.com/api/characters/staff')
    .then(res => res.json())
    .then(data => {
        const datas=data[5]
        //house image
        const houseimagesrc="images/house image/"+datas.house+".png";
        houseImage.src=houseimagesrc;

        // name 
        namesh1.textContent=datas.name;


        species.innerHTML=datas.species;
        if(species.innerHTML==""){
            species.innerHTML="NULL";
        }
        gender.innerHTML=datas.gender; 
        house.innerHTML=datas.house;
        if(house.innerHTML==""){
            house.innerHTML="NULL";
        }
        dob.innerHTML=datas.dateOfBirth;
        if(dob.innerHTML==""){
            dob.innerHTML="NULL";
        }
        aneceirys.innerHTML=datas.ancestry;
        if(aneceirys.innerHTML==""){
            aneceirys.innerHTML="NULL";
        }
        eyecolor.innerHTML=datas.eyeColour;
        if(eyecolor.innerHTML==""){
            eyecolor.innerHTML="NULL";
        }
        haircolor.innerHTML=datas.hairColour;
        if(haircolor.innerHTML==""){
            haircolor.innerHTML="NULL";
        }
        detailimage.src=datas.image;
        wands.innerHTML+=datas.wand.core;
        if(wands.innerHTML==""){
            wands.innerHTML="NULL";
        }
        patronus.innerHTML=datas.patronus;
        if(patronus.innerHTML==""){
            patronus.innerHTML="NULL";
        }
    });

}
fetchstaffstudents();