var fs = require('fs');
var path = process.argv[2];
var buff = (fs.readFileSync(path)).toString();
if (buff.match(/\n/g) == null) {
	console.log(0);
} 
else {
	console.log(buff.match(/\n/g).length);
}


/***Official solution***

 note you can avoid the .toString() by passing 'utf8' as the  
     second argument to readFileSync, then you'll get a String!  
      
     fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  
*/
