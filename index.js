// // const http = require('http');
// // const data = require('./data');

// // //create a server object:
// // http.createServer(function (req, res) {
// //     res.writeHead(200, { 'content-type': 'application\JSON' });
// //     res.write(JSON.stringify(data)); //write a response to the client

// //     res.end(); //end the response

// // }).listen(3000); //the server object listens on port 8080

// // console.log("mannu")
// // setTimeout(() =>
// // { console.log("2 second log") },2000)

// // setTimeout(() => { console.log("2 second log") }, 0)
// // console.log("iram")

// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
// app.get("/", function (req, res) {

//     res.send(`
//         <h1>HOME PAGE</h1>
//         <form action="/action_page.php">
//         <input type="text" id="fname" name="fname" value="John"><br>
//         <label for="fname">First name:</label><br>
//         <input type="text" id="lname" name="lname" value="Doe"><br><br>
//         <label for="lname">Last name:</label><br>
//         </form>
//         <input type="submit" value="Submit">


//         `);
// });

// app.get("/about", function (req, res) {
//     ``
//     res.send("<h1>ABOUT PAGE</h1>");
// });
// const publicPath = path.json(__dirname, 'public')
// console.log(publicPath)




// app.listen(5000, function () {
//     console.log("its Runing");
// })


// const { name } = require('ejs');
// const express = require('express');
// const app = express();

// const path = require('path');
// const publicPath = path.join(__dirname, 'public');

// app.set('view engine', 'ejs');


// app.get('', function (req, resp) {
//     resp.sendFile(`${publicPath}/index.html`)
// });

// app.get('/about', function (req, resp) {
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/profile', function (req, resp) {
//     const newuser = {
//         name: 'Mannu Sharma',
//         email: 'Mannukumar74000@gmail.com',
//         phone: '+918809823983',
//         skills: 'React.js,Node.js, PHP,C++,',
//     }
//     resp.render('profile', { newuser });
// });

// app.get('/login', function (req, res) {
//     res.render('login');
// })


// app.get('*', function (req, resp) {
//     resp.sendFile(`${publicPath}/nopage.html`)
// })


const express = require('express');
const reqfilter = require('./middleware')
const app = express();
const route = express.Router();

mongoos.connect('mongodb://localhost:27017', { useNewUrlParser: true });

route.use(reqfilter)

app.get('/', function (req, res) {
    res.send('<h1> Welcome To Home Page </h1> ')
})

app.get('/user', function (req, res) {
    res.send('<h1> Welcome To Users Page </h1> ')
})

route.get('/contact', function (req, res) {
    res.send('<h1> Welcome To contact Page </h1> ')
})


app.use('/', route);


app.listen(5000);