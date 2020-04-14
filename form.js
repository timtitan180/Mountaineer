
  function clickButton() {

    var a = document.querySelectorAll("input")[0].value;
    var b = document.querySelectorAll("input")[1].value;
    if (a.length === 0 || b.length === 0) {
        document.querySelectorAll("p")[2].style.display = "inline-block";
        document.querySelectorAll("p")[1].style.display = "none";
    }

    else {
      document.querySelectorAll("p")[1].style.display = "inline-block";
      document.querySelectorAll("P")[2].style.display = "none";
    }
};
