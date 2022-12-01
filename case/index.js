const body = document.querySelector("body");

  
  function handleResize() {
    const windowWidth = window.innerWidth;
    const backgroundcolorYellow = "active1";
    const backgroundcolorPurple = "active2";
    const backgroundcolorBlue = "active3";
   
    if(windowWidth >= 500){
      body.classList.add(backgroundcolorYellow);
      body.classList.remove(backgroundcolorPurple, backgroundcolorBlue);
    }else if(windowWidth <500 && windowWidth >= 400){
      body.classList.add(backgroundcolorPurple);
      body.classList.remove(backgroundcolorYellow, backgroundcolorBlue);
    }else if(windowWidth < 400){
      body.classList.add(backgroundcolorBlue);
      body.classList.remove(backgroundcolorYellow, backgroundcolorPurple);
   
  }
}

window.addEventListener("resize", handleResize);