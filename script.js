function showAlert() {
    alert ("You clicked I'm Feeling Lucky!");
}

function searchClick() {
    window.open('https://www.google.com/search?q='+ document.getElementById("search_engine").value);
    alert(document.getElementById("search_engine").value)
}