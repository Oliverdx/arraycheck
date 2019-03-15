Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) === -1;
    });
};

var original = [0, 1, 2, 3, 4];
var modified = [0, 1, 2, 3, 4, 5 , 6];

original = original.assets;
modified = modified.assets;

for(var i = 0; i < original.length; i++){
	original[i] = original[i].key;
}

for(var i = 0; i < modified.length; i++){
	modified[i] = modified[i].key;
}

/* Return the different elements */

modified.diff(original);