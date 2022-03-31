window.onload = function WindowLoad(event) {
  disableButton();
}

function trigger() {
    let input = document.getElementById('search');
    let regex = /^\s*$/;

    if ( regex.test(input.value) == false ) {
      enableButton();
    }

    if ( regex.test(input.value) == true ) {
      disableButton();
    }
}

function initAutocomplete() {
  const options = {
    componentRestrictions: { country: 'cs' },
    fields: ['address'],
    strictBounds: true
  };

  const input = document.getElementById('search');
  const searchBox = new google.maps.places.Autocomplete(input);
  searchBox.setComponentRestrictions({'country': ['cz', 'sk']});
}

function disableButton() {
  document.getElementById("button").disabled = true;
}

function enableButton() {
  document.getElementById("button").disabled = false;
}