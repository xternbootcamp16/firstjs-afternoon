$(document).foundation()

function addValuesToDetails() {
  this
}

var buildColorDiv = function(color) {
  return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
};

var buildList = function(listValues) {
  return ' \
    <dl> \
      <dt>First Name</dt> \
      <dd>' + listValues.firstName + '</dd> \
        \
      <dt>Hair Color</dt> \
      <dd>' + listValues.hairColor + '</dd> \
        \
      <dt>Age</dt> \
      <dd>' + listValues.age + '</dd> \
        \
      <dt>Birthplace</dt> \
      <dd>' + listValues.birthplace + '</dd> \
        \
    </dl>';
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

  details.innerHTML += buildList(listValues);
};

var myForm = document.querySelector('form');
myForm.onsubmit = addValuesToDetails;
