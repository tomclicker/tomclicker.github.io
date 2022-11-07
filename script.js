
window.onload = () => {

    let assignments = Number(localStorage.getItem('assignments')) || 1000000000000;
    let loc = Number(localStorage.getItem('loc')) || 1000000000000000000;
    let cps = Number(localStorage.getItem('cps')) || 0;
    let aps = Number(localStorage.getItem('aps')) || 0;
    let rps = Number(localStorage.getItem('rps')) || 0;
    let assMult = Number(localStorage.getItem('assMult')) || 1;
    let mult = Number(localStorage.getItem('mult')) || 1;
    let recMult = Number(localStorage.getItem('recMult')) || 1;
    let taCost = Number(localStorage.getItem('taCost')) || 500000;

    let autoCost = 1000;
    let upgrade1Cost = 2000;
    let upgrade2Cost = 100000;
    let upgrade3Cost = 1000000;
    let upgrade4Cost = 30000000;
    let upgrade5Cost = 100000000;
    let upgrade6Cost = 2000000000;
    let upgrade7Cost = 50000000000;
    let upgrade8Cost = 9000000000000;
    let upgrade9Cost = 45000000000000;
    let upgrade10Cost = 99000000000000;

    let people1Cost = 500;
    let people2Cost = 5000;
    let people3Cost = 50000;
    let people4Cost = 50000;
    let people5Cost = 90000;
    let people6Cost = 500000;
    let people7Cost = 50000000;
    let people8Cost = 5000000000;
    let people9Cost = 1;
    let people10Cost = 1;
    let recCost = 500000;

    let maxStudents = Number(localStorage.getItem('maxStudents')) || 1000;

    let eastHallPeople = Number(localStorage.getItem('eastHallPeople')) || 0;
    let maxEHPeople = Number(localStorage.getItem('maxEHPeople')) || 0;
    let beacomPeople = Number(localStorage.getItem('beacomPeople')) || 0;
    let maxBeacomPeople = Number(localStorage.getItem('maxBeacomPeople')) || 0;
    let madLabsPeople = Number(localStorage.getItem('madLabsPeople')) || 0;
    let maxMadLabsPeople = Number(localStorage.getItem('maxMadLabsPeople')) || 0;
    let dsuPeople = Number(localStorage.getItem('dsuPeople')) || 0;
    let maxDsuPeople = Number(localStorage.getItem('maxDsuPeople')) || 0;
    let usaPeople = Number(localStorage.getItem('usaPeople')) || 0;
    let maxUsaPeople = Number(localStorage.getItem('maxUsaPeople')) || 0;
    let russiaPeople = Number(localStorage.getItem('russiaPeople')) || 0;
    let maxRussiaPeople = Number(localStorage.getItem('maxRussiaPeople')) || 0;
    let worldPeople = Number(localStorage.getItem('worldPeople')) || 0;
    let maxWorldPeople = Number(localStorage.getItem('maxWorldPeople')) || 0;
    let planetPeople = Number(localStorage.getItem('planetPeople')) || 0;
    let maxPlanetPeople = Number(localStorage.getItem('maxPlanetPeople')) || 0;
    let galaxyPeople = Number(localStorage.getItem('galaxyPeople')) || 0;
    let maxGalaxyPeople = Number(localStorage.getItem('maxGalaxyPeople')) || 0;
    let matrixPeople = Number(localStorage.getItem('matrixPeople')) || 0;
    let maxMatrixPeople = Number(localStorage.getItem('maxMatrixPeople')) || 0;

    //update changing values on screen
    function updateloc() {
        let nloc = loc.toFixed(0);
        if (assignments < 0)
            assignments = 0;
        let nassignments = assignments.toFixed(0);
        let ncps = cps * 4 * mult;
        ncps = ncps.toFixed(1);
        let naps = aps * assMult;
        naps = naps.toFixed(1);
        let arrow = 0
        let rate1 = (eastHallPeople * .4).toFixed(1);
        let rate2 = (beacomPeople * 4.4).toFixed(1);
        let rate3 = (madLabsPeople * 13.8).toFixed(1);
        let rate4 = (dsuPeople * 83.2).toFixed(1);
        let rate5 = (usaPeople * 152).toFixed(1);
        let rate6 = (russiaPeople * 782).toFixed(1);
        let rate7 = (worldPeople * 24560).toFixed(1);
        let rate8 = (planetPeople * 1830000).toFixed(1);
        let rate9 = (galaxyPeople * 2600000).toFixed(1);
        let rate10 = (matrixPeople * 1000000000).toFixed(1);
        if (cps * .2 > aps)
            arrow = '⇩';
        else
            arrow = '⇧';

        // document.getElementById("rate").innerHTML = `Rate: ${score.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}A/click`

        if (nassignments <= 1000000000) {
            document.getElementById("score").innerHTML = `${arrow}${nassignments.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}A`;
        }
        else if (nassignments >= 1000000000000 && nassignments < 1000000000000000) {
            let displayAssignments = nassignments;
            displayAssignments /= 1000000000000;
            displayAssignments = displayAssignments.toFixed(3);
            document.getElementById("score").innerHTML = `${arrow}${displayAssignments.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} t. A`;
        }
        else if (nassignments >= 1000000000000000 && nassignments <= 1000000000000000000) {
            let displayAssignments = nassignments;
            displayAssignments /= 1000000000000000;
            displayAssignments = displayAssignments.toFixed(3);
            document.getElementById("score").innerHTML = `${arrow}${displayAssignments.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} q. A`;
        }
        else if (nassignments >= 1000000000000000001) {
            let displayAssignments = nassignments;
            displayAssignments /= 1000000000000000000;
            displayAssignments = displayAssignments.toFixed(3);
            document.getElementById("score").innerHTML = `${arrow}${displayAssignments.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} Q. A`;
        }

        if (nloc < 1000000000000) {
            document.getElementById("lines").innerHTML = `${nloc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}L`;
        }
        else if (nloc >= 1000000000000 && nloc < 1000000000000000) {
            let displayLoc = nloc;
            displayLoc /= 1000000000000;
            displayLoc = displayLoc.toFixed(3);
            document.getElementById("lines").innerHTML = `${displayLoc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} t. L`;
        }
        else if (nloc >= 1000000000000000 && nloc <= 1000000000000000000) {
            let displayLoc = nloc;
            displayLoc /= 1000000000000000;
            displayLoc = displayLoc.toFixed(3);
            document.getElementById("lines").innerHTML = `${arrow}${displayLoc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} q. L`;
        }
        else if (nloc >= 1000000000000000001) {
            let displayLoc = nloc;
            displayLoc /= 1000000000000000000;
            displayLoc = displayLoc.toFixed(3);
            document.getElementById("lines").innerHTML = `${arrow}${displayLoc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} Q. L`;
        }


        document.getElementById("assPerSec").innerHTML = `${naps.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} A/sec`
        document.getElementById("locPerSec").innerHTML = `${ncps.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} L/sec`
        //document.getElementById("score").innerHTML = `${arrow}${nassignments.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}A`;
        //document.getElementById("lines").innerHTML = `${nloc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}L`;
        document.getElementById("numStudents").innerHTML = `Students:<br> 
            ${cps.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            /${maxStudents.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<br>${rps * (recMult / 2)} Students/sec`;
        document.getElementById("numProfs").innerHTML = `Professors: <br> ${eastHallPeople}/${maxEHPeople}<br> ${rate1}A/sec`;
        document.getElementById("numGrad").innerHTML = `Grad<br>Classes: <br> ${beacomPeople}/${maxBeacomPeople}<br> ${rate2}A/sec`;
        document.getElementById("numProj").innerHTML = `Projects: <br> ${madLabsPeople}/${maxMadLabsPeople}<br> ${rate3}A/sec`;
        document.getElementById("numJobs").innerHTML = `Jobs: <br> ${dsuPeople}/${maxDsuPeople} <br> ${rate4}A/sec`;
        document.getElementById("numOrgs").innerHTML = `Government <br> Organizations: <br> ${usaPeople}/${maxUsaPeople} <br> ${rate5}A/sec`;
        document.getElementById("numSoviets").innerHTML = `Soviets: <br> ${russiaPeople}/${maxRussiaPeople} <br> ${rate6}A/sec`;
        document.getElementById("numInhabitants").innerHTML = `Inhabitants: <br> ${worldPeople}/${maxWorldPeople} <br> ${rate7}A/sec`;
        document.getElementById("numPlanetarians").innerHTML = `Planetarians: <br> ${planetPeople}/${maxPlanetPeople} <br> ${rate8}A/sec`;
        document.getElementById("numMilkers").innerHTML = `Milkers: <br> ${galaxyPeople}/${maxGalaxyPeople} <br> ${rate9}A/sec`;
        document.getElementById("numAgents").innerHTML = `Agents: <br> ${matrixPeople}/${maxMatrixPeople} <br> ${rate10}A/sec`;
    }

    //save button
    document.getElementById("save").onclick = (event) => {
        event.preventDefault();
        localStorage.setItem('loc', loc.toString());
        localStorage.setItem('assignments', assignments.toString());
        localStorage.setItem('cps', cps.toString());
        localStorage.setItem('aps', aps.toString());
        localStorage.setItem('rps', rps.toString());
        localStorage.setItem('assMult', assMult.toString());
        localStorage.setItem('mult', mult.toString());
        localStorage.setItem('recMult', recMult.toString());
        localStorage.setItem('taCost', recMult.toString());

        localStorage.setItem('maxStudents', maxStudents.toString());

        localStorage.setItem('eastHallPeople', eastHallPeople.toString());
        localStorage.setItem('maxEHPeople', maxEHPeople.toString());
        localStorage.setItem('beacomPeople', beacomPeople.toString());
        localStorage.setItem('maxBeacomPeople', maxBeacomPeople.toString());
        localStorage.setItem('madLabsPeople', madLabsPeople.toString());
        localStorage.setItem('maxMadLabsPeople', maxMadLabsPeople.toString());
        localStorage.setItem('dsuPeople', dsuPeople.toString());
        localStorage.setItem('maxDsuPeople', maxDsuPeople.toString());
        localStorage.setItem('usaPeople', usaPeople.toString());
        localStorage.setItem('maxUsaPeople', maxUsaPeople.toString());
        localStorage.setItem('russiaPeople', russiaPeople.toString());
        localStorage.setItem('maxRussiaPeople', maxRussiaPeople.toString());
        localStorage.setItem('worldPeople', worldPeople.toString());
        localStorage.setItem('maxWorldPeople', maxWorldPeople.toString());
        localStorage.setItem('planetPeople', planetPeople.toString());
        localStorage.setItem('maxPlanetPeople', maxPlanetPeople.toString());
        localStorage.setItem('galaxyPeople', galaxyPeople.toString());
        localStorage.setItem('maxGalaxyPeople', maxGalaxyPeople.toString());
        localStorage.setItem('matrixPeople', matrixPeople.toString());
        localStorage.setItem('maxMatrixPeople', maxMatrixPeople.toString());
    }

    function autoSave() {
        localStorage.setItem('loc', loc.toString());
        localStorage.setItem('assignments', assignments.toString());
        localStorage.setItem('cps', cps.toString());
        localStorage.setItem('aps', aps.toString());
        localStorage.setItem('rps', rps.toString());
        localStorage.setItem('assMult', assMult.toString());
        localStorage.setItem('mult', mult.toString());
        localStorage.setItem('recMult', recMult.toString());
        localStorage.setItem('taCost', recMult.toString());

        localStorage.setItem('maxStudents', maxStudents.toString());

        localStorage.setItem('eastHallPeople', eastHallPeople.toString());
        localStorage.setItem('maxEHPeople', maxEHPeople.toString());
        localStorage.setItem('beacomPeople', beacomPeople.toString());
        localStorage.setItem('maxBeacomPeople', maxBeacomPeople.toString());
        localStorage.setItem('madLabsPeople', madLabsPeople.toString());
        localStorage.setItem('maxMadLabsPeople', maxMadLabsPeople.toString());
        localStorage.setItem('dsuPeople', dsuPeople.toString());
        localStorage.setItem('maxDsuPeople', maxDsuPeople.toString());
        localStorage.setItem('usaPeople', usaPeople.toString());
        localStorage.setItem('maxUsaPeople', maxUsaPeople.toString());
        localStorage.setItem('russiaPeople', russiaPeople.toString());
        localStorage.setItem('maxRussiaPeople', maxRussiaPeople.toString());
        localStorage.setItem('worldPeople', worldPeople.toString());
        localStorage.setItem('maxWorldPeople', maxWorldPeople.toString());
        localStorage.setItem('planetPeople', planetPeople.toString());
        localStorage.setItem('maxPlanetPeople', maxPlanetPeople.toString());
        localStorage.setItem('galaxyPeople', galaxyPeople.toString());
        localStorage.setItem('maxGalaxyPeople', maxGalaxyPeople.toString());
        localStorage.setItem('matrixPeople', matrixPeople.toString());
        localStorage.setItem('maxMatrixPeople', maxMatrixPeople.toString());
    }
    setInterval(autoSave, 60000);


    //hide locations
    if (maxEHPeople < 1) {
        document.getElementById('location1').style.display = 'none';
    }
    if (maxBeacomPeople < 1) {
        document.getElementById('location2').style.display = 'none';
    }
    if (maxMadLabsPeople < 1) {
        document.getElementById('location3').style.display = 'none';
    }
    if (maxDsuPeople < 1) {
        document.getElementById('location4').style.display = 'none';
    }
    if (maxUsaPeople < 1) {
        document.getElementById('location5').style.display = 'none';
    }
    if (maxRussiaPeople < 1) {
        document.getElementById('location6').style.display = 'none';
    }
    if (maxWorldPeople < 1) {
        document.getElementById('location7').style.display = 'none';
    }
    if (maxPlanetPeople < 1) {
        document.getElementById('location8').style.display = 'none';
    }
    if (maxGalaxyPeople < 1) {
        document.getElementById('location9').style.display = 'none';
    }
    if (maxMatrixPeople < 1) {
        document.getElementById('location10').style.display = 'none';
    }

    //check if player can afford and highlight if so
    function checkPrice() {
        if (loc > autoCost && cps != maxStudents) {
            document.getElementById('autoclick').style.backgroundColor = "#950740";
            document.getElementById('autoclick').style.color = "antiquewhite";
        }
        else {
            document.getElementById('autoclick').style.backgroundColor = "#3d3b3c";
            document.getElementById('autoclick').style.color = "#6a6767";
        }
        if (loc > upgrade1Cost) {
            document.getElementById('upgrade1').style.backgroundColor = "#950740";
            document.getElementById('upgrade1').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade1').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade1').style.color = "#6a6767";
        }
        if (loc > upgrade2Cost) {
            document.getElementById('upgrade2').style.backgroundColor = "#950740";
            document.getElementById('upgrade2').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade2').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade2').style.color = "#6a6767";
        }
        if (loc > upgrade3Cost) {
            document.getElementById('upgrade3').style.backgroundColor = "#950740";
            document.getElementById('upgrade3').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade3').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade3').style.color = "#6a6767";
        }
        if (loc > upgrade4Cost) {
            document.getElementById('upgrade4').style.backgroundColor = "#950740";
            document.getElementById('upgrade4').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade4').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade4').style.color = "#6a6767";
        }
        if (loc > upgrade5Cost) {
            document.getElementById('upgrade5').style.backgroundColor = "#950740";
            document.getElementById('upgrade5').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade5').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade5').style.color = "#6a6767";
        }
        if (loc > upgrade6Cost) {
            document.getElementById('upgrade6').style.backgroundColor = "#950740";
            document.getElementById('upgrade6').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade6').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade6').style.color = "#6a6767";
        }
        if (loc > upgrade7Cost) {
            document.getElementById('upgrade7').style.backgroundColor = "#950740";
            document.getElementById('upgrade7').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade7').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade7').style.color = "#6a6767";
        }
        if (loc > upgrade8Cost) {
            document.getElementById('upgrade8').style.backgroundColor = "#950740";
            document.getElementById('upgrade8').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade8').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade8').style.color = "#6a6767";
        }
        if (loc > upgrade9Cost) {
            document.getElementById('upgrade9').style.backgroundColor = "#950740";
            document.getElementById('upgrade9').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade9').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade9').style.color = "#6a6767";
        }
        if (loc > upgrade10Cost) {
            document.getElementById('upgrade10').style.backgroundColor = "#950740";
            document.getElementById('upgrade10').style.color = "antiquewhite";
        }
        else {
            document.getElementById('upgrade10').style.backgroundColor = "#3d3b3c";
            document.getElementById('upgrade10').style.color = "#6a6767";
        }

        //unlock upgrade buttons
        if (loc > 100000) {
            document.getElementById('unlockU2').style.backgroundColor = "#950740";
            document.getElementById('unlockU2').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU2').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU2').style.color = "#6a6767";
        }
        if (loc > 1000000) {
            document.getElementById('unlockU3').style.backgroundColor = "#950740";
            document.getElementById('unlockU3').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU3').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU3').style.color = "#6a6767";
        }

        if (loc > 30000000) {
            document.getElementById('unlockU4').style.backgroundColor = "#950740";
            document.getElementById('unlockU4').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU4').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU4').style.color = "#6a6767";
        }
        if (loc > 100000000) {
            document.getElementById('unlockU5').style.backgroundColor = "#950740";
            document.getElementById('unlockU5').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU5').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU5').style.color = "#6a6767";
        }

        if (loc > 2000000000) {
            document.getElementById('unlockU6').style.backgroundColor = "#950740";
            document.getElementById('unlockU6').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU6').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU6').style.color = "#6a6767";
        }

        if (loc > 50000000000) {
            document.getElementById('unlockU7').style.backgroundColor = "#950740";
            document.getElementById('unlockU7').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU7').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU7').style.color = "#6a6767";
        }

        if (loc > 9000000000000) {
            document.getElementById('unlockU8').style.backgroundColor = "#950740";
            document.getElementById('unlockU8').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU8').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU8').style.color = "#6a6767";
        }

        if (loc > 45000000000000) {
            document.getElementById('unlockU9').style.backgroundColor = "#950740";
            document.getElementById('unlockU9').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU9').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU9').style.color = "#6a6767";
        }

        if (loc > 99000000000000) {
            document.getElementById('unlockU10').style.backgroundColor = "#950740";
            document.getElementById('unlockU10').style.color = "antiquewhite";
        }
        else {
            document.getElementById('unlockU10').style.backgroundColor = "#3d3b3c";
            document.getElementById('unlockU10').style.color = "#6a6767";
        }

        //set color of right buttons
        if (loc > people1Cost && eastHallPeople < maxEHPeople) {
            document.getElementById('ehPeople').style.backgroundColor = "#950740";
            document.getElementById('ehPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('ehPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('ehPeople').style.color = "#6a6767";
        }
        if (loc > people2Cost && beacomPeople < maxBeacomPeople) {
            document.getElementById('beacomPeople').style.backgroundColor = "#950740";
            document.getElementById('beacomPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('beacomPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('beacomPeople').style.color = "#6a6767";
        }
        if (loc > people3Cost && madLabsPeople < maxMadLabsPeople) {
            document.getElementById('madLabsPeople').style.backgroundColor = "#950740";
            document.getElementById('madLabsPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('madLabsPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('madLabsPeople').style.color = "#6a6767";
        }
        if (loc > people4Cost && dsuPeople < maxDsuPeople) {
            document.getElementById('dsuPeople').style.backgroundColor = "#950740";
            document.getElementById('dsuPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('dsuPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('dsuPeople').style.color = "#6a6767";
        }

        if (loc > people5Cost && usaPeople < maxUsaPeople) {
            document.getElementById('usaPeople').style.backgroundColor = "#950740";
            document.getElementById('usaPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('usaPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('usaPeople').style.color = "#6a6767";
        }
        if (loc > people6Cost && russiaPeople < maxRussiaPeople) {
            document.getElementById('russiaPeople').style.backgroundColor = "#950740";
            document.getElementById('russiaPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('russiaPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('russiaPeople').style.color = "#6a6767";
        }
        if (loc > people7Cost && worldPeople < maxWorldPeople) {
            document.getElementById('worldPeople').style.backgroundColor = "#950740";
            document.getElementById('worldPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('worldPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('worldPeople').style.color = "#6a6767";
        }
        if (loc > people8Cost && planetPeople < maxPlanetPeople) {
            document.getElementById('planetPeople').style.backgroundColor = "#950740";
            document.getElementById('planetPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('planetPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('planetPeople').style.color = "#6a6767";
        }
        if (loc > people9Cost && galaxyPeople < maxGalaxyPeople) {
            document.getElementById('galaxyPeople').style.backgroundColor = "#950740";
            document.getElementById('galaxyPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('galaxyPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('galaxyPeople').style.color = "#6a6767";
        }
        if (loc > people10Cost && matrixPeople < maxMatrixPeople) {
            document.getElementById('matrixPeople').style.backgroundColor = "#950740";
            document.getElementById('matrixPeople').style.color = "antiquewhite";
        }
        else {
            document.getElementById('matrixPeople').style.backgroundColor = "#3d3b3c";
            document.getElementById('matrixPeople').style.color = "#6a6767";
        }


        if (assignments >= 20000) {
            document.getElementById('loc1').style.backgroundColor = "#950740";
            document.getElementById('loc1').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc1').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc1').style.color = "#6a6767";
        }

        if (assignments >= 500000) {
            document.getElementById('loc2').style.backgroundColor = "#950740";
            document.getElementById('loc2').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc2').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc2').style.color = "#6a6767";
        }

        if (assignments >= 60000000) {
            document.getElementById('loc6').style.backgroundColor = "#950740";
            document.getElementById('loc6').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc6').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc6').style.color = "#6a6767";
        }

        if (assignments >= 60000) {
            document.getElementById('loc3').style.backgroundColor = "#950740";
            document.getElementById('loc3').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc3').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc3').style.color = "#6a6767";
        }

        if (assignments >= 1000000) {
            document.getElementById('loc4').style.backgroundColor = "#950740";
            document.getElementById('loc4').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc4').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc4').style.color = "#6a6767";
        }

        if (assignments >= 1000000000) {
            document.getElementById('loc5').style.backgroundColor = "#950740";
            document.getElementById('loc5').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc5').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc5').style.color = "#6a6767";
        }

        if (assignments >= 10000000000) {
            document.getElementById('loc7').style.backgroundColor = "#950740";
            document.getElementById('loc7').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc7').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc7').style.color = "#6a6767";
        }

        if (assignments >= 3000000000000) {
            document.getElementById('loc8').style.backgroundColor = "#950740";
            document.getElementById('loc8').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc8').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc8').style.color = "#6a6767";
        }

        if (assignments >= 40000000000000) {
            document.getElementById('loc9').style.backgroundColor = "#950740";
            document.getElementById('loc9').style.color = "antiquewhite";
        }
        else {
            document.getElementById('loc9').style.backgroundColor = "#3d3b3c";
            document.getElementById('loc9').style.color = "#6a6767";
        }

        //hire
        if (loc >= 500000) {
            document.getElementById('recruit').style.backgroundColor = "#950740";
            document.getElementById('recruit').style.color = "antiquewhite";
        }
        else {
            document.getElementById('recruit').style.backgroundColor = "#3d3b3c";
            document.getElementById('recruit').style.color = "#6a6767";
        }

        if (loc >= taCost) {
            document.getElementById('assistant').style.backgroundColor = "#950740";
            document.getElementById('assistant').style.color = "antiquewhite";
        }
        else {
            document.getElementById('assistant').style.backgroundColor = "#3d3b3c";
            document.getElementById('assistant').style.color = "#6a6767";
        }

        //upgrades
        if (maxStudents > 4999) {
            document.getElementById("loc1").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc1').style.color = "antiquewhite";
            document.getElementById('loc2').style.display = 'block';
        }
        if (maxStudents > 499999) {
            document.getElementById("loc2").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc2').style.color = "antiquewhite";
            document.getElementById('loc6').style.display = 'block';
        }
        if (maxStudents > 499999999) {
            document.getElementById("loc6").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc6').style.color = "antiquewhite";
        }
        if (recMult >= 2) {
            document.getElementById("loc7").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc7').style.color = "antiquewhite";
            document.getElementById('loc8').style.display = 'block';
        }
        if (recMult >= 4) {
            document.getElementById("loc8").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc8').style.color = "antiquewhite";
            document.getElementById('loc9').style.display = 'block';
        }
        if (recMult >= 8) {
            document.getElementById("loc9").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc9').style.color = "antiquewhite";
        }
        if (mult >= 1.1) {
            document.getElementById("loc3").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc3').style.color = "antiquewhite";
            document.getElementById('loc4').style.display = 'block';
        }
        if (mult >= 1.25) {
            document.getElementById("loc4").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc4').style.color = "antiquewhite";
            document.getElementById('loc5').style.display = 'block';
        }
        if (mult >= 1.5) {
            document.getElementById("loc5").style.backgroundColor = 'rgb(9, 145, 9)';
            document.getElementById('loc5').style.color = "antiquewhite";
            document.getElementById('tom').src = '/images/tomupgrade.png';
            document.getElementById('tomClick').style.backgroundColor = 'rgb(28, 88, 118)';
        }
        document.getElementById('assistant').innerHTML = `Teacher Assistant<br>+50% Assignments/sec<br>Cost: ${taCost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`;
    }
    setInterval(checkPrice, 10);


    //display unlock if not already unlocked
    if (maxEHPeople == 0)
        document.getElementById('unlockU2').style.display = 'none';
    if (maxBeacomPeople > 0)
        document.getElementById("unlockU2").style.display = 'none';
    else {
        document.getElementById("upgrade2").style.display = 'none';
        document.getElementById("unlockU3").style.display = 'none';
    }
    if (maxMadLabsPeople > 0)
        document.getElementById("unlockU3").style.display = 'none';
    else {
        document.getElementById("upgrade3").style.display = 'none';
        document.getElementById("unlockU4").style.display = 'none';
    }
    if (maxDsuPeople > 0)
        document.getElementById("unlockU4").style.display = 'none';
    else {
        document.getElementById("upgrade4").style.display = 'none';
        document.getElementById("unlockU5").style.display = 'none';
    }
    if (maxUsaPeople > 0)
        document.getElementById("unlockU5").style.display = 'none';
    else {
        document.getElementById("upgrade5").style.display = 'none';
        document.getElementById("unlockU6").style.display = 'none';
    }
    if (maxRussiaPeople > 0)
        document.getElementById("unlockU6").style.display = 'none';
    else {
        document.getElementById("upgrade6").style.display = 'none';
        document.getElementById("unlockU7").style.display = 'none';
    }
    if (maxWorldPeople > 0)
        document.getElementById("unlockU7").style.display = 'none';
    else {
        document.getElementById("upgrade7").style.display = 'none';
        document.getElementById("unlockU8").style.display = 'none';
    }
    if (maxPlanetPeople > 0)
        document.getElementById("unlockU8").style.display = 'none';
    else {
        document.getElementById("upgrade8").style.display = 'none';
        document.getElementById("unlockU9").style.display = 'none';
    }
    if (maxGalaxyPeople > 0)
        document.getElementById("unlockU9").style.display = 'none';
    else {
        document.getElementById("upgrade9").style.display = 'none';
        document.getElementById("unlockU10").style.display = 'none';
    }
    if (maxMatrixPeople > 0)
        document.getElementById("unlockU10").style.display = 'none';
    else {
        document.getElementById("upgrade10").style.display = 'none';
    }



    if (assignments >= 0)
        setInterval(updateloc, 4);

    document.getElementById("tomClick").onclick = (event) => {
        event.preventDefault();
        assignments += 1 * assMult;
    }

    document.getElementById("codeClick").onclick = (event) => {
        event.preventDefault();
        if (assignments >= 1) {
            assignments = assignments - 1;
            loc = loc + (20);
        }
    }

    //loc1
    document.getElementById("loc1").onclick = (event) => {
        event.preventDefault;
        if (maxStudents < 5000) {
            if (assignments >= 20000) {
                assignments -= 20000;
                if (Math.floor(Math.random() * 2) == 1) {
                    document.getElementById('loc1').style.backgroundColor = 'rgb(9, 145, 9)';
                    maxStudents = 5000;
                    document.getElementById('loc2').style.display = 'block';
                }
            }
        }
    }
    //loc2
    document.getElementById("loc2").onclick = (event) => {
        event.preventDefault;
        if (maxStudents < 500000) {
            if (assignments >= 500000) {
                assignments -= 500000;
                if (Math.floor(Math.random() * 5) == 1) {
                    document.getElementById('loc2').style.backgroundColor = 'rgb(9, 145, 9)';
                    maxStudents = 500000;
                    document.getElementById('loc6').style.display = 'block';
                }
            }
        }
    }
    //loc6
    document.getElementById("loc6").onclick = (event) => {
        event.preventDefault;
        if (maxStudents < 500000000) {
            if (assignments >= 60000000) {
                assignments -= 60000000;
                if (Math.floor(Math.random() * 10) == 1) {
                    document.getElementById('loc6').style.backgroundColor = 'rgb(9, 145, 9)';
                    maxStudents = 500000000;
                }
            }
        }
    }
    //loc3
    document.getElementById("loc3").onclick = (event) => {
        event.preventDefault;
        if (mult <= 1.09) {
            if (assignments >= 60000) {
                assignments -= 60000;
                document.getElementById('loc3').style.backgroundColor = 'rgb(9, 145, 9)';
                mult += 0.1;
                document.getElementById('loc4').style.display = 'block';
            }
        }
    }
    //loc4
    document.getElementById("loc4").onclick = (event) => {
        event.preventDefault;
        if (mult <= 1.24) {
            if (assignments >= 1000000) {
                assignments -= 1000000;
                if (Math.floor(Math.random() * 3) == 1) {
                    document.getElementById('loc4').style.backgroundColor = 'rgb(9, 145, 9)';
                    mult += 0.25;
                    document.getElementById('loc5').style.display = 'block';
                }
            }
        }
    }
    //loc5
    document.getElementById("loc5").onclick = (event) => {
        event.preventDefault;
        if (mult <= 1.49) {
            if (assignments >= 1000000000) {
                assignments -= 1000000000;
                if (Math.floor(Math.random() * 20) == 1) {
                    document.getElementById('loc5').style.backgroundColor = 'rgb(9, 145, 9)';
                    mult += 0.5;
                    document.getElementById('tom').src = '/images/tomupgrade.png';
                    document.getElementById('tomClick').style.backgroundColor = 'rgb(28, 88, 118)';
                }
            }
        }
    }
    //loc7
    document.getElementById("loc7").onclick = (event) => {
        event.preventDefault;
        if (recMult <= 1.99) {
            if (assignments >= 10000000000) {
                assignments -= 10000000000;
                if (Math.floor(Math.random() * 2) == 1) {
                    document.getElementById('loc7').style.backgroundColor = 'rgb(9, 145, 9)';
                    recMult += 1;
                    document.getElementById('loc8').style.display = 'block';
                }
            }
        }
    }
    //loc8
    document.getElementById("loc8").onclick = (event) => {
        event.preventDefault;
        if (recMult <= 3.99) {
            if (assignments >= 3000000000000) {
                assignments -= 3000000000000;
                if (Math.floor(Math.random() * 3) == 1) {
                    document.getElementById('loc8').style.backgroundColor = 'rgb(9, 145, 9)';
                    recMult += 2;
                    document.getElementById('loc9').style.display = 'block';
                }
            }
        }
    }
    //loc9
    document.getElementById("loc9").onclick = (event) => {
        event.preventDefault;
        if (recMult <= 7.99) {
            if (assignments >= 40000000000000) {
                assignments -= 40000000000000;
                if (Math.floor(Math.random() * 10) == 1) {
                    document.getElementById('loc9').style.backgroundColor = 'rgb(9, 145, 9)';
                    recMult += 4;
                }
            }
        }
    }

    //upgrade1
    document.getElementById("upgrade1").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade1Cost) {
            maxEHPeople += 5;
            loc -= upgrade1Cost;
            if (maxBeacomPeople == 0)
                document.getElementById('unlockU2').style.display = 'block';
            document.getElementById('location1').style.display = 'inline-flex';
        }
    }

    //unlock upgrade 2
    let uu2 = document.getElementById("unlockU2");
    uu2.addEventListener('click', hideshow, false);

    function hideshow() {
        if (loc >= 100000) {
            loc -= 100000
            maxBeacomPeople += 10;
            document.getElementById('unlockU2').style.display = 'none';
            document.getElementById('upgrade2').style.display = 'block';
            if (maxMadLabsPeople == 0)
                document.getElementById('unlockU3').style.display = 'block';
            document.getElementById('location2').style.display = 'inline-flex';
        }
    }

    //upgrade 2
    document.getElementById("upgrade2").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade2Cost) {
            loc -= upgrade2Cost
            maxBeacomPeople += 10;
        }
    }

    //unlock upgrade 3
    let uu3 = document.getElementById("unlockU3");
    uu3.addEventListener('click', hideshow2, false);

    function hideshow2() {
        if (loc >= 1000000) {
            loc -= 1000000
            maxMadLabsPeople += 30;
            document.getElementById('unlockU3').style.display = 'none';
            document.getElementById('upgrade3').style.display = 'block';
            if (maxDsuPeople == 0)
                document.getElementById('unlockU4').style.display = 'block';
            document.getElementById('location3').style.display = 'inline-flex';
        }
    }

    //upgrade 3
    document.getElementById("upgrade3").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade3Cost) {
            loc -= upgrade3Cost
            maxMadLabsPeople += 30;
        }
    }

    //unlock upgrade 4
    let uu4 = document.getElementById("unlockU4");
    uu4.addEventListener('click', hideshow3, false);

    function hideshow3() {
        if (loc >= 30000000) {
            loc -= 30000000
            maxDsuPeople += 40;
            document.getElementById('unlockU4').style.display = 'none';
            document.getElementById('upgrade4').style.display = 'block';
            document.getElementById('unlockU5').style.display = 'block';
            document.getElementById('location4').style.display = 'inline-flex';
        }
    }

    //upgrade 4
    document.getElementById("upgrade4").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade4Cost) {
            maxDsuPeople += 40;
            loc -= upgrade4Cost
        }
    }

    //unlock upgrade 5
    let uu5 = document.getElementById("unlockU5");
    uu5.addEventListener('click', hideshow4, false);

    function hideshow4() {
        if (loc >= 100000000) {
            loc -= 100000000
            maxUsaPeople += 45;
            document.getElementById('unlockU5').style.display = 'none';
            document.getElementById('upgrade5').style.display = 'block';
            document.getElementById('unlockU6').style.display = 'block';
            document.getElementById('location5').style.display = 'inline-flex';
        }
    }

    //upgrade 5
    document.getElementById("upgrade5").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade5Cost) {
            loc -= upgrade5Cost
            maxUsaPeople += 45;
        }
    }

    //unlock upgrade 6
    let uu6 = document.getElementById("unlockU6");
    uu6.addEventListener('click', hideshow5, false);

    function hideshow5() {
        if (loc >= 2000000000) {
            loc -= 2000000000
            maxRussiaPeople += 100;
            document.getElementById('unlockU6').style.display = 'none';
            document.getElementById('upgrade6').style.display = 'block';
            document.getElementById('unlockU7').style.display = 'block';
            document.getElementById('location6').style.display = 'inline-flex';
        }
    }

    //upgrade 6
    document.getElementById("upgrade6").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade6Cost) {
            maxRussiaPeople += 100;
            loc -= upgrade6Cost
        }
    }
    //unlock upgrade 7
    let uu7 = document.getElementById("unlockU7");
    uu7.addEventListener('click', hideshow6, false);

    function hideshow6() {
        if (loc >= 50000000000) {
            loc -= 50000000000
            maxWorldPeople += 50;
            document.getElementById('unlockU7').style.display = 'none';
            document.getElementById('upgrade7').style.display = 'block';
            document.getElementById('unlockU8').style.display = 'block';
            document.getElementById('location7').style.display = 'inline-flex';
        }
    }

    //upgrade 7
    document.getElementById("upgrade7").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade7Cost) {
            maxWorldPeople += 50;
            loc -= upgrade7Cost
        }
    }

    //unlock upgrade 8
    let uu8 = document.getElementById("unlockU8");
    uu8.addEventListener('click', hideshow7, false);

    function hideshow7() {
        if (loc >= 9000000000000) {
            loc -= 9000000000000
            maxPlanetPeople += 100;
            document.getElementById('unlockU8').style.display = 'none';
            document.getElementById('upgrade8').style.display = 'block';
            document.getElementById('unlockU9').style.display = 'block';
            document.getElementById('location8').style.display = 'inline-flex';
        }
    }

    //upgrade 8
    document.getElementById("upgrade8").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade8Cost) {
            maxPlanetPeople += 100;
            loc -= upgrade8Cost
        }
    }

    //unlock upgrade 9
    let uu9 = document.getElementById("unlockU9");
    uu9.addEventListener('click', hideshow8, false);

    function hideshow8() {
        if (loc >= 45000000000000) {
            loc -= 45000000000000
            maxGalaxyPeople += 200;
            document.getElementById('unlockU9').style.display = 'none';
            document.getElementById('upgrade9').style.display = 'block';
            document.getElementById('unlockU10').style.display = 'block';
            document.getElementById('location9').style.display = 'inline-flex';
        }
    }

    //upgrade 9
    document.getElementById("upgrade9").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade9Cost) {
            maxGalaxyPeople += 200;
            loc -= upgrade9Cost
        }
    }

    //unlock upgrade 10
    let uu10 = document.getElementById("unlockU10");
    uu10.addEventListener('click', hideshow9, false);

    function hideshow9() {
        if (loc >= 99000000000000) {
            loc -= 99000000000000
            maxMatrixPeople += 1;
            document.getElementById('unlockU10').style.display = 'none';
            document.getElementById('upgrade10').style.display = 'block';
            document.getElementById('location10').style.display = 'inline-flex';
        }
    }

    //upgrade 10
    document.getElementById("upgrade10").onclick = (event) => {
        event.preventDefault();
        if (loc >= upgrade10Cost) {
            maxMatrixPeople += 1;
            loc -= upgrade10Cost
        }
    }

    //autoclicker button for LOC
    function autoclick() {
        if (assignments >= 1) {
            assignments -= (cps * .2);
            loc += (4 * cps * mult);
        }
    }
    document.getElementById("autoclick").onclick = (event) => {
        event.preventDefault();
        if (loc >= autoCost && cps < maxStudents) {
            loc -= autoCost;
            cps++;
        }
    }
    setInterval(autoclick, 1000);
    // assignments autoclicker
    function assignmentClick() {
        assignments += aps * assMult;
    }
    setInterval(assignmentClick, 1000);

    //recruiter
    function studentClick() {
        if (cps < maxStudents)
            cps += rps * recMult;
        if (cps > maxStudents)
            cps = maxStudents;
    }
    setInterval(studentClick, 2000);


    //east hall button
    document.getElementById('ehPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people1Cost) && (eastHallPeople < maxEHPeople)) {
            loc -= people1Cost;
            eastHallPeople++;
            aps += .4
        }
    }
    //beacom button
    document.getElementById('beacomPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people2Cost) && (beacomPeople < maxBeacomPeople)) {
            loc -= people2Cost;
            beacomPeople++;
            aps += 4.4
        }
    }
    //madlabs button
    document.getElementById('madLabsPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people3Cost) && (madLabsPeople < maxMadLabsPeople)) {
            loc -= people3Cost;
            madLabsPeople++;
            aps += 13.8;
        }
    }
    // DSU button
    document.getElementById('dsuPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people4Cost) && (dsuPeople < maxDsuPeople)) {
            loc -= people4Cost;
            dsuPeople++;
            aps += 83.2;
        }
    }
    // USA button
    document.getElementById('usaPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people5Cost) && (usaPeople < maxUsaPeople)) {
            loc -= people5Cost;
            usaPeople++;
            aps += 152;
        }
    }
    // Russia button
    document.getElementById('russiaPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people6Cost) && (russiaPeople < maxRussiaPeople)) {
            loc -= people6Cost;
            russiaPeople++;
            aps += 782;
        }
    }
    // World button
    document.getElementById('worldPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people7Cost) && (worldPeople < maxWorldPeople)) {
            loc -= people7Cost;
            worldPeople++;
            aps += 24560;
        }
    }
    // Planet button
    document.getElementById('planetPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people8Cost) && (planetPeople < maxPlanetPeople)) {
            loc -= people8Cost;
            planetPeople++;
            aps += 1830000;
        }
    }
    // Galaxy button
    document.getElementById('galaxyPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people9Cost) && (galaxyPeople < maxGalaxyPeople)) {
            loc -= people9Cost;
            galaxyPeople++;
            aps += 2600000;
        }
    }
    // Matrix button
    document.getElementById('matrixPeople').onclick = (event) => {
        event.preventDefault();
        if ((loc >= people10Cost) && (matrixPeople < maxMatrixPeople)) {
            loc -= people10Cost;
            matrixPeople++;
            aps += 1000000000;
        }
    }

    //recruiter button
    document.getElementById("recruit").onclick = (event) => {
        event.preventDefault();
        if (loc >= recCost) {
            loc -= recCost
            rps += 1
        }
    }

    document.getElementById("assistant").onclick = (event) => {
        event.preventDefault();
        if (loc >= taCost) {
            loc -= taCost
            taCost *= 4;
            assMult *= 1.5;
        }
    }

    //fancy background
    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');

    var mouse = {
        x: undefined,
        y: undefined
    }

    let maxRadius = 40;
    let minRadius = 20;

    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    })

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            c.strokeStyle = "grey"
            c.fillStyle = 'rgba(0, 0, 0, .5)';
            c.fill();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }

    function Circle2(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            c.strokeStyle = "grey"
            c.fillStyle = 'rgba(255, 215, 0, .5)';
            c.fill();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            //interactivity
            if (mouse.x - this.x < 20 && mouse.x - this.x > -20
                && mouse.y - this.y < 20 && mouse.y - this.y > -20) {
                var counter
                loc += cps;
                console.log(counter);
            }

            this.draw();
        }
    }




    let circleArray = [];
    for (var i = 0; i < 100; i++) {
        var radius = 30;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    function goldCircle() {
        var radius = 30;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        circleArray.push(new Circle2(x, y, dx, dy, radius));
        setTimeout(function () {
            circleArray.pop(new Circle2(x, y, dx, dy, radius));
        }, 8000);
    }

    if (loc > 1000000)
        setInterval(goldCircle, Math.random() * 12000 + 48000)


    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }

    }

    animate();

    var canvas2 = document.getElementById('walk');

    var w = 180
    var h = 80
    canvas2.width = w;
    canvas2.height = h;

    var con = canvas2.getContext('2d');
    var rimg = document.getElementById('right');
    var limg = document.getElementById('left');

    function Rect(x, y, dx) {
        this.x = x;
        this.y = y;
        this.dx = dx

        this.draw = function () {
            if (this.dx >= 0)
                con.drawImage(rimg, this.x, this.y, 20, 40);
            else
                con.drawImage(limg, this.x, this.y, 20, 40);
        }

        this.update = function () {
            if (this.x > 180 || this.x < 0) {
                this.dx = -this.dx;
            }
            this.x += this.dx;

            this.draw();
        }
    }

    let rectArray = [];
    for (var i = 0; i < 10; i++) {
        let x = Math.random() * (w - 40) + 20;
        let y = 30
        let dx = (Math.random() - 0.5) * 2;
        rectArray.push(new Rect(x, y, dx));
    }

    function animate2() {
        requestAnimationFrame(animate2);
        con.clearRect(0, 0, w, h);

        for (var i = 0; i < rectArray.length; i++) {
            rectArray[i].update();
        }

    }

    animate2();
}