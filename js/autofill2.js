var options = {
    searchOptions: {
        key: 'XG3hqHtGmUVkbn7rjgdy0yGb3QZ5tTkl',
        language: 'cs-CZ',
        mapcodes: 'Local',
        countrySet: 'CZ,SK',
        basic_main: 'basic_main',
        results: 'Plaintext',
        poi: false,
        limit: 5
    },
    autocompleteOptions: {
        key: 'XG3hqHtGmUVkbn7rjgdy0yGb3QZ5tTkl',
        countrySet: 'CZ,SK',
        basic_main: 'basic_main',
        results: 'Plaintext',
        language: 'cs-CZ',
        poi: false
    }
};
var ttSearchBox = new tt.plugins.SearchBox(tt.services, options);
var searchBoxHTML = ttSearchBox.getSearchBoxHTML();
document.getElementById('search_content').prepend(searchBoxHTML);