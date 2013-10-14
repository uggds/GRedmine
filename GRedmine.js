(function (win) {
    var doc = win.document;
    <!-- var redmineURL = localStorage.getItem('server-url').concat('/projects/', localStorage.getItem('project-name'), '/'); -->
    var redmineURL = localStorage.getItem('server-url').concat(localStorage.getItem('project-name'));
    var keyword = doc.getElementById("keyword");
    keyword.focus();
    keyword.addEventListener("keydown", function (event) {
        if (keyword.value == "") {
            return;
        }
        if (event.keyCode == 13) {
            createGoogleTab();
        }
    }, false);
    var search = doc.getElementById("search");
    search.addEventListener("click", function (event) {
        if (keyword.value == "") {
            return;
        }
        createGoogleTab();
    }, false);
    function createGoogleTab() {
        var urlString = redmineURL + encodeURI(keyword.value);
        chrome.tabs.create({
            url : urlString
        });
        win.close();
    }

})(window);
