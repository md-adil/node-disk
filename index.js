var Local = require('./local');
var AWS = require('./aws');
var Memory = require('./memory');
var FTP = require('./ftp');

module.export = function() {
	return module.export[this.__default || 'local'];
};

module.export.setDefault = function(def) {
	this.__default = def;
};

module.export.aws = function(bucket) {
	return new AWS(

	);
};

module.export.local = function() {
	return new Local();
};


module.export.ftp = function() {
	return new FTP();
};

module.export.memory = function() {
	return new Memory();
};
