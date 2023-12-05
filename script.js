let button = document.querySelector(".download");
let successMessage = document.querySelector(".success");

button.addEventListener("click", () => {
    fetch(`https://randomuser.me/api`)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        
        let block = `<div class="element">
        <img src="${data.results[0].picture.large}" alt="Image"/>
        <p>Сity: ${data.results[0].location.city}</p>
        <p>Сountry: ${data.results[0].location.country}</p>
        <p>Postcode: ${data.results[0].location.postcode}</p>
        <p>Email: ${data.results[0].email}</p>
        </div>`;
        document.querySelector(".out").insertAdjacentHTML("beforeend", block);
        console.log(data);
    });
});

function showSuccess() {
    successMessage.style.display = "block";
}
