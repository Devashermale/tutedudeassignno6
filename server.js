const http = require('http');
const server = http.createServer( (req,res)=>{

    if (req.url ==='/'|| req.url==="/home") {
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`
            
<html>
<head>
   
    <title>task 2</title>
  <style>
    body{
    overflow: hidden;
    height: 150%;

}
header{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.logo{
    display: flex;
    block-size: 50px;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-right: 20px;
    
}
.navbar ,ul{
    display: flex;
    flex-direction: row;
    list-style-type:none;
    align-items: center;
    font-size: 20px;
    text-transform: capitalize;
    gap:50px   
}
a{
     text-decoration: none;
     color: black;
}
.profile{
position: relative;
height: 90px;

}
#button{
    position: absolute;
    top:35%;
    left: 70%;
    transform: translate3d(-50%, -50%);
padding: 15px 10px 10px 10px;
border-radius: 5px;
border: none;
background-color: skyblue;
color: aqua;
}
main{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.ad{
    text-align: start;
    left: 50%;
    margin-top: 100px;
    margin-left: 250px;
}
p{
    color:rgb(28, 27, 27);
}
.laundy-img{
    height: 170px;
    margin-top: 200px;
}
.laundry-btn{
    color: white;
    background-color: rgb(22, 173, 223);
    padding: 15px 30px 15px 15px;
    margin-top: 10px;
    border-radius: 15px;
    border: none;
    
}
img{
    height: 400px;  
     margin-top: 100px;
     margin-left: 50px;
}
  </style>
</head>
<body>
    <header class="header">
<div class="logo">
    <h1>Logo</h1>
</div>
<nav class="navbar">
    <ul>
            <li ><a  class="moving-class" href="home">home</a></li>
        <li><a class="moving-class" class="moving-class" href="contact">services</a></li>
        <li><a href="about">about us </a></li>
        <li><a href="services">contact us</a> </li>
    </ul>
</nav>
<div class="profile">
    <button id="button">username</button>
</div>


    </header>
    <main class="main">
        <section class="text-of-ad">
        <div class="ad">
            <h1>Revutalize your <br>
                Clothes with Expert
            </h1>
            <h1 style="color: aqua;">Laundry Services!</h1>
            <p>from premium dry cleaning to swift wash and fold we <br> deliver care and convience.schedule a pickup and <br>rediscover the freshness of your cloths today!</p>
           
        <button type="button" class="laundry-btn">Book service today!</button>
        </div>
    </section>
        <section class="laundry-1">
       <div class="laundry-img">
        <img src="./public/laundryp.png" alt="laundry-img">
       </div>
        </section>
    </main>
  
    
</body>
</html>
             `);
        res.end();
    }else if (req.url==='/about') {
        res.writeHead(200,{"content-type":"text/html"});
        res.write(`
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>about us </title>
    <style>
  header{
    text-align: center;
    background-color: blue;
    height: 100px;
    padding: 50px;
  }
    
  main{
    background-color: grey;
  }
    .mission{
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: pink;
        }
        .first-div>img{
          height: 220px;
          width: 220px;
          padding: 100px;
        }
        .second-div{
         text-align: left;
        padding: 100px;
        }
    .info-about-us{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        margin: 20px;
    }
    .info-customer{
        text-align: center;
        padding: 40px;
        background-color: white;
        margin:20PX ;
         border:5px solid black ;
        border-radius:20px ;

    }
    .info-customer>p ,.info-founder>p , .info-how>p{
     margin-bottom: 0;
    }
    .info-how{
        text-align: center;
        padding: 40px;
         border-radius: 10px solid black; 
        margin-bottom:20PX ;
        background-color: white;
         margin: 20PX;
          border:5px solid black ;
        border-radius:20px ;
    }
     .info-founder{
        text-align: center;
        padding: 40px;
        margin:20PX ;
        background-color: white; 
        border:5px solid black ;
        border-radius:20px ;
       
    }
    </style>
</head>
<body>
    <header>
        <h1>about us </h1>
    </header>
    <main>
     <div class="mission">
        <div class="first-div">
            <img src="./cleaning.png" alt="laundry">
        </div>
        <div class="second-div">
            <h4>our mission</h4>
            <p>
        Laundrywala is positioned as a rapidly expanding, tech-driven, eco-friendly, and premium laundry service in India. A strong mission statement should focus on convenience, trust, sustainability, and quality
            </p>
        </div>
    </div>
    <div class="info-about-us">
          <div class="info-customer">
            <h4> customer</h4> 
            <p>1000+</p>
            <h4>purpose </h4>
          <p>professional convenient and affordable laundry and dry-cleaning services</p>
        </div>
          <div class="info-how"> 
            <h4>how many clothes cleaned</h4>
            <p>3 lakh +</p>
          
            <h4>service</h4>
             <p>
             comprehensive garment care, featuring wash and fold, professional dry cleaning, steam ironing, and specialized care for delicate fabrics.
            </p>
        </div>
          <div class="info-founder">
             <h4>founded by and year </h4>
             <p>dev shermale(2026)</p>
             <h4> employee size</h4>
             <p>30+</p>
             </div>
    </div>
    </main>
   
</body>
</html>
             `);
        res.end(); 
    } else if(req.url==='/contact') {
    res.writeHead(200,{"content-type":"text/html"});
        res.write(`
<html>
<head>
    <title>contact-us</title>
    <style>
        body{
            padding: 0;
            margin: 0;
            background-color: darkgreen;
        }
     .contact-center{
        text-align: center;
     }
     .form {
        display: flex;
        flex-direction: column; 
        align-content: center;
        align-items: center;
         background-color: white;
         margin-left: 500px;
         margin-right: 500px;
         border: 5px solid black;
         border-radius: 10px;
    
     }
     .form>input{
        height: 30px;
        width: 360px;
     }
     label{
        text-align: left;
     }
     textarea{
       height: 130px;
        width: 360px; 
     }
     button{
        margin: 10px;
        height: 30px;
        width: 360px;
        
     }
    </style>
</head>
<body>
    <header class="contact-center">
        <h1>contact-us</h1>
    </header>
    <main>
        <form class=" form">
            <label for="full name">full name</label>
            <input type="text" placeholder="enter your name" required>
            <label for="email">email</label>
            <input type="text" placeholder="email id" required>
            <label for="query">query</label>
            <textarea >query</textarea>
        <button type="submit">submit</button>
        </form>
    </main>
</body>
</html>
             `);
        res.end();
        
    }else
    {
        res.writeHead(404,{"content-type":"text/html"});
        res.write(`
            <html>
          <head>
          <title>
           error
     </title>
</head>
<body>
   <h1>
page not found
</h1>
</body>
</html>

             `);
        res.end();
    }
})
server.listen(3000,()=>{
    console.log(`http://localhost:${3000}/`);
    
})