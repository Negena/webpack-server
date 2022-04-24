export function write(){
  document.write("\nhello from js js")
}

export function changeh1(text){
  document.querySelector("h1").innerText = text
}

if (module && module.hot) module.hot.accept()
