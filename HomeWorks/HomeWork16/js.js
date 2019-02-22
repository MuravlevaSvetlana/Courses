function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    this.getName = function() {
        return console.log ('Planet name is ' + this.name + ' The satellite is ' + this.satelliteName);
    }
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

let earth = new PlanetWithSatellite ('Earth', 'Moon');
earth.getName();

