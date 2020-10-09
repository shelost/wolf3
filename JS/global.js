const NAVFAB = Id('navfab')
const NAV = Id('nav')
const DARK = Id('dark')

function Toggle(){
    NAV.classList.toggle('active')
    DARK.classList.toggle('active')
}

NAVFAB.onclick = Toggle
NAV.onclick = Toggle
DARK.onclick = Toggle

