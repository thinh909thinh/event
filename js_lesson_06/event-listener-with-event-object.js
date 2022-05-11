function check(e,minlength){
    var el,elMsg
    if(!e){
        e=window.event
    }
    el=e.target||e.srcElement
    elMsg=el.nextSibling
    if(el.value.length<minlength){
        elMsg.innerHTML='must be '+minlength+'character'
    }else{
        elMsg.innerHTML=""
    }
}
var elUser=document.getElementById('username')
console.log(elUser)
if(elUser.addEventListener){
    elUser.addEventListener('blur',function(e){
        check(e,5)
    },false)
}else{
    elUser.attachEvent('onblur',function(e){
        check(e,5)
    })
}