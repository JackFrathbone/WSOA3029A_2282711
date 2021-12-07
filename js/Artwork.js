let currentArtwork = 1;

var artworkImg = document.getElementById('ArtworkImg');

function SetArtworkImage() {
    currentArtwork += 1;

    if (currentArtwork > 3) {
        currentArtwork = 1;
    }

    if (currentArtwork == 1) {
        document.getElementById("ArtworkHeading").innerHTML = "Total Jobs in Gaming Studios, 2017 (310) [6]";
        artworkImg.src = "./Images/Art Pics/Total Gaming jobs.png";
    }
    else if (currentArtwork == 2) {
        document.getElementById("ArtworkHeading").innerHTML = "Total Jobs in Animation Studios, 2017 (460) [6]";
        artworkImg.src = "./Images/Art Pics/Total Animation Jobs.png";
    }
    else if (currentArtwork == 3) {
        document.getElementById("ArtworkHeading").innerHTML = "Total Jobs in Gaming & Animation Studios, 2017 (1225) [6]";
        artworkImg.src = "./Images/Art Pics/Total Jobs.png";
    }
}