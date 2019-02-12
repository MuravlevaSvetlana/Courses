function promiseGenerate(time, value) {
	return new Promise ((res) =>{
		setTimeout(() => {
        	res(value);
		}, time);
	});
};

const prom = promiseGenerate(3000, 'hi');
prom.then(console.log);


class Prom {
	constructor() {
    	this.promise = new Promise((res, rej) => {
    		this.res = res;
    		this.rej = rej;
    	})
	}
	res(value) {
    	this.res(value);
  	}
  	rej(value) {
    	this.rej(value);
  	}
}

const inst = new Prom();
inst.promise.then((data) => console.log(data), (value) => console.log(value));
inst.res('Hello');

const inst1 = new Prom();
inst1.promise.then((data) => console.log(data), (value) => console.log(value));
inst1.rej('Bye');