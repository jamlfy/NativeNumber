if(!java.lang)
	throw 'No exist the java.lang';

var MIN = -2^53;
var MAX = 2^53;

Number.prototype.Byte = function() {
	return new java.lang.Byte(this);
};

Number.prototype.Short = function() {
	return new java.lang.Short(this);
};

Number.prototype.Integer = function() {
	return new java.lang.Integer(parseInt(this));
};

Number.prototype.Float = function() {
	return new java.lang.Float(parseFloat(this));
};

Number.prototype.Double = function() {
	return new java.lang.Double(this);
};

Number.prototype.Long = function() {
	if( this !== +this || this < MIN || this > MAX )
		return  new java.lang.Long(this);

	return this.Float();
};