var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var nbHarvester = 3;
    var nbBuilder = 4;
    var nbUpgrader = 2;
    var harvester = 0;
    var upgrader = 0;
    var builder = 0;

    /*var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }*/

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        if(creep.memory.role == 'harvester') {
            creep.say("harvester !");
            roleHarvester.run(creep);
            harvester += 1;
        }
        if(creep.memory.role == 'upgrader') {
            creep.say("upgarder !");
            roleUpgrader.run(creep);
            upgrader += 1;
        }
        if(creep.memory.role == 'builder') {
            creep.say("builder !");
            roleBuilder.run(creep);
            builder += 1;
        }
    }

    if (harvester < nbHarvester) {
        var result = Game.spawns["Spawn1"].createCreep([MOVE, MOVE, CARRY, CARRY, WORK], undefined, {role:"harvester"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a harvester");
        }
        /*else {
            console.log('Spawn error harverster: '+ result);
        }*/
    }
    if (builder < nbBuilder) {
        var result = Game.spawns["Spawn1"].createCreep([MOVE, CARRY, WORK, WORK], undefined, {role:"builder"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a builder");
        }
        /*else {
            console.log('Spawn error builder: '+ result);
        }*/
    }
    if (upgrader < nbUpgrader) {
        var result = Game.spawns["Spawn1"].createCreep([MOVE, WORK, CARRY, CARRY], undefined, {role:"upgrader"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a upgrader");
        }
        /*else {
            console.log('Spawn error upgrader: '+ result);
        }*/
    }
    //console.log("nb harvester : " + harvester +  "; nb builder : " + builder + "; nbupgrader : " + upgrader)
}