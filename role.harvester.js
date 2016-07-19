var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (Game.spawns["Spawn1"].energy < Game.spawns["Spawn1"].energyCapacity) {
        if(creep.carry.energy < creep.carryCapacity) {
            var allSources = creep.room.find(FIND_SOURCES)
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            console.log(allSources);
            console.log(source);
            if(creep.harvest(allSources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(allSources[0]);
            }
        }
        else {

            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });

            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
        }
        else {  
        creep.moveTo(30, 30);
        }
    }
};

module.exports = roleHarvester;