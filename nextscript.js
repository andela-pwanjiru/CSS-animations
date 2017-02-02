function initiate() {
  var saveButton = document.getElementById('save')
  var retrieveButton = document.getElementById('save')
  saveButton.addEventListener('click', saveItem)
  retrieveButton.addEventListener('click', retrieveItem)

}

function saveItem() {
  var key = document.getElementById('key').value;
  var value = document.getElementById('value').value;
  sesssionStorage[key] = value;

}

addEventListener("load", initiate);
