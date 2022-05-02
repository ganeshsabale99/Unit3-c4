// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



import {navbar} from "../components/navbar.js";
let n = document.getElementById("navbar");
n.innerHTML=navbar();

import {searchnews}  from "./fetch.js"
let search =(e) => {
    if(e.key == "Enter"){
        let value = document.getElementById("search_input").value;
        searchnews(value).then((data) => {
            console.log(data)
            let box = document.getElementById("results");
            box.innerHTML=null;
            append(data,articles,box);
        });
    }

};


document.getElementById("search_input").addEventListener("keydown",search);

let sidebar = document.getElementById("sidebar").children;
function cSearch(){
    console.log(this.id);
    searchnews(this.data).then((data)=>{
        let box = document.getElementById("results");
        box.innerHTML=null;
        append(data,articles,box);

    });
}


for(let el of sidebar){
    el.addEventListener("click",cSearch);
}







let id;
function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}