document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const seats = document.querySelector('.seats');
    const btn = document.querySelector('.btn');
    const movieTypeSelect = document.getElementById('movie-type');
    const rows = 6;
    const seatsPerRow = 10;

    // Create seats
    function createSeats() {
        seats.innerHTML = '';
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < seatsPerRow; j++) {
                const seat = document.createElement('div');
                seat.classList.add('seat');
                seat.dataset.seatNumber = j + 1;
                row.appendChild(seat);
            }
            seats.appendChild(row);
        }
    }

    // Initialize seat colors based on movie type
    function initializeSeatColors(movieType) {
        const seatElements = document.querySelectorAll('.seat');
        seatElements.forEach(seat => {
            seat.classList.remove('action', 'comedy', 'drama');
            seat.classList.add(movieType);
        });
    }

    // Handle movie type selection change
    movieTypeSelect.addEventListener('change', function () {
        const selectedMovieType = movieTypeSelect.value;
        initializeSeatColors(selectedMovieType);
    });

    // Seat selection
    seats.addEventListener('click', function (e) {
        if (e.target.classList.contains('seat')) {
            e.target.classList.toggle('selected');
        }
    });

    // Submit button click
    btn.addEventListener('click', function () {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const seatNumbers = Array.from(selectedSeats).map(seat => seat.dataset.seatNumber);
        alert(`Selected seats: ${seatNumbers.join(', ')}`);
    });

    // Initial setup
    createSeats();
    initializeSeatColors(movieTypeSelect.value);
});
