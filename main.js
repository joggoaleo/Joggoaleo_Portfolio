function revealMyinfo(myInfo, className) {
  let htmlElement = document.querySelector(className);
  
  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;
}

/* function revealMyname1(myName) {
  let span = document.getElementsByTagName("span");
  span[1].innerHTML = myName;
} */
