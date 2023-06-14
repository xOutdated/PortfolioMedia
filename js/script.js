const test = document.getElementById("peoplelist");

fetch("js/example.json")
  .then(response => response.json())
  .then(data => jsononscreen(data));

function jsononscreen(data) {
    console.log(data);
    data.forEach((element) => {  
        console.log(element)
        test.innerHTML += "<img src='"+element.picture +"' alt='' />";
        test.innerHTML += "<li>" + element.name + "</li>";
        test.innerHTML += "<li>" + element.eyeColor + "</li>";
    });
}