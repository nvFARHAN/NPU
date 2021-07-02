document.addEventListener("DOMContentLoaded",
  function(event){
    document.querySelector("#navbarToggle").addEventListener("blur",
    function(event){
      var screenWidth = window.innerWidth;
      console.log(screenWidth);
      if (screenWidth < 768) {
        document.querySelector("#navbarSupportedContent").Collapse;
      }
    }
  );
  }
);
