function checkUsername(){
    var elMsg=document.getElementById('feedback')
    var elUsername=document.getElementById('username')
    console.log(elUsername.value)
    if(elUsername.value.length<5){
        elMsg.textContent='usernmae must be'
    }
    else{
        elMsg.textContent='sss'
    }
}
console.log(document)