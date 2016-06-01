$(document).foundation();

var buildColorDiv = function(color) {
  return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
};

var buildList = function(listValues) {
  var dl = document.createElement('dl');
  dl.style.border = '1px solid red';
  dl.innerHTML = buildListItem('First Name', listValues.firstName) +
    buildListItem('HairColor', listValues.hairColor) +
    buildListItem('Age', listValues.age) +
    buildListItem('Birthplace', listValues.birthplace);

  return dl;
};

var buildListItem = function(term, definition) {
  var li = ' \
    <li> \
      <dt>' + term + '</dt> \
      <dd>' + definition + '</dd> \
    </li>';
  return li;
};

var addValuesToDetails = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('div.details');
  var hairColor = this.hairColor.value;

  var listValues = {
    firstName: this.firstName.value,
    age: this.age.value,
    birthplace: this.birthplace.value,
    hairColor: buildColorDiv(hairColor)
  };

  details.appendChild(buildList(listValues));
};

var myForm = document.querySelector('form');
myForm.onsubmit = addValuesToDetails;
