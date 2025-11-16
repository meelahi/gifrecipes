let color: string = "#2E2E2E";
let border_space: string = "3px";

function openFood(evt: MouseEvent, foodCategory: string): void {
    // Hide all tab content elements
    const tabcontent: HTMLCollectionOf<HTMLElement> =
        document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    const tablinks: HTMLCollectionOf<HTMLElement> =
        document.getElementsByClassName("tablinks") as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show selected category
    const selected = document.getElementById(foodCategory) as HTMLElement | null;
    if (selected) {
        selected.style.display = "block";
    }

    // Add active class to clicked button
    const target = evt.currentTarget as HTMLElement | null;
    if (target) {
        target.classList.add("active");
    }
}
