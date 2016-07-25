var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttacker = require('role.attacker');

module.exports.loop = function () {

    var nbHarvester = 3;
    var nbBuilder = 3;
    var nbUpgrader = 3;
    var nbAttacker = 0;
    var harvester = 0;
    var upgrader = 0;
    var builder = 0;
    var attacker = 0;

    var bodyAccordingLevel = [  
                                [MOVE, MOVE, CARRY, CARRY, WORK], 
                                [MOVE, MOVE, CARRY, CARRY, WORK, WORK],
                                [MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK]
                             ];

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
            if (Game.time % 3 == 0) {
            creep.say("harvester !");
        }
            roleHarvester.run(creep);
            harvester += 1;
        }
        if(creep.memory.role == 'upgrader') {
            if (Game.time % 3 == 0) {
            creep.say("upgarder !");
        }
            roleUpgrader.run(creep);
            upgrader += 1;
        }
        if(creep.memory.role == 'builder') {
            if (Game.time % 3 == 0) {
            creep.say("builder !");
        }
            roleBuilder.run(creep);
            builder += 1;
        }

        if(creep.memory.role == 'attacker') {
            if (Game.time % 3 == 0) {
            creep.say("soldat !");
        }
            roleAttacker.run(creep);
            attacker += 1;
        }

    }

    if (harvester < nbHarvester) {//[MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, MOVE]
        var result = Game.spawns["Spawn1"].createCreep([MOVE, MOVE, CARRY, CARRY, WORK], undefined, {role:"harvester"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a harvester");
        }
        else {
            console.log('Spawn error harverster: '+ result);
        }
    }
    if (builder < nbBuilder) {//[MOVE, CARRY, WORK, WORK]
        var result = Game.spawns["Spawn1"].createCreep([MOVE, MOVE, CARRY, CARRY, WORK, WORK], undefined, {role:"builder"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a builder");
        }
        else {
            console.log('Spawn error builder: '+ result);
        }
    }//[MOVE, MOVE, WORK, CARRY, CARRY]
    if (upgrader < nbUpgrader) { //[MOVE, MOVE, MOVE, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
        var result = Game.spawns["Spawn1"].createCreep([MOVE, MOVE, MOVE, WORK, WORK, CARRY, CARRY, CARRY, CARRY], undefined, {role:"upgrader"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a upgrader");
        }
        else {
            console.log('Spawn error upgrader: '+ result);
        }
    }

    /*if (attacker < nbAttacker) {
        var result = Game.spawns["Spawn1"].createCreep([MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK], undefined, {role:"attacker"});
        if(_.isString(result)) {
            console.log('The name is: '+ result + "i am a soldier");
        }
        else {
            console.log('Spawn error soldier: '+ result);
        }
    }*/

    console.log(Game.time);
    console.log("nb harvester : " + harvester +  "; nb builder : " + builder + "; nbupgrader : " + upgrader)
}

