// Sample to start writing tests

function Sample() {

}

Sample.prototype.add = function(x, y) {
	var result;

	result = x + y;
	if (parseInt(result) !== result) {
		result = parseFloat(result.toFixed(1));
	}

	return result;
};
