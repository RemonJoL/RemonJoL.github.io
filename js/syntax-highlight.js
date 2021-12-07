// ----------------------------------------------
// Coding Example Toggle
// ----------------------------------------------

codeBlock = document.querySelectorAll('code');

for(let i=0;i<codeBlock.length;i++){
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("div","<span style='color:red;'>div</span>");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("h3","<span style='color:red;'>h3</span>");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("&lt;p","&lt;<span style='color:red;'>p</span>");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("p&gt;","<span style='color:red;'>p</span>&gt;");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("&lt;a","&lt;<span style='color:red;'>a</span>");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("a&gt;","<span style='color:red;'>a</span>&gt;");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("&lt;img","&lt;<span style='color:red;'>img</span>");
  document.querySelectorAll('code')[i].innerHTML = document.querySelectorAll('code')[i].innerHTML.replaceAll("class","<span style='color:orange;'>class</span>");
}
