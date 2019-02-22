function Planet(name) {
    this.name = name;
    this.getName = function () {
        return console.log ('Planet name is ' + this.name)//в return использовала console.log только с целью чтоб потом отдельно метод не выводить
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    this.getName = function() {
        return console.log ('Planet name is ' + this.name + ' The satellite is ' + this.satelliteName)
    }
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

let planet = new Planet('Earth');
let earth = new PlanetWithSatellite ('Earth', 'Moon');
