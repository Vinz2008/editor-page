const btn = document.getElementById("btn-toggle");

var r = document.querySelector(':root');
function dracula() {
    var rs = getComputedStyle(r);
    r.style.setProperty('--bkg-color', '#383A59');
    r.style.setProperty('--text-color', '#BD93F9');
    r.style.setProperty('--nav-color', '#282A36');
    r.style.setProperty('--backgroundTop-color', '#383A59');
    r.style.setProperty('--top-text-color', '#BD93F9');
    r.style.setProperty('--parameter-border', '#BD93F9');
    r.style.setProperty('--output-border', '#BD93F9');
    r.style.setProperty('--button1', '#04d481');
    r.style.setProperty('--button2', '#04d481');
    btn.innerHTML = "dark"
}
function light() {
    var rs = getComputedStyle(r);
    r.style.setProperty('--bkg-color', '#fffffe');
    r.style.setProperty('--text-color', '#000000');
    r.style.setProperty('--nav-color', '#fff');
    r.style.setProperty('--backgroundTop-color', '#fffffe');
    r.style.setProperty('--top-text-color', '#272343');
    r.style.setProperty('--parameter-border', '#50FA7B');
    r.style.setProperty('--output-border', '#000000');
    r.style.setProperty('--button1', '#ffd803');
    r.style.setProperty('--button2', '#bae8e8');
    btn.innerHTML = "dracula"
}

function dark() {
  var rs = getComputedStyle(r);
  r.style.setProperty('--bkg-color', '#16161a');
  r.style.setProperty('--text-color', '#FFFFFF');
  r.style.setProperty('--nav-color', '#16161a');
  r.style.setProperty('--backgroundTop-color', '#16161a');
  r.style.setProperty('--top-text-color', '#FFFFFF');
  r.style.setProperty('--parameter-border', '#50FA7B');
  r.style.setProperty('--output-border', '#000000');
  r.style.setProperty('--button1', '#7f5af0');
  r.style.setProperty('--button2', '#2cb67d');
  btn.innerHTML = "light"
}


var currentTheme = localStorage.getItem("theme");

console.log(`current theme : ${currentTheme}`);
if (currentTheme == "dark") {
  dark();
  btn.innerHTML = "light";
} else if (currentTheme == "light") {
  light();
  btn.innerHTML = "dracula";
} else if (currentTheme == "dracula"){
  dracula();
  btn.innerHTML = "dark";
} else if (currentTheme == "undefined" || currentTheme == null){
  light();
  btn.innerHTML = "dracula";
}

function buttonClicked() {
    var currentTheme = localStorage.getItem("theme");
    var theme = "light"
    if (currentTheme == "dark") {
      console.log("lightened")
      light()
      var theme = "light"
    } else if (currentTheme == "light") {
      console.log("dracula")
      dracula()
      var theme = "dracula"
    
    } else if (currentTheme == "undefined"){
      localStorage.setItem("theme", "light");
    } else if (currentTheme == "dracula"){
      console.log("darkened")
      dark()
      var theme = "dark"
    }
    localStorage.setItem("theme", theme);
  };
