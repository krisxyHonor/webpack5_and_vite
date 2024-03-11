import London from './assets/London.png'
let img = document.getElementById('img')
img.src = London

import Txt from './assets/London.txt'
let p = document.getElementById('p')
p.innerText = Txt

import './css/page.css'

let btn = document.getElementById('click')
btn.onclick = ()=>{
    import('./click.js')
    .then(({default:click})=>{
        click()
    })
}