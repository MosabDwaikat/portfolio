function view(){
    let btn=document.getElementById("photoButton")
    let div =document.getElementById("imgDiv")
    if(btn.textContent==="+"){
        div.classList.remove("c1")
        div.classList.add("c2")
        btn.textContent="--"
    }else{
        div.classList.remove("c2")
        div.classList.add("c1")
        btn.textContent="+"
    }


}