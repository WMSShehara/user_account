$("nav ul li").click(function(){
    $(this).parent().children().removeClass("active");
    $(this).toggleClass("active");
  });

//   visibility- password - useraccount
const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")
eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
  })