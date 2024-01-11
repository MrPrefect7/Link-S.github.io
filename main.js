const open = document.getElementById("open");
const close = document.getElementById("close");
const search = document.getElementById("search");

open.addEventListener("click", () => {
  search.style.width = "100vw";
});

close.addEventListener("click", () => {
  search.style.width = "0vw";
});

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("search");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const myInput = document.getElementById("myInput");
const hints = document.getElementById("hints");

myInput.addEventListener("mouseover", () => {
  hints.style.width = "88.8vw";
  hints.style.height = "30vh";
});

myInput.addEventListener("mouseout", () => {
  hints.style.width = "0vw";
  hints.style.height = "0vh";
});


