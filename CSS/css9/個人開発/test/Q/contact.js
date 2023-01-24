window.onload = function () {
  const $getListAItems = document.getElementById( "sampleListA" ).children;
  for( let $i = 0; $i < $getListAItems.length; $i++ ){
      $getListAItems[$i].onclick =
          function(){
              sample( this.innerHTML );
          };
  }
}
function sample( $colorName ) {
  const $sampleListB = document.getElementById( "sampleBoxB" );
  $sampleListB.style.backgroundColor = $colorName;
}
