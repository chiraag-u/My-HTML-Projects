$(".Properties").click(function(){
    const Properties = document.querySelectorAll(".Properties")
    for (index = 0; index < Properties.length; index++) {
       Properties[index].style.backgroundColor = "transparent";       
       Properties[index].classList.remove("Selected")
    }
    $(this).addClass("Selected")
});
$(".Properties").mouseover(function() {
if (!$(this)[0].classList.contains("Selected")) {
    $(this).css({"background-color": "#00000006"}) 
}})
  .mouseout(function() {
    if (!$(this)[0].classList.contains("Selected")) {
        $(this).css({"background-color": "transparent"}) 
    }
  });
const PathContainer = document.querySelector(".Path")
function CreatePath(index) {  
  var PathSpan = document.createElement("span")    
  PathSpan.innerHTML = ListCurrentPath[index]
  PathContainer.appendChild(PathSpan)  
}
var CurrentPath = "Folder/SubFolder/Another/Folder"
var ListCurrentPath = CurrentPath.split("/");
for (index = 0; index < ListCurrentPath.length; index++) {
    if (index == ListCurrentPath.length-1) {
      CreatePath(index)
    } else {
      CreatePath(index)
      $(PathContainer).append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>');  
    }
}

$('html').bind('contextmenu', function(e) {
  return false;
}); 