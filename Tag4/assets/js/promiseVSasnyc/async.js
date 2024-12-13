//get  elements
const postAnker = document.getElementById("posts");
const loading = document.getElementById("loading");
const loadingButton = document.getElementById("loadingButton");

const URL = "https://jsonplaceholder.typicode.com/users"
//handle data

//helper function
function getCleanedPhoneNumber(phoneNumber, countryCode){

    return countryCode + phoneNumber.replace(/[^a-zA-Z0-9]/g, '').replace(/x/g, '');
}


async function getUsers() {
    loading.style = "display: block"
    loading.innerText = 'Daten werden geladen...'
    postAnker.innerHTML = ""

    setTimeout(async () => {

        try {

            const response = await fetch(URL);

            if (!response.ok) {
                loading.innerText = "Daten konnten nicht geladen werden"
                throw new Error("failed to getUser")

            }
            const data = await response.json();


            data.forEach(user => {

                const cardItem = `<div class="col">
                    <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text">${user.company.name}</p>
                                <p class="card-text"><small class="text-body-secondary"><a href='mailto:${user.email}?subject=Anfrage wegen produkt nummer 5&body=hallo hier ist der kunde'>${user.email}</a></small></p>
                                <p class="card-text"><small class="text-body-secondary"><a href='tel:${getCleanedPhoneNumber(user.phone, '0049')}'>${user.phone}</a></small></p>
                            </div>
                        </div>
                    </div>`


                postAnker.innerHTML += cardItem;
                loading.style = "display: none"
                loadingButton.innerText = "Re-Load Data"

            });


        } catch (error) {
            loading.innerText = "Bitte versuchen sie es später noch einmal..."
            console.error("getUser failed", error)

        }


    }, 2000)/*timeout ende*/



}/* getUsers function ende*/


loadingButton.addEventListener("click", getUsers)

