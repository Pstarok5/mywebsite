let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
let menU = document.querySelector(".menu");
menU.classList.toggle("active")
    
}


let man = new Typed(".auto-type", {
    strings : ["Emmanuel", "a web developer", "also a software engineer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});



function displayN() {
    alert('Successfully Subscribed👍');
}



let Images = document.querySelectorAll(".image");

for (let index = 0; index < Images.length; index++) {
Images[index].style.transform = `translateX(${index*100}%)`
    
}


let countIndex = 0;
let minimumSlide = Images.length-1;



function slide() {
    if (countIndex === minimumSlide) {
        countIndex = 0;
        
    } else {
        countIndex++
    }



    for (let index = 0; index < Images.length; index++) {
    Images[index].style.transform = `translateX(${100*(index-countIndex)}%)`
        
    }
    
}



setInterval(() => {
  slide()
}, 3000);



let prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    if (countIndex === 0) {
        countIndex = minimumSlide;
    } else {
        countIndex--
    }


    for (let index = 0; index < Images.length; index++) {
        Images[index].style.transform = `translateX(${100*(index-countIndex)}%)`
            
    }
  
});



let next = document.querySelector(".next");
next.addEventListener("click", slide);





let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "openeye.png";
    } else {
        password.type = "password";
        eyeicon.src = "closeeye.png"
    }
    
}




let intersection = document.querySelectorAll("#item1");

let element = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        if (entry.isIntersecting) {
            element.unobserve(entry.target);
        }
    })

}, {
    threshold : 1
})


intersection.forEach((entry) => {
    element.observe(entry);
})



