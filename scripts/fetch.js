let searchnews = async (value) => {
    try{
        let res = await
        fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

        let data = await res.json();
        console.log(data);
        return data;
    }
    catch(err){
        console.log(err)
    }
}


let append=(data,box)=>{
    console.log(data);
    data.articles.forEach(({title,description,source})=>{
        let box1 = document.createElement("div");


        let img=document.createElement("img");
        img.src=urlToImage;

        let h = document.createElement("h3");
        h.innerText=title;

        let p=document.createElement("p");
        p.innerText=description;

        

        box1.append(img,h,p);
        results.append(div);
    })
}






export{searchnews,append};



