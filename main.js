let switchMode = document.getElementById("night");
let switchPicture = document.getElementById("nightPic");
let aboutMe = document.querySelector(".about_me");

let mode = "light";
let mouseClicked = false;

let skillsDiv = document.querySelector('.skills');
let skillNames = document.querySelector(".skillNames");
let projectsDiv = document.querySelector('.projects');

let blankText = document.querySelectorAll('.blank');

let turnLight = function(){
    switchPicture.src = "images/night.png";
    document.body.style.backgroundColor = "#F4F4F9";
    document.body.style.color = "black";
    aboutMe.style.backgroundColor = "antiquewhite";
    blankText.forEach(function(e){
        e.style.color = "antiquewhite";
    })
    skillsDiv.style.backgroundColor = "darkseagreen";
    skillNames.style.backgroundColor = "darkseagreen";
    projectsDiv.style.backgroundColor = "#9DC0BC";
}

let turnDark = function(){
    switchPicture.src = "images/light.png";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    aboutMe.style.backgroundColor = "darkcyan";
    blankText.forEach(function(e){
        e.style.color = "darkcyan";
    })
    skillsDiv.style.backgroundColor = "#7C7287";
    skillNames.style.backgroundColor = "#7C7287";
    projectsDiv.style.backgroundColor = "#2B2D42";
}

switchMode.onclick = function(){
    mouseClicked = true;
}

switchMode.onmouseover = function(){
    if(mode == "light"){
        turnDark();
    }
    else{
        turnLight();
    }
}

switchMode.onmouseleave = function(){
    if(!mouseClicked){
        if(mode == "light"){
            turnLight();
        }
        else{
            turnDark();
        }
    }
    else{
        if(mode == "light"){
            turnDark();
            mode = "dark";
        }
        else{
            turnLight();
            mode = "light";
        }
    }
    mouseClicked = false;
}

let skills = [
    {name: "HTML",
    img: "images/html.png"},
    {name: "CSS",
    img: "images/css.png"},
    {name: "JavaScript",
    img: "images/js.webp"},
    {name: 'Java',
    img: "images/java.png"},
    {name: 'Python',
    img: "images/python.webp"}
];

for(let i=0;i<skills.length;i++) {
    let img = document.createElement('img');
    img.src = skills[i].img;
    skillsDiv.append(img);
}
for(let i=0;i<skills.length;i++) {
    let name = document.createElement("p");
    name.innerText = skills[i].name;
    skillNames.append(name);
}