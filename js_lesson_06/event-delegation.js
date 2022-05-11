function getTarget(e){
    if(!e){
        e=window.event
    }
    return e.target||e.SrcElement
}
function item(e){
    var target,elParent,elGrandparent
    target=getTarget(e)
}
if(target.nodeName.toLowerCase()=='a'){
    ellist=target.parentNode
    ell=ellist.parentNode
    ell.removeChild(ellist)
}
if(target.nodeName.toLowerCase()=='em'){
    ellist=target.parentNode.parentNode
    ell=ellist.parentNode
    ell.removeChild(ellist)
}
if(e.preventDefault){
    e.preventDefault()
}else{
    e.returnValue=false
}
var el=document.getElementById('shoppingList')
if(el.addEventListener){
    el.addEventListener('click',function(e){
        item(e)
    },false)
}else{
    el.attachEvent('onclick',function(e){
        item(e)
    })
}