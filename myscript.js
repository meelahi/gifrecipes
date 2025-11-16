let color = "#2E2E2E";
let border_space = "3px";

function openFood(evt, foodCategory) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" from all tab buttons
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show selected category
    document.getElementById(foodCategory).style.display = "block";

    // Add active class to clicked button
    evt.currentTarget.classList.add("active");
}
