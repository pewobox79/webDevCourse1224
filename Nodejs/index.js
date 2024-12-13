const fs = require("fs");
const path = require("path");
const http = require("http");



//server
http.createServer((req, res)=>{

    if(req.url === "/"){

        res.end("home")


    } else if(req.url ==="/posts"){

        getPosts()
            .then(response => response.json() )
            .then(data => {

                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(`<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Einkaufsliste</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <header>
<h1>hallo du</h1>
    </header>
    

    <script src="assets/js/main.js" async defer></script>
</body>

</html>`)


         res.end()   })

    }
    

}).listen(8000, ()=> console.log("server läuft auf port 8000"))




























//create Folder

function createFolder() {

    fs.mkdir(path.join(__dirname, '/test'), {}, error => {

        if (error) throw error;
        console.log("folder created")

    })
}

//get post and write to file

async function getPosts(callback) {

    const URL = 'https://jsonplaceholder.typicode.com/posts'
    try {

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("failed to fetch")
        }
        return response





    } catch (err) {

        console.log("error", err)

    }
}

function writeDataToFile(data) {


    fs.writeFile(path.join(__dirname, '/test', 'blogposts.txt'), JSON.stringify(data), err => {
        if (err) throw err
        console.log("data successfully added")
    })

}