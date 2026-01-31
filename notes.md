# ===================Day 1 ==================================
# All about the node notes : 
# https://endoflife.date/  
# https://survey.stackoverflow.co/2025/technology/

# git bash : through git bash you can push code to github.
# ctrl + f to search in a file .

git init    
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/developershubhamsingh/Node.git
git push -u origin main

git remote add origin https://github.com/developershubhamsingh/Node.git
git branch -M main
git push -u origin main


# Node.js allows to run JavaScript outside the browser, especially on the server.
# It is used to build server-side applications.

# Nodejs : it is single threaded ,async ,non blocking I / O .
  > Thread = A way to execute Instructions .
  
  > single threaded  : Node.js uses only one main thread to handle all client requests.

  > async : Multiple tasks can be started without waiting for previous tasks to finish. 

  > non blocking I / O : Input/Output tasks (like reading file, DB query, API call) run in the background, and meanwhile Node.js can accept new requests.

# NPM: https://www.npmjs.com/
    It is a open source registry where all packages are kept that anyone can try and contribute to the developments .
 
# packages : it is a supporting library , in Nodejs we have node modules library.
    
# json : 
    javascript Object Notation .
    Format to represent the data .
    It is array of objects .

Ex : [
        {
            name: "3idiot" ,
            type :"education" ,
            ind : "bollywood"
        },
        {
            name: "Kyo ki" ,
            type :"drama" ,
            ind : "bollywood"
        }
    ]

object : single records but array of objects is multiple records mentioned above.
     {
            name: "3idiot" ,
            type :"education" ,
            ind : "bollywood"
        }
# package.json : 
        This is Entry point to the applications .
        Contains metadata (name,version.descriptions).
        Contains scripts( run ,build,test) .
        Contains all record of the packages install .

# step to generate package.json 
     NodejS must be installed in laptop
     go inside the folder using cmd/terminal
     type npm init / npm init -y
     answer all questions
     type YES

# package-lock.json : 
   > it is dependency tree .
   > it tells with which package which dependency came  .
   > it tells which package depends on what .

# for node modules : npm i 
    > node modules is a folder where all the package gets install .
# npm i
    > it first installs the main package by checking the package.json then looks for child dependency of the package from the package-lock and then install .

# gitignore : when you push the code to the git it ignores the node module folder .

local dep
global
dev

# step to install package(local dep)
    NodejS must be installed in laptop
    > go inside the folder using cmd/terminal
    > npm i package name / npm install package@version

# ===================Day 2 ==================================

# for dev dependency
    > npm i package name --save-dev
    > package which is required at the time of development called as dev dependencies like Logging or for test cases.
    > npm i chai --save-dev 
    > hence node module is heavy folder to avoid the load over that we divide what to install on server wht not to install we differentiate between that .

# Basic NodeJS (Inbuilt package in node) (Os,file,http)

1 KB = 1024 bytes        
1 MB = 1024 × 1024 bytes = 1,048,576 bytes
1 GB =1024 × 1024 × 1024 bytes = 1,073,741,824 bytes

# fs : 
writefile()
    > it takes 3 parameters (filename ,data ,callback).
    > it replace the content when run twice or thrice.
appendFile()
    > it takes 3 parameters(filename ,data ,callback).
    > it adds the new content when run twice or thrice.
readFile()
    > it takes 3 parameters(filename ,encoding ,callback).
    > callback takes two parameters i.e. (error ,data).
unlink()
    > it takes 2 parameters(filename ,no param callback).
    > But do error handling in callback to track the error because if file is not there even then it sat file deleted. 
rename()
    >it takes 3 parameters(oldFilename ,newFilename ,callback).
    
# callback function : when we pass function as a parameter in another function .

# Apis : It is a url , developed in backend by any language ,that returns json format of data when hit or calls . 

# Rest full Apis: Every request act as new request .
 ex : you search for some records later again you search for new records that will not save data anywhere .

local host = or = 127.0.0.1: port numbers
avoid port numbers 8080 

# Node.js is a runtime environment that allows to run JavaScript outside the browser and also create their own server. 

# Handling Routes with http is difficult so Express is there for creating servers and handling routes.

# Express.js ek lightweight Node.js framework hai jo server, routing, middleware aur API development ko easy banata hai.

# express is a framework that is used in nodejs for creating server and handling routes.
 > It creates servers, handles routes, and using middleware much easier.
 > If you create a server using only Node.js, you have to write more code. But with Express.js, the same work becomes shorter and simpler.

# nodemon : 
    every time we make change in file or code we need to restart the server to reflect in the browser so nodemon package helps to get over this.
    npm i nodemon

# install global packages
    # window
    > open cmd as admin
    > npm i -g nodemon
    
