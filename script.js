function displyInfo() {
    // Get the current URL of the document
    // window.location.href
  
    // Get the size of the window in pixels
    var width = window.innerWidth;
    var height = window.innerHeight;
  
    // Display the information in an alert box
    var div = document.getElementsByClassName("div")[0];
    div.innerText = `Current URL:  ${window.location.href} 
    Window size: ${width} X ${height}  pixels`
  }
  function ScreenInfo(){
    const screenWidth = screen.width;
  
    const screenHeight = screen.height;
  
  // Get the color depth of the screen
  const screenColorDepth = screen.colorDepth
    var div = document.getElementsByClassName("div1")[0];
    div.innerText = `Screen color depth  ${screenColorDepth} 
    Window size: ${screenWidth} X ${screenHeight}  pixels`
    
  }