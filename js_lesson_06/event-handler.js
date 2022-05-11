function check(){
    var el=document.getElementById('feedback')
    if(this.value.length<5){
        el.textContent='username mustbe 5'

    }else
    el.textContent=''
}
var eluser=document.getElementById('username')
eluser.onblur=check;