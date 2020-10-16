
let Nav = `
<div class = 'dorm' id = 'navbar'>

    <a href = '../../index.html'>

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
        <a href = '../../index.html'>
            <h1 class = 'navbtn'> Home </h1>
        </a>
        <a href = '../about.html'>
            <h1 class = 'navbtn'> About </h1>
        </a>
        <a href = '../blog.html'>
            <h1 class = 'navbtn'> Blog </h1>
        </a>
        <a href = '../contact.html'>
            <h1 class = 'navbtn'> Contact </h1>
        </a>
        <a href = '#'>
           <h1 class = 'button trywolf'> Try Wolf </h1>
        </a>
    </div>

</div>

<div id = 'navfab'>
    <div></div>
    <div></div>
    <div></div>
</div>

<div id = 'dark'> </div>

<div id = 'modal'>

    <div class = 'container visible'>
        <h1> Try Wolf Today </h1>
        <div class = 'horflex'>
            <input type = 'email' id = 'email' placeholder = 'EMAIL' aria-label = "email">
            <button id = 'beta'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14.6px"
                height="13px" viewBox="0 0 14.6 13" style="overflow:visible;enable-background:new 0 0 14.6 13;" xml:space="preserve">
                    <g id = 'arrow'>
                        <line x1="0.5" y1="6.5" x2="13.9" y2="6.5"/>
                        <polyline points="8,0.5 14.1,6.6 8.3,12.5 	"/>
                    </g>
                </svg>
            </button>
        </div>
    </div>

    <div class = 'container'>
        <h1> You've been signed up! </h1>
        <h2> Check your email for updates. </h2>
        <button id = 'ok'> OK </button>
    </div>

</div>

`

Tag('body')[0].innerHTML = Nav + Wolf + Tag('body')[0].innerHTML


const SubpageLoop = () => {

    for (let i=0; i<Class('right').length; i++){
        let elem = Class('right')[i]

        let expo = elem.firstElementChild
        let img = elem.lastElementChild

        let expoHeight = expo.getBoundingClientRect().height
        let imgHeight = img.getBoundingClientRect().height

        if (window.innerWidth < 800){

            expo.style.transform = `translateY(${imgHeight}px)`
            img.style.transform = `translateY(${-expoHeight-70}px)`

        }else{
            expo.style.transform = ``
            img.style.transform = ``

        }
    }

    window.requestAnimationFrame(SubpageLoop)
}

window.requestAnimationFrame(SubpageLoop)