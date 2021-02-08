const alternatives =
{
  "OCD": "picky",
  "retarded": "nonsensical"
}

document.onkeypress = function(evt) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  var charStr = String.fromCharCode(charCode);
  checkText();
}

function checkText() {
  if (document.activeElement.value === undefined) return;
  let text = document.activeElement.value;

  let words = text.split(" ");
  w = words[words.length - 1];
  if (w in alternatives) {
    if (confirm(("Would you like to replace that term with "
     + alternatives[w]) + "?")) {
      let temp = text.replace(w, alternatives[w]);
      document.activeElement.value = temp;
    }
  }
}