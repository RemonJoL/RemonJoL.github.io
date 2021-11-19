const codingExampleTitle = document.querySelectorAll(".coding-example-title");
const codingExampleContent = document.querySelectorAll(".coding-example-content");

for(let i=0;i<codingExampleTitle.length;i++){
  codingExampleTitle[i].addEventListener("click", function(){
    if (codingExampleContent[i].style.display === "none" ){
      codingExampleContent[i].style.display = "block";
    }
    else if (codingExampleContent[i].style.display = "block" ){
      codingExampleContent[i].style.display = "none";
    }
  });
}