#  make changes in package.json
        "scripts": {
            "start": "node http.js",
            "dev": "nodemon http.js"
        }
# Express : frames works of nodes .

=> create folder .
=> npm init -y
=> create .gitignore file .
=> create readme.md file .
=> npm i express .
=> create aps.js file .
=> write "scripts": {
            "start": "node aps.js",
            "dev": "nodemon aps.js"
        }
# Express.js → Server बनाता है
Routes बनाना
APIs बनाना
Request–Response handle करना
Backend की पूरी structure बनाना
Express = Server

# A route in Express is defined by the HTTP method and the path; changing the path creates a new route.

# In Express, a route that returns data (JSON) is considered an API endpoint.

# CRUD
Create Read Update Delete

Post   Get  Put    Delete

Post > insert data in database
Get > Retrieve the data
Put/Patch > Update the records
Delete > Remove

=> To access the method from the express we have to make the objects of express.

=> Try express router when dealing with routes . 

# ===================Day 3 ==================================

=> ejs(embedded js) / swig / pug /vas handle bar are template engine middleware (i.e.supporting library) for making small application and showing less content with ui .

=> in normal index.js file you cannot binned the data but through ejs you can binned .

=> npm i ejs .
=> when writing logics <% logics %> 
=> else for binding <%=variable names%> 

=> destructing in js : if both the side have the same value then remove one value and write one value .
    ex: category = category (then write it as only)  category .

# Database (Mongodb) : 

Sql : 
> structured .
> Data is represented in tabular format .
> Chances of memory get wasted.
> it require predefined schema .
> Ex :
    Roll No.| Hindi | English |
      1     |  80   |         |
      3     |  90   |         |

MongoDb (NoSql) : 
> unstructured .
> data is represented in json format .
> No Chance of memory wasted .
> it  is schema less .
> Ex : 
    [
     {
        "roll no : 1 ,
        "hindi"  : 80,
     } ,
      {
        "roll no : 1 ,
        "english"  : 70,
     }   ,
      {
        "roll no : 1 ,
         "hindi"  : 90,
        "computer"  : 80,
     } 
    ]

# MongoDb setups : 
> Locals.
> Clouds.

 # Need to install two things : 
  # > mongo compass : Interface ( i.e GUI).
  # > mongodb community edition :To start the server .

# connecting mongodb :
  > npm i mongodb
  > create categoryRouter.js in controller .
  > default port of mongodb 27017 .

# Change the port if want to run on other : 
<!-- agar data kisi or folder me rakhna ho -->
    mongod --port 27018 --dbpath "C:\data\db" 
    
<!--agar port change karna ho   -->
    mongod --port 27018
    then change mongoUrl then it will work
# ===================Day 4 ==================================

#  > Always get the data from database .
#  > Rare case w get data from file .

# params :
# > what we pass after /(slash).
# > compulsory to defile in the routes .

# Query params : 
# > what we pass after ? (que.marks).
# > no need to defile in the routes its optional.

# weather apps  : 
# > key: fbf712a5a83d7305c3cda4ca8fe7ef29
# > https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid= ${process.env.KEY}

# > key =b8a5e083be34c10a318010d587eb276c
# > let url = "https://api.openweathermap.org/data/2.5/forecast?q=Delhi,IN&units=metric&appid=b8a5e083be34c10a318010d587eb276c";

# Note: 
✅ Option 1: Use /forecast (Free plan)

# > यह अगले 5 दिनों का data देता है, हर 3 घंटे पर एक record के साथ।
# >let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.key}`;

 # > फिर data access करते समय:
result.list[i].main.temp
result.list[i].weather[0].description
result.list[i].dt_txt

# >✅ Option 2: Use /one call (For daily forecast)

# >अगर तुम्हें “daily forecast” (हर दिन का data) चाहिए,तो तुम्हें /onecall API यूज़ करना होगा।

# > let url = `https://api.openweathermap.org/data/3.0/onecall?lat=28.6139&lon=77.2090&exclude=minutely,hourly&units=metric&appid=${process.env.key}`;

# > इसमें तुम latitude और longitude पास करते हो,और फिर result में daily data ऐसे मिलता है 👇
result.daily[i].temp.day
result.daily[i].temp.min
result.daily[i].temp.max


# Babel :

# > Babel is a JavaScript compiler/translator .
# > It Convert new JavaScript (ES6/ES7+) code into older JavaScript (ES5) so that it can run in older browsers and environments as well.

# Why is it important?

# > JavaScript is updated every year with new features (like arrow functions, let/const, async/await).
# > Older browsers or Node.js versions cannot understand these new features.
# > Babel automatically converts modern JS code into an older version, so it works everywhere.

