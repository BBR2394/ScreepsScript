var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    var nbHarvester = 1;
    var nbBuilder = 1;
    var nbUpgrader = 1;
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
            roleHarvester.run(creep);
            harvester += 1;
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            upgrader += 1;
        }
        if(creep.memory.role == 'builder') {
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
        Game.spawns["Spawn1"].createCreep([MOVE, CARRY, WORK, WORK], undefined, {role:"upgrader"});
    }
    //console.log("nb harvester : " + harvester +  "; nb builder : " + builder + "; nbupgrader : " + upgrader)
}