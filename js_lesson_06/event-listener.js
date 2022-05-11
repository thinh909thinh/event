function check(){
    var el=document.getElementById('feedback')
    if(this.value.length<5){
        el.textContent='uuuuuuuu'
    }else{
        el.textContent=''
    }
}
var eluser=document.getElementById('username')
eluser.addEventListener('blur',check,false)