document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");

    const files = "abcdefgh";
    const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

    // Generate chessboard squares
    ranks.forEach((rank) => {
        files.split("").forEach((file, index) => {
            const square = document.createElement("div");
            square.classList.add("square");

            // Assign light or dark color
            if ((rank + index) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }

            // Add file and rank for reference (hidden in UI but accessible in DOM)
            square.dataset.file = file;
            square.dataset.rank = rank;

            chessboard.appendChild(square);
        });
    });
});
