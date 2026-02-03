const http = require('node:http');
const fs = require('node:fs'); 
const server = http.createServer((req, res) =>{
fs.readFile('index.html',(err,data)=>{
    if (req.url==='/'||req.url==='/home') {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(data);
   //this is about page
    } else if(req.url==='/about') {
         res.writeHead(200,{'content-type':'text/html'});
        res.end(`
<html>
<head>
    <title>About Us </title>
    <style>
        body {
            background-color: #f0f0f0;
            margin: 0px;
            padding: 0px;
        }

        .blue-header {
            background-color: blue;
            color: white;
            text-align: center;
            padding: 40px;
        }

        .main-div {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
            background-color: white;
            padding: 30px;
            border: 1px solid gray;
        }

        .title2 {
            text-align: center;
            color: blue;
            text-decoration: underline;
        }

        .box {
            border: 2px solid lightgrey;
            padding: 15px;
            margin-bottom: 10px;
        }

        .footer-area {
            background-color: black;
            color: white;
            text-align: center;
            padding: 20px;
        }

        h1 { font-size: 40px; }
        p { font-size: 18px; line-height: 1.4; }
    </style>
</head>
<body>

    <div class="blue-header">
        <h1>Laundry Wala</h1>
        <b>The Best Cleaning Service in Town</b>
    </div>

    <br>

    <div class="main-div">
        <h2 class="title2">Our Story</h2>
        <p>We started Laundry Wala because we know how hard it is to wash clothes every day. Many people are busy with work and school. We wanted to help our neighbors by giving them clean clothes at a very cheap price.</p>
        
        <p>Our shop uses the best soap and clean water. We make sure that your clothes smell very good when you get them back.</p>

        <br>

        <h2 class="title2">Why Choose Us?</h2>
        
        <div class="box">
            <h3>Fast Delivery</h3>
            <p>We give your clothes back in 24 hours. We don't like to make customers wait.</p>
        </div>

        <div class="box">
            <h3>Safe for Clothes</h3>
            <p>We use soft water so your clothes don't get ruined or lose their color.</p>
        </div>

        <div class="box">
            <h3>Low Price</h3>
            <p>Our rates are the lowest in the city. You can save a lot of money with us.</p>
        </div>
    </div>

    <br><br>

    <div class="footer-area">
        <p>Contact us: 9876543210 | Location: Near Main Market</p>
        <p>2026 Laundry Wala - All Rights Reserved</p>
    </div>

</body>
</html>
            
            `);
        //this is contact page was including html or css 
    } else if (req.url==='/contact') {
        res.writeHead(200,{'content-type':'text/html'});
        res.end(`

<html>
<head>
    <title>Contact Us - Laundry Wala</title>
    <style>
        body {
            background-color: #eeeeee;
            font-family: Arial;
            margin: 0px;
        }

        .top-banner {
            background-color: #0056b3;
            color: white;
            text-align: center;
            padding: 30px;
        }

        .main-container {
            width: 600px;
            margin-left: auto;
            margin-right: auto;
            background-color: white;
            padding: 25px;
            border: 1px solid #cccccc;
            margin-top: 20px;
        }

        .contact-info {
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 5px solid #0056b3;
            margin-bottom: 20px;
        }

        .input-field {
            width: 95%;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid gray;
        }

        .message-box {
            width: 95%;
            height: 100px;
            padding: 10px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid gray;
        }

        .send-btn {
            background-color: green;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }

        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background-color: #333333;
            color: white;
        }
    </style>
</head>
<body>

    <div class="top-banner">
        <h1>Contact Laundry Wala</h1>
        <p>We are here to help you with your laundry!</p>
    </div>

    <div class="main-container">
        <div class="contact-info">
            <h3>Our Shop Details</h3>
            <p><b>Phone:</b> +91 98765 43210</p>
            <p><b>Email:</b> help@laundrywala.com</p>
            <p><b>Address:</b> Shop No. 4, Main Market, Near Railway Station.</p>
        </div>

        <h2>Send us a message</h2>
        <form>
            <label>Your Name:</label><br>
            <input type="text" class="input-field" placeholder="Enter your name">

            <label>Phone Number:</label><br>
            <input type="text" class="input-field" placeholder="Enter your mobile number">

            <label>What do you want to ask?</label><br>
            <textarea class="message-box" placeholder="Write your message here..."></textarea>

            <button type="button" class="send-btn">Submit Now</button>
        </form>
    </div>

    <br><br>

    <div class="footer">
        <p>Copyright 2026 - Laundry Wala</p>
    </div>

</body>
</html>

            `)
    }else{
      res.writeHead(404,{'content-type':'text/html'});
      res.end(err);
    }
})
})
server.listen(3000,()=>{
    console.log(`http://localhost:${3000}`);

})
