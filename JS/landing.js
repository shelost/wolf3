
let Nav = `
<div class = 'dorm' id = 'navbar'>

    <a href = 'index.html'>

        <div id = 'mast'>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1067.1px" height="243.7px" viewBox="0 0 1067.1 243.7" style="overflow:visible;enable-background:new 0 0 1067.1 243.7;" xml:space="preserve">
                <g>
                    <polygon class="letter" points="372.5,0.2 304.6,242.9 229.3,242.9 185.5,86.5 141.7,242.9 67.9,242.9 0,0.2 102.6,0.2 82.5,33.3
                        116,153 158.8,0.2 234.6,0.2 278.1,155.6 313.5,29 296,0.2 	"/>
                    <polygon class="letter" points="842.7,176.3 842.7,242.9 648.3,242.9 648.3,0.2 737.8,0.2 717.7,33.3 717.6,33.1 717.6,196.1
                        810.1,196.1 "/>
                    <polygon class="letter" points="1067.1,0.2 1067.1,65.6 1036.3,46.9 942,46.9 942,117.2 1009.7,117.2 1009.7,157.2 942,157.2
                        942,213.7 959.8,242.9 872.7,242.9 872.7,0.2 	"/>
                    <path class="letter" d="M496.4,0c-67.3,0-121.9,54.6-121.9,121.8c0,67.3,54.6,121.9,121.9,121.9s121.8-54.6,121.8-121.9
                        C618.3,54.6,563.7,0,496.4,0z M496.4,198.9c-21.9,0-39.7-34.5-39.7-77.1c0-42.6,17.8-77.1,39.7-77.1c21.9,0,39.7,34.5,39.7,77.1
                        C536.1,164.4,518.3,198.9,496.4,198.9z"/>
                </g>
            </svg>

        </div>

    </a>

    <div id = 'nav'>
        <a href = 'index.html'>
            <h1 class = 'navbtn'> Home </h1>
        </a>
        <a href = '$/about.html'>
            <h1 class = 'navbtn'> About </h1>
        </a>
        <a href = '$/blog.html'>
            <h1 class = 'navbtn'> Blog </h1>
        </a>
        <a href = '$/contact.html'>
            <h1 class = 'navbtn'> Contact </h1>
        </a>
        <a href = '#'>
           <h1 class = 'button'> Try Wolf </h1>
        </a>
    </div>

</div>

<div id = 'navfab'>
    <div></div>
    <div></div>
    <div></div>
</div>

<div id = 'dark' class = 'dorm'> </div>

<div id = 'notif' class = 'dorm'>
    <div class = 'stack'>
        <h1> You've Been Signed Up!</h1>
        <h2> Look out for updates in your inbox. </h2>
    </div>
    <button id = 'ok'>OK</button>
</div>

`

Tag('body')[0].innerHTML = Nav + Tag('body')[0].innerHTML

Class('content')[0].innerHTML = Class('content')[0].innerHTML + Wolf;

var analysisAnim = lottie.loadAnimation({
    container: Id('analysis'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/analysis.json',
    name: 'analysis'
});

var academyAnim = lottie.loadAnimation({
    container: Id('academy'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/academy.json',
    name: 'academy'
});

var portfolioAnim = lottie.loadAnimation({
    container: Id('portfolio'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/portfolio.json',
    name: 'portfolio'
});


let index, integer;

const LandingLoop = () => {

    index = window.scrollY / window.innerHeight;
    integer = Math.floor(index);


    for (let i=0; i<Class('slide').length; i++){
        let slide = Class('slide')[i]

        let threshold;

        switch (i){
            case 1:
                threshold = 2;
                break;
            case 2:
                threshold = 1.5;
                break;
            default:
                threshold = 1.3;
                break;
        }

        if (i < Class('slide').length-1){
            if (index > threshold*i){
                slide.style.opacity = 0;
                slide.style.position = 'static'
            }else if (index > 1.2*i ){
                slide.style.opacity = 0.3;
                slide.style.position = 'sticky'
            }else{
                slide.style.opacity = 1;
            }

        }
    }


    // Pointer
    if (index > 0.5){
        Id('pointer').style.opacity = 0
    }else{
        Id('pointer').style.opacity = 0.5
    }


    // Dots
    if (integer < 5){

        for (let i=0; i<Class('dot').length; i++){

            let dot = Class('dot')[i]

            if (integer == i+1){
                dot.classList.add('active')
            }else{
                dot.classList.remove('active')
            }

        }
    }

    if (index < 1){
        Id('dots').classList.remove('active')
    }else{
        Id('dots').classList.add('active')
    }


    // Mobile

    if (window.innerWidth < 800){

        Id('wolf').style.transform = `translateY(-${Class('flagship')[0].getBoundingClientRect().height+20}px)`
        Class('flagship')[0].style.transform = `translateY(${Id('wolf').getBoundingClientRect().height-20}px)`

        for (let i=0; i<Class('right').length; i++){
            let slide = Class('right')[i]
            let content = slide.firstElementChild
            let expo = content.firstElementChild
            let anim = content.lastElementChild

            expo.style.transform = `translateY(${anim.getBoundingClientRect().height}px)`
            anim.style.transform = `translateY(-${expo.getBoundingClientRect().height}px)`
        }

    }else{

        Id('wolf').style.transform = ``
        Class('flagship')[0].style.transform = ``

        for (let i=0; i<Class('right').length; i++){
            let slide = Class('right')[i]
            let content = slide.firstElementChild
            let expo = content.firstElementChild
            let anim = content.lastElementChild

            expo.style.transform = ``
            anim.style.transform = ``
        }
    }


    window.requestAnimationFrame(LandingLoop)
}
window.requestAnimationFrame(LandingLoop)




/*
const LandingLoop = () => {

    index = window.scrollY / window.innerHeight;

    for (let i=0; i<Class('slide').length; i++){
        let slide = Class('slide')[i]

        if (index - 0.5 > i ){
           slide.classList.add('gone')
        }else{
            slide.classList.remove('gone')
        }

    }

    window.requestAnimationFrame(LandingLoop)
}
window.requestAnimationFrame(LandingLoop)
*/
