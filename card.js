let arrofobj=[

    {
"cimg":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
"cname":"nature",
"crating":"4.5",
"cbrand":"quartz",
"cprize":"999"

    },
    {
        "cimg":"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        "cname":"nature",
        "crating":"4.5",
        "cbrand":"quartz",
        "cprize":"999"
        
            },
            {
                "cimg":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                "cname":"nature",
                "crating":"4.5",
                "cbrand":"quartz",
                "cprize":"999"
                
                    },
                    {
                        "cimg":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                        "cname":"nature",
                        "crating":"4.5",
                        "cbrand":"quartz",
                        "cprize":"999"
                        
                            },
                             {
                                "cimg":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                                "cname":"nature",
                                "crating":"4.5",
                                "cbrand":"quartz",
                                "cprize":"999"
                                
                                    },
           {
                                        "cimg":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                                        "cname":"nature",
                                        "crating":"4.5",
                                        "cbrand":"quartz",
                                        "cprize":"999"
                                               }
]

let show=document.querySelector('#output');
show.innerHTML=arrofobj.map(e=>`
    <div id="card">
    <img src="${e.cimg}" alt="">
    <div id="cardc">
    <div>${e.cname}</div>
    <div>${e.crating}</div>
    <div>${e.cbrand}</div>
    <div>${e.cprize}</div>
    </div>
    <button>buy now</button>
    </div>
   
   
   
    `).join("");



