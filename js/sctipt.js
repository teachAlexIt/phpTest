fetch('test.php')
    .then(response => response.text())
    .then(data => {
        var jsVar = data;
        console.log(jsVar); // Выведет значение из PHP
    });