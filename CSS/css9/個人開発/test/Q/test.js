function pullDown() {

  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  const pullDownChild = document.querySelectorAll(".pull-down-list")
  const currentList = document.getElementById("current-list")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:blue;")
    console.log("乗った時は青色")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:red;")
    console.log("外れた時は赤色")
  })

  pullDownButton.addEventListener('click', function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
      pullDownParents.removeAttribute("style", "display:block;")
      console.log("非表示")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
      console.log("表示")
    }
  })

  pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
      const value = list.innerHTML
      currentList.innerHTML = value
      console.log(value)
    })
  })
}

  // function check(){
  //   if (mail_form.mail.value == ""){  //条件に一致する場合(メールアドレスが空の場合)
  //     alert("メールアドレスを入力してください");    //エラーメッセージを出力
  //       return false;    //送信ボタン本来の動作をキャンセルします
  //   }else{              //条件に一致しない場合(メールアドレスが入力されている場合)
  //       return true;    //送信ボタン本来の動作を実行します
  //   }
  //     }

//       var img = new Image();
// window.onload = function() {
//   img.src = 'background.jpeg';
// };



window.addEventListener('load', pullDown)


// 要素.addEventListener('イベント名', 関数)


