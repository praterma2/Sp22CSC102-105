class Rocket {
    //make the properties
    constructor(
        fuelType,
        weight,
        power
    ) {
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("lauch sequence started");
        alert("Clear the launch area, launch is about to start");
        alert("lauch sequence started");
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
    }

    detachThruster(){
        console.log("detach Thruster sequence started");
        alert("detach Thruster sequence started");
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ) {
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    launchMission(){
        console.log("launchMission");
        alert("launch sequence started, Best of luck to the crew of the " 
            + this.spaceCraft);
    }

    displayMissionParameters(){
        console.log("displayMissionParameters() started");
        alert("The spacecraft, " + this.spaceCraft + ", will launch on " + this.launchDateDay 
            + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an O2 level of " + 
            this.oxyLvl + "%");
    }
}

function runSpDisplay(){
    console.log("runSpDisplay() started");
    springLaunch.displayMissionParameters();
}

function spLaunch(){
    console.log("spLaunch() started");
    springLaunch.launchMission();
}

function runFallDisplay(){
    console.log("runFallDisplay() started");
    fallLaunch.displayMissionParameters();
}

function faLaunch(){
    console.log("faLaunch() started");
    fallLaunch.launchMission();
}