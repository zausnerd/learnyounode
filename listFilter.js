//the implementation file for listFilter
var fs = require('fs');
var path = require('path');
module.exports = function(dir, extension, callback) {
	fs.readdir(dir, function(err, list){
		if (err) {
			return callback(err);
		}
		var filteredList = [];
		for (var i = 0; i < list.length; i++) {
			if (list[i].indexOf("." + extension)!= -1) {
				filteredList.push(list[i]);
			}
		}
		callback(null,filteredList);
	});
}