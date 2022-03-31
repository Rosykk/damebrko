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