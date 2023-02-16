//your code here
const url='https://randomuser.me/api/'

let userDetails;

async function loadFunction(){
  const response=await fetch(url);
  const data=await response.json();
  userDetails =data.results[0];
console.log(userDetails);
  const imageContainer=document.getElementById('image');
  const imageElement=document.createElement('img')
  imageElement.src=userDetails.picture.large
  imageContainer.append(imageElement)
  const name=userDetails.name;
  document.getElementById('fullName').textContent='Name: '+name.title+" "+name.first+" "+name.last


// name.title+" "+name.first+" "+name.last
 
}

function display(x){
  const answer=document.getElementById('ans');
  if(x==="age"){
    answer.textContent='Age: '+userDetails.dob.age
  }

   if(x==="email"){
      answer.textContent='Email: '+userDetails.email
   }

   if(x==="phone"){
    answer.textContent='Phone: '+userDetails.phone
 }
}

async function fetchUser(){
  document.getElementById("image").remove();
  console.log("i am in");
 await loadFunction();
}




