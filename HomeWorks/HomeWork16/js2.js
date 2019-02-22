function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInformation = function() {
    if (this.comfort) return console.log(`name: ${this.name} price: ${this.price}$ comfort class: ${this.comfort}`); 
    if (this.protect) return console.log(`name: ${this.name} price: ${this.price}$ class protection from animals: ${this.protect}`);
    console.log(`name: ${this.name} price: ${this.price}$`);
}

function OfficeFurniture(name, price, comfort) {
    Furniture.apply(this, arguments);
    this.comfort = comfort;
}
OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

function HomeFurniture(name, price, protect) {
    Furniture.apply(this, arguments);
    this.protect = protect;
}
HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

const furniture = new Furniture('table',30);
const officeFurniture = new OfficeFurniture('chear', 40, 5);
const homeFurniture = new HomeFurniture('sofa', 50, 6);

