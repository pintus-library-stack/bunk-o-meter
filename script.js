// CALCULATOR 1: SHOW ATTENDANCE INPUTS

function showAttendanceInputs() {

    const targetInput = document.getElementById("targetAttendance");
    const target = Number(targetInput.value);

    if (
        targetInput.value.trim() === "" ||
        !Number.isFinite(target) ||
        target <= 0 ||
        target > 100
    ) {
        alert("0 hai toh clg he kyu janaa 😭");
        return;
    }

    document.getElementById("attendanceInputs").style.display = "block";
}


// CALCULATOR 1: HOW MANY LECTURES TO ATTEND?

function calculateAttendance() {

    const total = Number(document.getElementById("total").value);
    const attended = Number(document.getElementById("attended").value);
    const target = Number(document.getElementById("targetAttendance").value);

    const totalInput = document.getElementById("total");
    const attendedInput = document.getElementById("attended");
    const result = document.getElementById("attendanceResult");

    // Validate inputs
    if (
        totalInput.value.trim() === "" ||
        attendedInput.value.trim() === "" ||
        !Number.isInteger(total) ||
        !Number.isInteger(attended) ||
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {
        result.innerHTML = "number of lectures attended jada kaise ho sakta hai bhai??😭";
        return;
    }

    // Calculate current attendance percentage
    const percentage = (attended / total) * 100;

    // Calculate how many consecutive lectures must be attended
    const lecturesNeeded = Math.max(
        0,
        Math.ceil((target * total - 100 * attended) / (100 - target))
    );

    // Display result
    if (percentage >= target) {

        result.innerHTML = `
            <div style="display:flex; align-items:center; gap:20px;">

                <div>
                    <br>
                    <h3>you're safeee for now!!!😭</h3>
                    <h2>${percentage.toFixed(2)}%</h2>
                    Your current attendance is above ${target}%!
                    <br>
                    bass hogayaa bhaii !!
                    <br>
                </div>

                <img src="shinchan.jpeg" alt="Shinchan sticker" width="150">

            </div>
        `;

    } else if (target === 100) {

        result.innerHTML = `
            <div style="display:flex; align-items:center; gap:20px;">

                <div>
                    <br>
                    <h3>kiske clg meh 100% ka criteria haii bhai</h3>
                    <h2>${percentage.toFixed(2)}%</h2>
                </div>

                <img src="awww.jpeg" alt="Awww sticker" width="150">

            </div>
        `;

    } else {

        result.innerHTML = `
            <div style="display:flex; align-items:center; gap:20px;">

                <div>
                    <br>
                    <h3>Bhaiiii aap clg jaoo 😭</h3>
                    <h2>${percentage.toFixed(2)}%</h2>
                    Your attendance is below ${target}% 😭
                    <br>
                    required to attend next
                    <b>${lecturesNeeded} lectures</b>
                    without bunking woh bhi, to reach ${target}%.
                    <br>
                </div>

                <img src="awww.jpeg" alt="Awww sticker" width="150">

            </div>
        `;
    }
}


// CALCULATOR 2: SHOW BUNK INPUTS

function showBunkInputs() {

    const targetInput = document.getElementById("targetBunk");
    const target = Number(targetInput.value);

    if (
        targetInput.value.trim() === "" ||
        !Number.isFinite(target) ||
        target <= 0 ||
        target > 100
    ) {
        alert("0 hai toh clg he kyu janaa 😭");
        return;
    }

    document.getElementById("bunkInputs").style.display = "block";
}


// CALCULATOR 2: HOW MANY LECTURES CAN I BUNK?

function calculateBunks() {

    const total = Number(document.getElementById("totalBunk").value);
    const attended = Number(document.getElementById("attendedBunk").value);
    const target = Number(document.getElementById("targetBunk").value);

    const totalInput = document.getElementById("totalBunk");
    const attendedInput = document.getElementById("attendedBunk");
    const result = document.getElementById("bunkResult");

    // Validate inputs
    if (
        totalInput.value.trim() === "" ||
        attendedInput.value.trim() === "" ||
        !Number.isInteger(total) ||
        !Number.isInteger(attended) ||
        total <= 0 ||
        attended < 0 ||
        attended > total
    ) {
        result.innerHTML = " 'number of lectures attended' jada kaise ho sakta hai bhai??😭 (basic maths)";
        return;
    }

    // Calculate current attendance
    const percentage = (attended / total) * 100;

    // If attendance is already below target
    if (percentage < target) {

        result.innerHTML = `
            <div style="display:flex; align-items:center; gap:20px;">

                <div>
                    <br>
                    <h3>💀 NO MORE BUNKS BACHAAA!!!</h3>
                    <h2>${percentage.toFixed(2)}%</h2>
                    Your attendance is already below ${target}%.
                    <br>
                    <b>Safe lectures to bunk: 0 </b>
                    <br>
                    Bhai tu attandence calc. karne k liye hi bana hai, bunk nhii !!😭
                </div>

                <img src="pachtawa.jpeg" alt="Pachtawa sticker" width="150">

            </div>
        `;

        return;
    }

    // Calculate maximum consecutive lectures that can be missed
    const maxBunks = Math.max(
        0,
        Math.floor((attended * 100 / target) - total + 1e-10)
    );

    // Display result
    result.innerHTML = `
        <div style="display:flex; align-items:center; gap:20px;">

            <div>
                <br>
                <h3>Sahii haii bhaii terii attandencee!😭</h3>
                <h2>${percentage.toFixed(2)}%</h2>
                <h4>
                    You can bunk upto
                    <b>${maxBunks} lecture${maxBunks === 1 ? "" : "s"} onnlyy</b>
                    and remain at or above ${target}%.
                    <br>
                </h4>
                ${
                    maxBunks === 0
                        ? "NO MORE BUNKS BACHAAA!!!💀"
                        : ""
                }
            </div>

            <img
                src="${maxBunks >= 1 ? 'clock it.jpeg' : 'pachtawa.jpeg'}"
                alt="Bunk result sticker"
                width="150"
            >

        </div>
    `;
}