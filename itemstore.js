module.exports = function() {
	var me = this;
	var size =0;
	var _item = [];
	var _prop = [];

    (function() {
        // read-only properties
        Object.defineProperty(me, 'size', {get: function() { return size; }});
        // Methods declaration, read-only
        Object.defineProperty(me, 'append', { value: append });
        Object.defineProperty(me, 'remove', { value: remove });
        Object.defineProperty(me, 'setProp', { value: setProp });
        Object.defineProperty(me, 'getProp', { value: getProp });
        Object.defineProperty(me, 'each', { value: each });
    })();

    // Methods implementation
    function append(item, prop) {
        if (item) {
            _item.push(item);
            _prop.push(prop ? prop : null);
            size++;
        }
    }

    function remove(item) {
    	var i = _item.indexOf(item);
    	if (i > -1) {
    		_item.splice(i, 1);
    		_prop.splice(i, 1);
	    	size--;
	    	return true;
    	}
    	return false;
    }

    function getProp(item) {
    	var i = _item.indexOf(item);
    	if (i > -1) {
    		return _prop[i];
    	}
    	return null;
    }

    function setProp(item, prop) {
    	var i = _item.indexOf(item);
    	if (i > -1) {
    		_prop[i] = prop ? prop : null;
    		return true;
    	}
    	return false;
    }

    function each(func) {
    	if (func instanceof Function) {
    		for (var i = 0; i < size; i++) {
    			func(_item[i], _prop[i]);
    		}
    	}
    }
};