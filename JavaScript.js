document.addEventListener("DOMContentLoaded", function() {
    console.log("Siden er indlæst!");
    const employers = document.querySelectorAll("#work-experience .employer");

    employers.forEach((employer) => {
        console.log("Fundet employer:", employer);
        const jobDetails = employer.nextElementSibling;

        if (jobDetails && jobDetails.classList.contains("job-details")) {
            console.log("Fundet job-details:", jobDetails);
            jobDetails.style.display = "none"; // Skjul som standard
            employer.style.cursor = "pointer";

            employer.addEventListener("click", function() {
                console.log("Klikket på:", employer);
                if (jobDetails.style.display === "none") {
                    jobDetails.style.display = "block";
                } else {
                    jobDetails.style.display = "none";
                }
            });
        }
    });
});