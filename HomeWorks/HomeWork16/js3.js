function User(name, date) {
    this.name = name;
    this.date = date;
}

User.prototype.getInf = function() {
    if (this._superAdmin !== undefined) return console.log(`name: ${this.name} date: ${this.date} super admin: ${this._superAdmin}`); 
    if (this.validDate) return console.log(`name: ${this.name} date: ${this.date} validity: ${this.validDate}days`);
    console.log(`name: ${this.name} date: ${this.date}`);
}

function Admin(name, date, superAdmin) {
    User.apply(this, arguments);
    this._superAdmin = superAdmin;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

function Guest(name, date, validDate){
    User.apply(this, arguments);
    this.validDate = validDate;
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

const user = new User('Slava', '30/01/2017');
const admin = new Admin ('Vitaliy', '20/05/2015', true);
const guest = new Guest ('Guest', '12/02/2019', 7);
