console.log("12");
let searchbar = document.getElementById("box-search");
let searchbox=document.querySelector("#size-search");
searchbar.addEventListener("focus",()=> {
 searchbox.style.outline = "1px solid #bf0603";
 searchbar.style.outline = "none";
 searchbox.style.boxShadow = "0px 0px 1.3px 0.8px #bf0603";
});

searchbar.addEventListener("focusout",()=> {
  searchbox.style.outline = "";
  searchbox.style.boxShadow = "";
});
searchbox.addEventListener("click",()=> {
  searchbar.focus();
});
