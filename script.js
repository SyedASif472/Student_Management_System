document.addEventListener("DOMContentLoaded", function(){
  const forms = document.querySelectorAll("form");
  forms.forEach(f => {
    f.addEventListener("submit", function(e){
      const required = f.querySelectorAll("[required]");
      for (let el of required){
        if (!el.value.trim()){
          alert("Please fill all required fields.");
          e.preventDefault();
          return;
        }
      }
    })
  })
});
