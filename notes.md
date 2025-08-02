https://endoflife.date/  
https://survey.stackoverflow.co/2025/technology/

Node.js lets you run JavaScript outside the browser, especially on the server.
It is used to build server-side applications.
Nodejs : 
    - single threaded . 
    - async . ( multiple things are happening parallel ).
    - non blocking I / O .

NPM: https://www.npmjs.com/
    It is a open source registry where all packages are kept that anyone can try and contribute to the developments .

    
json : 
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

package.json : 
        This is Entry point to the applications .
        Contains metadata (name,version.descriptions).
        Contains scripts( run ,build,test) .
        Contains all record of the package install .

step to generate package.json 
     NodejS must be installed in laptop
     go inside the folder using cmd/terminal
     type npm init / npm init -y
     answer all questions
     type YES

    
local dep
global
dev

step to install package(local dep)
    NodejS must be installed in laptop
    > go inside the folder using cmd/terminal
    > npm i package name / npm install package@version

for dev dependency
    > npm i package name --save-dev
    > package which is required at the time of development called as dev dependencies like Logging .
    > npm i chai --save-dev 
    
Basic NodeJS(in built)(Os,file,http)
callback function : when we pass function as a parameter in another function .
Apis : It is a url containing data within , developed in backend by any language ,that returns json format of data when calls . 

Rest full Apis: Every apis act as new request . 

nodemon : 
    every time we make change in file or code we need restart the server to reflect in the browser so nodemon package helps to get over this.
    npm i nodemon

install global packages
    # window
    > open cmd as admin
    > npm i -g nodemon
    
    make changes in package.json
        "scripts": {
            "start": "node http.js",
            "dev": "nodemon http.js"
        }

CRUD
Create Read Update Delete

Post   Get  Put    Delete

Post> insert data in database
Get > Retrieve the data
Put/Patch > Update the records
Delete > Remove