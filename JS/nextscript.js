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

function retrieveItem() {
  var data = document.getElementById('data');
  var key = document.getElementById('key').value;
  var value = sesssionStorage[key];
  data.innerHTML = '<div>' + key + ':' + value + '<div>';

}

addEventListener("load", initiate);
