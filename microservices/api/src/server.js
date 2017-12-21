// Module dependencies
const express=require('express');
const path=require('path');
const request1=require('request');
const request2=require('request');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');

//Create an object named app for Express application 
const app=express();

//set the view engine
app.set('views',path.join(__dirname + '/views'));
app.set('view engine','pug');

//set the middlewares
app.use(cookieParser());
app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//Displays a simple string at homepage when a 'get' request is received
app.get('/',(req,res) => res.send('Hello World - Priyam'));
 
//Sets two cookies namely name and age, when a 'get' request is made to route /setcookie   
app.get('/setcookie',(req,res) => {
	res.cookie('name','priyam');
	res.cookie('age',19);
	res.send(`Cookies have been set successfully.`);
});

//Fetches the cookies which we have set and displays the key-value pairs. 
app.get('/getcookies',(req,res) => {
	res.send(JSON.stringify(req.cookies));
});

//Denies request to /robots.txt page and renders index.pug for achieving the same
app.get('/robots.txt',(req,res) => res.render('index'));

//Displays an image that is rendered from the server
app.get('/image',(req,res) => res.sendFile(path.join(__dirname + '/2017.jpg')));

//Renders input.pug
app.get('/input',(req,res) => res.render('input'));

//Logs the data which was received as POST from /input to the stdout
app.post('/result',urlencodedParser, function (req, res) {
   console.log(`You have entered : ${req.body.textEntered}`);
   res.end(req.body.textEntered);
});

//Fetches names of authors and count of their post and displays the list.
app.get('/authors',(req,res) => {

	let x=[],count=[],i,j,u,v;

	const options={
		url:'https://jsonplaceholder.typicode.com/users',
		method: 'GET',
		json: true
	};
	const options1={
		url:'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		json: true
	};

	//request1 fetches the names of authors from the url and stores the result in x[]
	request1(options, function(err,response,body)
	{	
		for(i=0,u=body.length;i<u;i++){
			j=body[i].id;		//using j to ensure that the data is stored in a sorted way as per the id sequence				
			x[--j]=body[i].name;	//storing the names in x[] according to their id minus one, so data is stored from x[0] to x[9]
		}
	});
	
	//request2 fetches the count of their posts and stores the result in count[]
	request2(options1, function(err,response,body)
	{	
		for(i =0;i<u;i++) count[i]=0;	//Initialize x[] to 0 having size equal to u i.e. the no. of authors;
	
		for(i=0,v=body.length;i<v;i++){
			j=body[i].userId;	//first,get the UserId 
			count[--j]++;		//increment the corresponding array element such that index=userId-1  	
		};
		
		//Now that we have names array and count array, we send them to authors.pug to display them in the form of lists as prescribed.
		res.render('authors',{list1:x,list2:count});
	});
	
});


let port=8080;
app.listen(8080,() => console.log(`App listening on port ${port}`));