# install few package to work with babel : 
 # >  npm i @babel/core  @babel/preset-env  @babel/register .
 # > then create a file .babelrc and write there 
  {
    "presets":[
        "@babel/preset-env"
     ]
}

  # > then create a file start.js and write there
require('babel-register')({});
module.exports = require('./app.js');
 
 # > then change  "scripts": {
    "script": "node start.js",
    "dev": "nodemon start.js"
  }
  # >adds "main": "start.js",
## mongodb clouds setups: 
 # > free claster : 
 # > Username : shubhamsinghhindustan_db_user 
 # > Password : shubhamsinghhindustan_db_user
 
http://cloud.mongodb.com/

> Create Cluster

> Cloud
* https://www.mongodb.com/
* try free
> signup with google

* Network access
> Add IP 
> 0.0.0.0/0
* Database access
> Create user
Built-in Role
> Atlas Admin
> Add User

mongodb+srv://<db_username>:<db_password>@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

   
 # > Username :   test
 # > Password :  cigVxikvbvqVZRro 
 # > mongodb+srv://test:cigVxikvbvqVZRro@cluster0.2qnsmhd.mongodb.net/?appName=Cluster0


## email with nodes:
# nodemailer . : 
# > npm i dotenv  nodemailer.


# ===================Day 5 ==================================
# Application ------ Redis ------- database .
 # > when user search for data  --> it application first check the redis (if data is not there ) --> then it will go database --> it takes the data stores it to the redis --> return back to the Applications.-->so that next time accessing to the data will be faster  .

 # NOTE: When a user requests data, the application first checks Redis If the data is not found in Redis, it fetches the data from the database, stores it in Redis, and then returns it to the application.Next time, the data is served directly from Redis, making access faster.

# Redis :
# > Redis acts as a cache between the application and the database to improve performance and reduce database load.
 
# Caching Memory :
# > Caching memory stores frequently used data temporarily so it can be accessed faster next time.

 # > default Port no of redis :6379 i.e :127.0.0.1:6379
 # > it save data in keys formats.

 # start redis server : 
   # > open cmd as admin
   # > cd C:\Program Files\Redis
   # > redis-server.exe
   # > again  open cmd 
   # > redis-cli

# This is how we store data :
# > keys * (to see all the key)
# > set  keyname  value 
# > set  keyname  value EX
# > get  keyname i.e(to see the data).
# > del  keyname i.e(to delete the data).
# > FLUSHALL i.e( delete all keys together at once)

# > Note : because of cost effectiveness it does not have database and it does not stores data in collections it is towards data in key and value pairs that's why Redis is not used everywhere in the application and MongoDB is preferred.

# data will stay forever if not giving expiry time i.e(EX).
# > set  keyname  value 
# > set  forever "allTime" 

# data will be saved for 30seconds.
# > set  keyname  value EX
# > set test "testdata" EX 30
 # > Note : here set is a keyword test is lucky name test data is a key value and EX expiry time in 30 seconds.

 # >JavaScript object: 
   यह key–value pair में डेटा रखता है, और इसमें functions भी हो सकते हैं।
   ex: 
   let user = {
    name: "Rahul",
    age: 25,
    isActive: true
};

 # > JSON string : 
👉यह सिर्फ string format में data होता है ।
   इसे server पर भेजते हैं
   API response में मिलता है
   फाइलों में data store करने के लिए उपयोग होता है

  ex : "{\"name\":\"Rahul\",\"age\":25,\"isActive\":true}"
 
# JSON.parse()
 # > किसी JSON string को JavaScript object में बदल देता है
 # >ये ज़्यादातर API से आने वाले data को object बनाने में उपयोग होता है।
    let jsonString = '{"name":"Aman","age":25}';
    let obj = JSON.parse(jsonString);
    console.log(obj.name);  // Output: Aman

 # > JSON.stringify()
 # >किसी JavaScript object को JSON string में बदल देता हैताकि:।
 # > उसे API द्वारा server पर भेज सकें
 # > उसे file/database में save कर सकें
 # > उसे इंटरनेट पर ट्रांसफर कर सकें
 ex:
    let obj = { name: "Aman", age: 25 };
    let jsonString = JSON.stringify(obj);
    console.log(jsonString); 
     // Output: {"name":"Aman","age":25}

# Async–Await ?
API call (axios, fetch)
Database query (MongoDB, MySQL)
Redis operations
File read/write
setTimeout, promises
# >Async–await is used for any task that takes time to complete.

# Axios → 3rd Party API से Data Fetch करने के लिए 
External API से data लाने के लिए
अपने server से दूसरे server को request भेजने के लिए
Ex :const data = await axios.get("https://api.example.com/users");

### ✅ Nodemailer :
 
# > Nodemailer is a Node.js module used to send emails from your server.

# When is Nodemailer used?
1) OTP / Verification Email
Sending a 6-digit OTP to the user during login or signup.

