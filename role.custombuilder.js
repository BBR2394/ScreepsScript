var roleCustomBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        //creep.moveTo(2, 46);
        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            console.log("les structure a construire");
            console.log(targets)
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
        else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            var allSources = creep.room.find(FIND_SOURCES)

            if(creep.harvest(allSources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(allSources[1]);
            }
        }

        var targets = creep.room.find(FIND_MY_STRUCTURES);
        creep.repair(targets[7]);
        console.log(targets)
        console.log("juste au dessus target");
    }
};

module.exports = roleBuilder;