function clickChangeColor(id) {
  const elements = document.getElementById(id);
  const backgroundColor = window.getComputedStyle(elements).backgroundColor;
  console.log(backgroundColor);
  document.getElementsByTagName('BODY')[0].style.backgroundColor = backgroundColor;

  document.getElementById('colorName').innerHTML = backgroundColor;

}

function changeBackToWhite() {
    document.body.style.backgroundColor = '#ffffff';
    console.log("asdasd")
}