2) Password Reset Email
Sending a password-reset link when the user clicks “Forgot Password”.

3) Welcome Emails
Sending a welcome message right after a user signs up.

4) Order Confirmation / Invoice Email
Used in e-commerce websites to send order details or invoices.

5) Contact Form Submissions
When a user fills a contact form, the message is sent to your email inbox.

6) System Alerts / Notifications
Automatically sending notifications from the server, such as:
“Low Memory”
“Error Occurred”
“Server Warning 

# > > const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmail,
        pass: smtp key 
    }
})
# > ab gmail app password option disable kr diya hai zo ki SMTP key hota hai   
 auth {
     user:gmail ,
     pass: no app password  (i.e no smtp key without this email cannot be sent ).
     }
# >> Better to go with Resend API Key sign up and generate key safe fully https://resend.com/onboarding .
# >> whe going with resend the go with syntax (there will be no services only host port auth ): 
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,       // TLS recommended
  secure: false,   // false because 587 uses STARTTLS 
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY
  }
  noneed to write secure Nodemailer automatically secure: false मान लेगा क्योंकि port 587 है
});

### > imageuploads (with multer):
# > Multer का काम = Node.js में फ़ाइल Upload करवाना (जैसे Image, PDF, Video वगैरह)।

# > जब कोई user form में file भेजता है:
 >> तो ये data साधारण JSON नहीं होता।
 >> इसे Express समझ नहीं पाता।

👉 Multer इस "multipart/form-data" को पढ़ने और files को server में save करने का काम करता है।

>> Earlier images were saved in the database .
>> But now we save it in a folder or uploading it to the object storage i.e s3bucket (AWS) etc.
# =================== Day 6 ==================================
# headings style 
**For bold**
**_bold itali_**
`color`
*hello*
**hello**
**_hello_**

# > APIS with nodejs : 

**cors क्या करता है ?**
`cors → Cross origin request sharing`
`CORS tells the browser whether a website is allowed to talk to another wesite server or not.`

`CORS browser को ये decide करने में मदद करता है कि एक website दूसरी website के server से data ले सकती है या नहीं।`

`CORS is a browser security rule that allows or blocks a frontend website from accessing a backend server, based on permission sent by the backend.`

**Problem क्या होती है?**
`मान लो:Frontend → http://localhost:3000`
`Backend → http://localhost:7000`
`Browser बोलता है:“Different origin है, data share नहीं कर सकते”`

Origin = Protocol + Host/Domain + Port
url=     http://    localhost:    7000
 
# > npm install cors ;
# Basic Allow All
> app.use(cors()); // sabko allow

# Sirf React app ko allow
>app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

#  Multiple Frontend Allow
> app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mywebsite.com"
    ]
  })
);



**swagger-jsdoc → API documentation generate करता है**
**यह आपके code से API documentation generate करता है यानि comments पढ़कर API समझता है।**

**swagger-ui-express → API docs को browser UI में दिखाता है**
**यह वही API documentation को beautiful UI में browser पर दिखाता है**

**_package_:npm i dotenv express mongodb cors swagger-jsdoc swagger-ui-express**


// // this is how earlier we parse the data //
// import bodyParser from 'body-parser';
// apps.use(bodyParser.urlencoded({ extended: true }));
// apps.use(bodyParser.json());

// // this is how we parse the data now//
//express have install body parser by default //
// Browser या client से आने वाला JSON data पढ़ता है
> apps.use(express.json())
// HTML forms या x-www-form-urlencoded data पढ़ता है//
> apps.use(express.urlencoded({ extended: true }))

**http statas code**
**_200 :_Success सब सही है (Example: data fetch हुआ)**
**_201 :_Created नया data बन गया (POST से कुछ create हुआ)**
**_400 :_Bad Request (तुमने गलत data भेजा)**
**_401 :_Unauthorized  (पहले login करो Token / auth नहीं है)**
**_403 :_Forbidden (Access allowed नहीं है)**
**_404 :_Not Found(जो माँगा वोनहीं मिलाURLया resource गलत)**
**_500 :_Internal Server (Server में problem है Code crash / exception)**

# See recordings 4 basic authentication //

GET कब लिखते हैं?
👉 जब सिर्फ पेज या डेटा देखना हो,
👉 कुछ save / upload नहीं करना हो
✅ Use cases:
Form दिखाना
Page open करना
Data fetch करना

POST कब लिखते हैं?
👉 जब data भेजना हो
👉 जब database में save करना हो
👉 जब image / file upload करनी हो
✅ Use cases:
Form submit
Login / Signup
Image upload
# =================== Day 7==================================

# =================== Day 7==================================

# =================== Day 7==================================
02 hr 05 min redis mongo task recording fifth.