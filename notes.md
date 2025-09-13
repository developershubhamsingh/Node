# All about the node notes : 
# https://endoflife.date/  
# https://survey.stackoverflow.co/2025/technology/

git init    
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/developershubhamsingh/Node.git
git push -u origin main

git remote add origin https://github.com/developershubhamsingh/Node.git
git branch -M main
git push -u origin main


# Node.js lets you run JavaScript outside the browser, especially on the server.
# It is used to build server-side applications.

# Nodejs : 
    <!-- - single threaded . Thread = Instructions execute करने का रास्ता -->
    <!-- - async . ( multiple things are happening parallel ). tasks runs in backgrounds -->
    <!-- - non blocking I / O . -->

# NPM: https://www.npmjs.com/
    It is a open source registry where all packages are kept that anyone can try and contribute to the developments .

# packages : supporting library .
    
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

# package.json : 
        This is Entry point to the applications .
        Contains metadata (name,version.descriptions).
        Contains scripts( run ,build,test) .
        Contains all record of the package install .

# step to generate package.json 
     NodejS must be installed in laptop
     go inside the folder using cmd/terminal
     type npm init / npm init -y
     answer all questions
     type YES

# package-lock.json : 
   > with which package which dependency came  .
   > it tells which package depends on what .

# for node modules : npm i
    > it first installs the main package by checking the package.json then looks for child dependency of the package from the package-lock and then install .

# gitignore : when you push the code to the git it ignores the node module folder .

local dep
global
dev

# step to install package(local dep)
    NodejS must be installed in laptop
    > go inside the folder using cmd/terminal
    > npm i package name / npm install package@version
    
# for dev dependency
    > npm i package name --save-dev
    > package which is required at the time of development called as dev dependencies like Logging or for test cases.
    > npm i chai --save-dev 
    > hence node module is heavy folder to avoid the load over that we divide what to install on server wht not to install we differentiate between that .
      
# Basic NodeJS (Inbuilt package in node) (in built)(Os,file,http)

# callback function : when we pass function as a parameter in another function .

# Apis : It is a url , developed in backend by any language ,that returns json format of data when hit or calls . 

# Rest full Apis: Every request act as new request .
 ex : you search for some records later again you search for new records that will not save data anywhere .

local host = or = 127.0.0.1: port numbers
avoid port numbers 8080 

# node is a framework that creates its on server .

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

# CRUD
Create Read Update Delete

Post   Get  Put    Delete

Post> insert data in database
Get > Retrieve the data
Put/Patch > Update the records
Delete > Remove

=> To access the method from the express we have to make the objects of express.

=> Try express router when dealing with routes . 

=> ejs(embedded js) / swig / pug /vas handle bar are template engine  middleware (i.e.supporting library) for making small application and showing less content with ui .

=> in normal index.js file you cannot binned the data but through ejs you can binned .

=> npm i ejs .
=> when writing logics <% logics %> 
=> else for binding <%=variable names%> 

=>destructing in js:if both the side have the same value then remove one value and write one value .
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
 
 # connecting mongodb :
  > npm i mongodb
  > create categoryRouter.js in controller .
  > default port of mongodb 27017 .