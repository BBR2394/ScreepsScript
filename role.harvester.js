var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var state = "empty";
        var theChoosenSource;
        console.log(theChoosenSource);
        //if (Game.spawns["Spawn1"].energy < Game.spawns["Spawn1"].energyCapacity) {
        if(creep.carry.energy < creep.carryCapacity) {
            var allSources = creep.room.find(FIND_SOURCES)
            //var source = creep.pos.findClosestByRange(FIND_SOURCES);
            //console.log(allSources);
            //console.log(source);
            var look = creep.room.lookAt(26, 11);
            console.log('jaffiche look');
            console.log(look)
            var aCreep = false;
            for (var c = 0; c < look.length; c++) {
                console.log(look[c].type);
                if (look[c].type == "creep") {
                    aCreep = true;
                }
            }
            console.log("acreep")
            console.log(aCreep)
            /*if (aCreep == true && ) {

                //creep.moveTo(29,11)
            }
            else {
                if(creep.harvest(allSources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(allSources[0]);
                }
            }*/
            if(creep.harvest(allSources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(allSources[1]);
            }
            state = "empty"
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
        //}
        /*else {  
        creep.moveTo(34, 20);
        }*/

        //nouveau script
        /*
        if ()

        if(creep.carry.energy < creep.carryCapacity) {
            var state = "empty";

        } else if (creep.carry.energy == creep.carryCapacity) {
            var state == "full"
        } else {

        }*/


    }
};

module.exports = roleHarvester;