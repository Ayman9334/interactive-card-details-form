let form = document.querySelector('form')
let nom = document.getElementById('name')
let visa = document.getElementById('ccn')
let regx = /\b\d{16}\b/i
let mm = document.getElementById('mm')
let yy = document.getElementById('yy')
let cvc = document.getElementById('cvc')

form.addEventListener('submit',(e)=>{
    let r = true
    e.preventDefault()
    if (nom.value.trim() === ''){
        document.getElementById('namecont').classList.add('err')
        r = false
    }
    else{
        document.getElementById('namecont').classList.add('suc')
        document.querySelector('.nm').innerHTML= nom.value.trim()
    }

    if (!(regx.test(visa.value.replace(/\s/g, '')))){
        document.getElementById('visa').classList.add('err')
        r = false
    }
    else{
        document.getElementById('visa').classList.add('suc')
        document.querySelector('.fstCard div p').innerHTML= visa.value.trim()
    }

    if (mm.value.trim() === ''){
        document.getElementById('mmyy').classList.add('err1')
        r = false
    }
    else{
        document.getElementById('mmyy').classList.add('suc1')
    }
    
    if (yy.value.trim() === ''){
        document.getElementById('mmyy').classList.add('err2')
        r = false
    }
    else{
        document.getElementById('mmyy').classList.add('suc2')
    }

    if (!(yy.value.trim() === '') && !(mm.value.trim() === '')){
        document.querySelector('.dt').innerHTML= String(mm.value.trim()) + '/' + String(yy.value.trim())
    }

    if (cvc.value.trim() === ''){
        document.getElementById('CVC').classList.add('err')
        r = false
    }
    else{
        document.getElementById('CVC').classList.add('suc')
        document.querySelector('.secCard p').innerHTML= cvc.value.trim()
    }

    
})

function clrclass(Id){
    document.getElementById(Id).classList.remove('err','err1','err2')
    document.getElementById(Id).classList.remove('suc','suc1','suc2')
}




