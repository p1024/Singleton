const assert = require('assert');
const SingleTon = require('../index.js');

class Foo extends SingleTon {
	constructor(name) {
		super(name);
		if(!this.created()) {
			this.class = ['Foo'];
		}
	}
}

class Bar extends Foo {
	constructor(name) {
		super(name);
		if(!this.created()) {
			this.name = name;
			this.class.push('Bar');
		}
	}
}

let bar1 = new Bar('bar1');
let bar2 = new Bar('bar2');
assert.ok(bar1 === bar2, 'instances should be equal');
assert.ok(bar1.name===bar2.name, 'differnt instance\'s name should be equal');
assert.deepEqual(bar1.class, ['Foo', 'Bar'], 'every constructor should run when instance created');