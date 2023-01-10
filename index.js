let ad = document.getElementById("inputext");
let index=(number)=>{
    ad.value+=number;
}
let Result=()=>{
    try{
        ad.value=eval(ad.value)
    }
    catch(err){
        alert('enter the valid result')
    }
}
function cl(){
    ad.value="";
}
function del(){
    ad.value=ad.value.slice(0,-1)
}