var el1=document.getElementById('username')
var el2=document.getElementById('feedback')
function check(minlength){
    if(el1value.length<minlength){
        el2.innerHTML='username must be'+minlength+'or more'
    }else{
        el2.innerHTML=''
    }
}
el1.addEventListener('blur',function(){
    check(5)
},false)