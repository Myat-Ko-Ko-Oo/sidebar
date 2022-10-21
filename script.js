menushow = document.getElementsByClassName("menuhide");
sidebarclose = document.getElementById("siderbarclose");
homesection = document.getElementsByClassName("home-section")[0];
sidebar = document.getElementsByClassName("sidebar")[0];

for(el of menushow){    
    el.addEventListener("click",(event)=>{
        let first_class = event.target.className.split(' ')[0];
          menu = document.getElementsByClassName(`${first_class}menu`)[0]
         menuarrow = document.getElementsByClassName(`${first_class}arrow`)[0]
         
         if(menuarrow.classList.contains("deg")){
          menuarrow.classList.remove("deg")
           }else {
            menuarrow.classList.add("deg")
           }
     
          if(menu.classList.contains("menu")){
            menu.classList.add("show")
            menu.classList.remove("menu")
           }else if(menu.classList.contains("show")){
            menu.classList.remove("show")
            menu.classList.add("menu")
           }
         })
}

sidebarclose.addEventListener("click",()=>{
  
    if(homesection.classList.contains("closedone") )
    {
    homesection.classList.add("sidebarclose")
    homesection.classList.remove("closedone")

    
}
    else{
        homesection.classList.remove("sidebarclose")
        homesection.classList.add("closedone")
     
    }
    if(sidebar.classList.contains("open")){
        sidebar.classList.remove("open")
        sidebar.classList.add("close")
    }else{
        sidebar.classList.add   ("open")
        sidebar.classList.remove("close")
    }



})