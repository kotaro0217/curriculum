
window.addEventListener('load' , function(){
  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")

  pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
    console.log('乗ったら青色')
  })

  pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style", "background-color:red;")
    console.log("外れたら赤色")
  })

  pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
      // pullDownParents.removeAttribute("style", "display:block;")
      pullDownParents.setAttribute("style", "display:none;")
      console.log("非表示")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
      console.log("表示")
    }
  })
})
