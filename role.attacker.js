var roleAttaker = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            var allSources = creep.room.find(FIND_SOURCES)

            if(creep.harvest(allSources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(allSources[1]);
            }
        }
    }
};

module.exports = roleAttaker;