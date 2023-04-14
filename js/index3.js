const imagerow=document.querySelector(".info");
const fetchData = () => {
    fetch('https://hp-api.onrender.com/api/characters/students')
    .then(res => res.json())
    .then(data => {

       for(var i=0;i<6;i++)
       {   
          //create Dom elements
           const infoName=document.createElement('p');
           const infodiv=document.createElement('div');
           const infoImage=document.createElement('img');
           const infoBackgroudclone=document.createElement('img');
           const infoFrameclone=document.createElement('img');
           var f=0;
           const names=data[i].name
           for(var j=0;j<names.length;j++){
            if(names[j]==' '){
                f=1;
            }
            if(f==1){
                infoName.textContent+=names[j];
            }
           }
           f=0;
           infoImage.src=data[i].image;
           //add class list
           infoImage.classList.add('info-image');
           infoName.classList.add('info-name');
           infodiv.classList.add('info-img');
           infodiv.onclick = function(){
            details(infodiv.id);
           };
           infoBackgroudclone.classList.add('info-background');
           infoFrameclone.classList.add('info-imgframe');
           infodiv.setAttribute("id", i);
         //adding src for imgs
           infoBackgroudclone.src='images/Rectangle 45.png';
           infoFrameclone.src='images/photo_2023-03-13_20-57-50 1.png';
           //appendchild
           infodiv.appendChild(infoImage);
           infodiv.appendChild(infoName);
           infodiv.appendChild(infoBackgroudclone);
           infodiv.appendChild(infoFrameclone);
           
           imagerow.appendChild(infodiv);
       }
       
    })}

    fetchData();

    //details
   
    const details=(id) =>{
        console.log(id);
       //window.location.assign("staff details.html");
       }