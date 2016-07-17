var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var nbHarvester = 2;
    var nbBuilder = 2;
    var nbUpgrader = 3;
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
        Game.spawns["Spawn1"].createCreep([MOVE, CARRY, WORK, WORK], undefined, {role:"harvester"});
    }
    if (builder < nbBuilder) {
        Game.spawns["Spawn1"].createCreep([MOVE, CARRY, WORK, WORK], undefined, {role:"builder"});
    }
    if (upgrader < nbUpgrader) {
        Game.spawns["Spawn1"].createCreep([MOVE, MOVE, CARRY, CARRY, WORK], undefined, {role:"upgrader"});
    }
    //console.log("nb harvester : " + harvester +  "; nb builder : " + builder + "; nbupgrader : " + upgrader)
}