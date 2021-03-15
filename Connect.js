

(function(exports, undefined) {
	var ns = exports.Connect = exports.Connect || {};
	var hep=HTMLElement.prototype;
	var nlp=NodeList.prototype;
	
	var ConnectId = (function () {
	  var _order = 0;
	  return function(_ele) {
		if (_ele&&!_ele.id) {
		  _ele.id = "id_ConnectUsed_" + _order++;
		}
		return _ele.id;
	  };
	}());
	/**************Connect**************/
	//Connect for querySelector getElementById
	hep.connect = function (_id, _event_name, _condition = {
			before: function () {},
			after: function () {}
		}) {
		var _tags = this.tagName;
		_tags+="#"+ConnectId(this);
		if (!ns.hasOwnProperty(_tags)) {
			ns[_tags] = {};
		}
		if (!ns[_tags].hasOwnProperty(_event_name)) {
			ns[_tags][_event_name] = {};
		}
		if (!ns[_tags][_event_name].hasOwnProperty(_id)) {
			ns[_tags][_event_name][_id] = {};
		}
		if (_condition.hasOwnProperty('before')) {
			ns[_tags][_event_name][_id].before = {
				f: _condition.before,
			};
		}
		if (_condition.hasOwnProperty("after")) {
			ns[_tags][_event_name][_id].after = {
				f: _condition.after,
			};
		}
	};
	//Connect for querySelectorAll
	nlp.connect = function (_id, _event_name, _condition = {
			before: function () {},
			after: function () {}
		}) {
		for (var i = 0; i < this.length; i++) {
			this[i].connect(_id, _event_name, _condition);
		}
	};
	/*---------------Connect---------------*/

	/**************Disconnect**************/
	//Disconnect for querySelector getElementById
	hep.disconnect = function (_id, _event_name, _condition = {
			before: true,
			after: true
		}) {
		if (_condition.hasOwnProperty("before") && _condition.before) {
			this.connect(_id, _event_name, {
				before: function () {}
			});
		}
		if (_condition.hasOwnProperty("after") && _condition.after) {
			this.connect(_id, _event_name, {
				after: function () {}
			});
		}
	};
	//Disconnect for querySelectorAll
	nlp.disconnect = function (_id, _event_name, _condition = {
			before: true,
			after: true
		}) {
		for (var i = 0; i < this.length; i++) {
			this[i].disconnect(_id, _event_name, _condition);
		}
	};
	/*---------------Disconnect---------------*/

	/**************nss**************/
	//nss for querySelector getElementById
	hep.connects = function (_ids_arr, _event_name, _condition = {
			before: function () {},
			after: function () {}
		}) {
		for (var i = 0; i < _ids_arr.length; i++) {
			this.connect(_ids_arr[i], _event_name, _condition);
		}
	};
	//nss for querySelectorAll
	nlp.connects = function (_ids_arr, _event_name, _condition = {
			before: function () {},
			after: function () {}
		}) {
		for (var i = 0; i < this.length; i++) {
			this[i].connects(_ids_arr, _event_name, _condition);
		}
	};
	/*---------------nss---------------*/

	/**************Disconnects**************/
	//Disconnects for querySelector getElementById
	hep.disconnects = function (_ids_arr, _event_name, _condition = {
			before: true,
			after: true
		}) {
		for (var i = 0; i < _ids_arr.length; i++) {
			this.disconnect(_ids_arr[i], _event_name, _condition);
		}
	};
	//Disconnects for querySelectorAll
	nlp.disconnects = function (_ids_arr, _event_name, _condition = {
			before: true,
			after: true
		}) {
		for (var i = 0; i < this.length; i++) {
			this[i].disconnects(_ids_arr, _event_name, _condition);
		}
	};
	/*---------------Disconnects---------------*/

	/**************On**************/
	//On for querySelector getElementById
	hep.on = function (_event_name = "click", _cb = function () {}) {
		this.addEventListener(_event_name, function (_event) {
			var _tags = this.tagName;
			_tags+="#"+ConnectId(this);

			if (ns.hasOwnProperty(_tags) && ns[_tags].hasOwnProperty(_event_name)) {
				for (var _keyB of Object.keys(ns[_tags][_event_name])) {
					if (ns[_tags][_event_name][_keyB].hasOwnProperty("before")) {
						ns[_tags][_event_name][_keyB].before.f(_event, document.querySelectorAll(_keyB), this);
					}
				}
			}
			_cb(_event);
			if (ns.hasOwnProperty(_tags) && ns[_tags].hasOwnProperty(_event_name)) {
				for (var _keyA of Object.keys(ns[_tags][_event_name])) {
					if (ns[_tags][_event_name][_keyA].hasOwnProperty("after")) {
						ns[_tags][_event_name][_keyA].after.f(_event, document.querySelectorAll(_keyA), this);
					}
				}
			}
		});
	};
	//On for querySelectorAll
	nlp.on = function (_event_name = "click", _cb = function () {}) {
		for (var i = 0; i < this.length; i++) {
			this[i].on(_event_name, _cb);
		}
	};
	/*---------------On---------------*/
})(this||window);