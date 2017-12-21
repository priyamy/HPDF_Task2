# HPDF
### Hasura Product Development Fellowship

HPDF offers training to students and helping them build an app right from the scratch. Various tasks are assigned to interns throughout the period of 8-weeks to train, help, test, improve and tranform interns as 'Developers'. This repository contains back-end work adapted for app development.

## NodeJS-Express
We used NodeJS which is an open source, browserless, run-time environment that allows us to run JavaScript code on **server side**. NodeJS has a default package manager called **npm** (Node Package Manager). npm helps in installing, sharing and reusing code and it is used for managing dependencies/packages/modules in NodeJS.
*To know more about NodeJS see [here](https://nodejs.org/en/about/).*  


The server side framework that we would be using here is ExpressJS(or Express). It is very popular and widely used because of its minimalist, fast and flexible behavior and set of features, methods, middlewares and template engines it provides. *Read [more](http://expressjs.com/).*


## Pre-requisites
- [X] **NodeJS v8.9.3 LTS** :    
   - Download [here](https://nodejs.org/en/download/)
- [ ] *[Only for Windows]* **Git Bash** : A Linux Command Line Interface(CLI), that enables users of Windows OS to execute git commands.
   - Download [here](https://git-scm.com/download/win)
   - Find the Installation Guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [X] **Text Editor** : Use a text editor of your choice. Some of the editors are listed below :
   - Vim
   - Sublime
   - Eclipse
   
## Getting started
**Key concepts**
- localhost - also known as loopback address describes the local computer(where our program runs) address and uses the IP address 127.0.0.1. So localhost and 127.0.0.1 can be used interchangeably.
- Port - It is a endpoint used for communication in the internet protocol. The port numbers range from 0 to 65535. Currently, we have used port 8080 in this project. 
- Modules - It is a library or file that can be imported into our file using `require()`. We have used the following modules:   
   - express    
   - path    
   - request   
   - cookieParser
   - bodyParser
- Routing - It determines how the app responds to requests made by user/client at a particular endpoint.   
   - The function used to define routes is `app.METHOD(path,handler)`
- Methods used   
   - app.set(name, value)
   - app.use(path,callback,[,callback...])
   - app.get(path,callback,[,callback...])
   - app.post(path,callback,[,callback...])
   - app.listen(port,[hostname],[backlog],[callback])
- Request object - represents HTTP request and has request query string properties.
   - Property used
    1. req.body
    2. req.cookies
- Reponse object - represents HTTP response that the app sends on getting a request.
   - Methods used
    1. res.send([body])
    2. res.sendFile(path[,options][,fn])
    3. res.cookie(name,value[,options])
    4. res.render(view[,locals][,callback])
    5. res.end([data][,encoding])
- Cookies - a small piece of data in key-value format sent on client's host by server request for session management, tracking, etc.
- Template engines - express provides template engines which transforms static template files into HTML files at run-time by replacing the variables in template file with the desired values. It thus eases the server code cluttering with HTML. This project uses pug template engine.   
  - pug - The default engine. The format of .pug is based purely on indentations(nesting).The text at start of a line represents HTML tag, which are then nested to resemble structure of HTML. The tags are automocally self closing.  


## Step-by-Step Guide
After successfully installing all the prescribed softwares follow the steps given below:

   **Step 1: Type the following commands on the CLI** *(Git Bash for windows)*
   1. `$  mkdir MyWebapp` : *Makes a directory named MyWebapp*
   2. `$  cd MyWebapp` : *This changes the current working directory to MyWebapp*
   
   **Step 2: On the GitHub page of this account**
   1. Click on the button named **Clone or Download**
   2. Copy the URL https://github.com/priyamy/HPDF.git
   
   **Step 3: Back on the CLI** *(Git Bash for Windows)* **type**
   1. `MyWebapp$  git clone https://github.com/priyamy/HPDF.git` : *inside our working directory type `git clone` followed by the URL of the repository you want to clone.*
   Note: You can also access the files by downloading zip file and then unzipping it.
   2. `MyWebapp$  ls` : *It will show the HPDF folder*
   3. `MyWebapp$  cd HPDF` : *loads HPDF directory*
   4. `HPDF$  ls` : *Lists all the files which were present in this repository as shown below*
     - 2017.jpg   package.json    package-lock.json   server.js     views
   5. `HPDF$  npm install` : *installs all the required dependencies mentioned in package.json file. To know more about package.json click* [here](https://docs.npmjs.com/files/package.json).
   6. `HPDF$  node server.js` : *command used to run our app*
   
   
   **Step 4: Open the browser**
   1. Go to http://localhost:8080/ or http://127.0.0.1:8080/ and you will see **Hello World - Priyam** displayed.
   
   Note : you can even replace the port 8080 in the program with any other port (except 80 and 443, find out why?) and execute. 

## API Reference
1. [Node.js v9.2.1 API Documentation](https://nodejs.org/api/)
2. [npm API Documentation](https://docs.npmjs.com/)
3. [Express 4.x API](http://expressjs.com/en/4x/api.html)

## Tasks to study and understand fundamentals of NodeJS-Express 
|**Task Nos.**| **Endpoint** | **Expected Response** |
|:---:|---|--|
|1| http://localhost:8080/ | Display a simple string "Hello World-yourName" |
|2| http://localhost:8080/authors | **a)** Fetch a list of authors from a request to https://jsonplaceholder.typicode.com/users |
| |  | **b)** Fetch a list of posts from a request to https://jsonplaceholder.typicode.com/posts |
| |  | **c)** Display the list of authors and the count of their of posts (a newline for each author) |
|3| http://localhost:8080/setcookie | Set a simple cookie with values as name = \<your-first-name> and age = \<your-age> |
|4| http://localhost:8080/getcookies | Fetch the set cookie and display the stores key-values in it |
|5| http://localhost:8080/robots.txt | Deny requests  |
|6| http://localhost:8080/image | Render an image |
|7| http://localhost:8080/input | A text box which sends the user-input data as POST to /result |
| | http://localhost:8080/result | Logs the received data (POST from /input) to stdout |

## References
1. ExpressJS, http://expressjs.com/
2. NodeJS, https://nodejs.org/en/
3. npm, https://www.npmjs.com/
4. Express web framework(Node.js/Javascript), MDN web docs, https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs2.
5. Pug, https://pugjs.org/api/getting-started.html

## Credits
[Hasura Edu](https://hasura.io/)
