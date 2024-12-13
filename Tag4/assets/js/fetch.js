console.log("hallo bootstrap")
//get element from DOM
const postList = document.getElementById("allPosts")


//global data
const URL = "https://jsonplaceholder.typicode.com/posts"

//helper function

const getAuthorName = (userId) => {
    
    switch (userId) {
        case "1":
            return "Peter";
        case "2":
            return "Michael";
        case "3":
            return "Markus";
        case "4":
            return "Paul"
        default:
            return "Unbekannt"
    }

    /* 
       //equivalent von oben => nur auf BREAK und RETURN achten, sonst ist es wie ein if/else
    let userName = ""
        switch (userId) {
            case "1":
                userName = "Peter";
                break;
            case "2":
                userName = "Michael";
                break;
            case "3":
                userName = "Markus";
                break;
            case "4":
                userName = "Paul";
                break;
            default:
                userName = "Unbekannt"
        }
    
        return userName */

}

//request von daten
fetch(URL)
    .then(response => {

    if (!response.ok) {
        throw new Error("HTTP request failed")
    }

    return response.json();

})
    .then(data => {

    data.forEach((post) => {

        //den author herausfinden
        const userName = getAuthorName(post.userId.toString());

        //template String concept => wichtig hierbei sind die BACKTICKS (``). nur damit sind durch operator ${} JS values auszulesen.
        const cardItem = `<div class="card">
            <div class="card-header" >
                ${userName}
                </div >
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>
            </div>`


        //add each card to frontend
        postList.innerHTML += cardItem

    })



})

