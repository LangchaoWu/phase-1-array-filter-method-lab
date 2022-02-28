// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(function(driver){
        return driver.toUpperCase()===name.toUpperCase();
    });
}

function fuzzyMatch(drivers,letter){
    return drivers.filter(function(driver){
        return driver.startsWith(letter);
    });
}

function matchName(drivers,str){
    
    return drivers.filter((driver) => driver.name=== str);
}