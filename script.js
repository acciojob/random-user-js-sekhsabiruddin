//your code here

let data;
fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((result)=>{

    data = result.results[0];
    let user = document.getElementById('user');

    let img = document.createElement('img');
    img.src = data.picture.large;
    user.appendChild(img);

    let h2 = document.createElement('h2');
    

    h2.innerHTML = `${data.name.first}  ${data.name.last}`;
    user.appendChild(h2);
});
function getAnother(){
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((result)=>{
    
        data = result.results[0];
        let user = document.getElementById('user');
        user.innerHTML = "";

        let info = document.getElementById('info');
        info.innerHTML = "";
    
        let img = document.createElement('img');
        img.src = data.picture.large;
        user.appendChild(img);
    
        let h2 = document.createElement('h2');
        
    
        h2.innerHTML = `${data.name.first}  ${data.name.last}`;
        user.appendChild(h2);
    });
}

function Age(){
    let info = document.getElementById('info');

    info.innerHTML = `${data.dob.age}`;
}

function Email(){
    let info = document.getElementById('info');

    info.innerHTML = `${data.email}`;
}

function Phone(){
    let info = document.getElementById('info');

    info.innerHTML = `${data.cell}`;
}

