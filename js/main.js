// <!-- header -->

        const header = document.querySelector('header')

        const nav = document.querySelector('nav')
        document.querySelector('.toggle').onclick = function(){
            console.log(this)
            this.classList.toggle('active')
            nav.classList.toggle('active')
        }

        addEventListener('resize', e=>{

            let currentWidth =  document.body.clientWidth;
            if(currentWidth >991){
                nav.classList.remove('active')
                document.querySelector('.toggle').classList.remove('active')
            }
            if(currentWidth <= 991){
                let navLink = document.querySelectorAll('nav ul li a');
                navLink.forEach(e =>{
                    e.addEventListener('click', ()=>{
                        document.querySelector('.toggle').classList.toggle('active')
                        nav.classList.toggle('active')
                    })
                })
            }
        })


    // <!-- fullpage -->

        new fullpage('#fullpage', {
            navigation: true,
            anchors: ['home', 'news', 'about','menu','store'],
            parallax: true,
            responsiveWidth: 700,
            beforeLeave: function(origin, destination, direction, trigger){
                let location = this.index;
                if(direction =='down' && destination.anchor !='home'){
                    header.classList.add('sticky')
                }
                if(destination.anchor =='home'){
                    header.classList.remove('sticky')
                }

            },
            afterLoad: function(origin, destination, direction){
                if(destination.anchor !='home'){
                    header.classList.add('sticky');
                }
                let appendTexts = document.querySelectorAll(".text-append");
                if(destination.anchor !='about'){
                    appendTexts[0].style.opacity = "0";
                }
                if(destination.anchor =='about'){
                    appendTexts[0].style.opacity = "1";
                    appendTexts.forEach(appendText => {
                    let letters = appendText.textContent.split("");
                    appendText.textContent = "";
                    letters.forEach((letter, i) => {
                        let span = document.createElement("span");
                        span.textContent = letter;
                        span.style.animationDelay = `${i * 0.05}s`;
                        appendText.append(span);
                    });
                    });
                }

            },
        });     
let cursorImg = document.querySelector('.cursor-navImg')
document.addEventListener('mousemove',e=>{
    cursorImg.style.top =e.pageY - 50 + 'px';
    cursorImg.style.left =e.pageX + 100+'px';
})
let navList = document.querySelectorAll('nav ul li');
let navListAll = document.querySelector('nav ul');
console.log(navList)
navList.forEach(e=>{
    e.addEventListener('mouseenter',()=>{
        let navImg =e.getAttribute('data-img')
        console.log(navImg)
        cursorImg.src =navImg;
        cursorImg.style.opacity = '1';
        cursorImg.style.transition = 'unset';
    })
    e.addEventListener('mouseleave', ()=>{
        cursorImg.style.opacity = '0';
        cursorImg.style.transition = '0.3s';
    })
})
// console.log(navListAll)
// navListAll.addEventListener('mouseleave', ()=>{
//     cursorImg.style.opacity = '0';
// })
