function Build(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.getQuantity = function() {
        console.log(this.quantity);
        return this.quantity
    }
    this.setQuantity = function(newQuantity) {
        return this.quantity = newQuantity
    }
}

function LiveBuild(name, quantity, flats) {
    Build.apply(this, arguments);
    this.flats = flats;
    this.getQuantity = function() {
        const obj =  {
            stores: this.quantity,
            allFlats: this.quantity * this.flats
        }
        console.log(obj);
        return obj
    }
}
LiveBuild.prototype = Object.create(Build.prototype);
LiveBuild.prototype.constructor = LiveBuild;

function Market(name, quantity, shops) {
    Build.apply(this, arguments);
    this.shops = shops;
    this.getQuantity = function() {
        const obj = {
            stores: this.quantity,
            allShops: this.quantity * this.shops
        }
        console.log(obj);
        return obj
    }
}
Market.prototype = Object.create(Build.prototype);
Market.prototype.constructor = Market;

const build = new Build('palace', 2);
const liveBuild = new LiveBuild('flat', 5, 3);
const market = new Market('market', 3, 10);


// В задании не было указано каким способом делать поэтому это второй способ


class Build2 {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    getQuantity() {
        console.log(this.quantity);
        return this.quantity  
    }

    setQuantity(newQuantity) {
        return this.quantity = newQuantity 
    }
}

class LiveBuild2 extends Build2 {
    constructor(name, quantity, flats){
        super(name, quantity);
        this.flats = flats;
    }

    getQuantity() {
        const obj =  {
            stores: this.quantity,
            allFlats: this.quantity * this.flats
        }
        console.log(obj);
        return obj
    }
}

class Market2 extends Build2 {
    constructor(name, quantity, shops) {
        super(name, quantity);
        this.shops = shops;
    }
    
    getQuantity() {
        const obj = {
            stores: this.quantity,
            allShops: this.quantity * this.shops
        }
        console.log(obj);
        return obj
    }
}

const build2 = new Build2('palace', 2);
const liveBuild2 = new LiveBuild2('flat', 5, 3);
const market2 = new Market2 ('market', 3, 10);
