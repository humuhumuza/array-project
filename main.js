/*<li  class="list-item">
<div class="personal-info">
    <h2>Ndayambaje Gaetan</h2>
    <p>gaetandeo@gmail.com</p>
    <p>0782989299</p>
</div>
<div class="actions">
    <button>remove student</button>
</div>
</li>*/
let students= JSON.parse(localStorage.getItem("students"))||[];


document.getElementById("btn-add-student")
.addEventListener('click',function(e){
    document.getElementById("formcontainer").classList.remove("hideorshow")
});

document.getElementById("btnclose").addEventListener("click", function (e) {
e.preventDefault();
document.getElementById("formcontainer").classList.add("hideorshow");

});

document.getElementById("submitdata")
.addEventListener("click",function(e){
    e.preventDefault();
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let phone=document.getElementById('phone').value;
let student={name,email,phone};
students.push(student);
localStorage.setItem("students", JSON.stringify(students));
location.reload();
});


let studentList=document.getElementById("sudentid");
for(let i=0; i<students.length; i++){
let listItem=document.createElement('li');
listItem.classList.add("listitem");
let personalinfo=document.createElement('div');
let actions=document.createElement('div');
actions.classList.add("actions")

let studentName=document.createElement('h2');
let studentEmail=document.createElement('p');
let studentPhone=document.createElement('p');
let removestudent=document.createElement('button');
//set data to tags
removestudent.innerHTML="Remove student";
studentName.innerHTML=students[i].name;
studentEmail.innerHTML=students[i].email;
studentPhone.innerHTML=students[i].phone;

personalinfo.appendChild(studentName);
personalinfo.appendChild(studentEmail);
personalinfo.appendChild(studentPhone);
actions.appendChild(removestudent);
listItem.appendChild(personalinfo)
listItem.appendChild(actions)

studentList.appendChild(listItem);
removestudent.addEventListener('click',function(e){
let newStudents=students.filter((student)=> students[i].id != student.id );
students=newStudents;
});
}
