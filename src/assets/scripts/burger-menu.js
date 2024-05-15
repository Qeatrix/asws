let bmenuButton = document.getElementById("bmenu-button");
let bmenu = document.getElementById("bmenu");

let run_count = 0;

bmenuButton.onclick = function(e) {
    if (run_count == 0) {
        bmenu.style.display = "block";
    } else if (bmenu.style.display != "none") {
        bmenu.style.display = "none";
    } else {
        bmenu.style.display = "block";
    }

    run_count++;
}
