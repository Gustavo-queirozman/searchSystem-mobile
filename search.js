function searchFunc() {
  var input = document.getElementById("searchBar");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("nameList");//lista completa
  //console.log(ul)
  var li = ul.getElementsByTagName("li");//so as linhas (no json vai ser so as linhas das "bebida")
  //console.log(li)

  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];//montanto a linha
    //console.log(a)
    var txtValue = a.textContent || a.innerText;
    console.log(txtValue)//so os textos
    if (txtValue.toUpperCase().indexOf(filter) > -1) {//transformou textos em maiusculo e fez a busca
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

