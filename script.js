const songs = [
{
    title: "Duaon me meri",
    artist: "Ayesha Abdul Basith",
    src: "WhatsApp Audio 2026-08-10 at 5.06.47 PM.mpeg"
},
{
    title: "Muhammad Nabinah ",
    artist: "Ayesha Abdul Basith",
    src: "WhatsApp Audio 2026-08-10 at 5.05.43 PM.mpeg",
},
{
    title: "Hum na ankhon se dekha nahi ha magar ",
    artist: "Mohamed Tarek",
    src: "WhatsApp Audio 2026-08-10 at 5.06.49 PM.mpeg",
  
},
{
    title: "Qalbi fil Madinah",
    artist: "Maher Zain & Harris J",
    src: "WhatsApp Audio 2026-08-10 at 5.06.47 PM (1).mpeg",

},
{
    title: "Kun Anta",
    artist: "Humood Alkhudher",
    src: "WhatsApp Audio 2026-08-10 at 5.06.48 PM.mpeg",
},
];
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("current");
const duration = document.getElementById("duration");

const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");

let currentSong = 0;
/* ================= SEARCH ================= */

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase().trim();

    searchResults.innerHTML = "";

    if (searchText === "") {
        searchResults.style.display = "none";
        return;
    }

    const matchedSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchText) ||
        song.artist.toLowerCase().includes(searchText)
    );

    if (matchedSongs.length === 0) {
        searchResults.innerHTML = `
            <div class="no-result">
                No Nasheed Found
            </div>
        `;

        searchResults.style.display = "block";
        return;
    }

    matchedSongs.forEach(song => {

        const songIndex = songs.indexOf(song);

        const result = document.createElement("div");

        result.className = "search-result";

        result.innerHTML = `
            <div class="search-result-icon">
                <i class="fa-solid fa-music"></i>
            </div>

            <div class="search-result-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
            </div>

            <button class="search-result-play">
                <i class="fa-solid fa-play"></i>
            </button>
        `;

        result.querySelector("button").addEventListener("click", () => {
            loadSong(songIndex);
            playSong();
        });

        searchResults.appendChild(result);
    });

    searchResults.style.display = "block";
});


/* ================= LOAD SONG ================= */

function loadSong(index) {
    currentSong = index;

    const song = songs[currentSong];

    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;

    audio.src = song.src;
    audio.load();

    progress.value = 0;
    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}


/* ================= PLAY SONG ================= */

function playSong() {
    audio.play()
        .then(() => {
            playBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';
        })
        .catch(error => {
            console.log("Audio could not play:", error);
        });
}


/* ================= PAUSE SONG ================= */

function pauseSong() {
    audio.pause();

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';
}


/* ================= PLAY / PAUSE ================= */

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});


/* ================= NASHEED BUTTONS ================= */

document.querySelectorAll(".nasheed-play").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.song);

        loadSong(index);
        playSong();

    });

});


/* ================= NEXT ================= */

nextBtn.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    playSong();

});


/* ================= PREVIOUS ================= */

prevBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    playSong();

});


/* ================= PROGRESS ================= */

audio.addEventListener("loadedmetadata", () => {

    duration.textContent =
        formatTime(audio.duration);

});


audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percentage;

    currentTime.textContent =
        formatTime(audio.currentTime);

});


progress.addEventListener("input", () => {

    if (!audio.duration) return;

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});


/* ================= VOLUME ================= */

volume.addEventListener("input", () => {

    audio.volume = volume.value / 100;

});


audio.volume = 0.8;


/* ================= SONG FINISHED ================= */

audio.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    playSong();

});


/* ================= TIME FORMAT ================= */

function formatTime(time) {

    if (isNaN(time)) {
        return "0:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds =
        Math.floor(time % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;
}


/* ================= FIRST SONG ================= */

loadSong(0);
/* ================= CATEGORY FILTER ================= */

const categories = document.querySelectorAll(".category");
const nasheedItems = document.querySelectorAll(".nasheed-item");

categories.forEach(category => {

    category.addEventListener("click", () => {

        const selectedCategory = category.dataset.category;

        /* Remove active style from all categories */
        categories.forEach(item => {
            item.classList.remove("active-category");
        });

        /* Add active style to selected category */
        category.classList.add("active-category");

        /* Show / hide nasheeds */
        nasheedItems.forEach(item => {

            const itemCategory = item.dataset.category;

            if (
                selectedCategory === "All" ||
                itemCategory === selectedCategory
            ) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }

        });

    });

});