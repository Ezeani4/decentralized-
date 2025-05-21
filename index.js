document.getElementById("preferenceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const personality = document.getElementById("personality").value;

  // Dummy match logic (can be upgraded later)
  const matchName = personality === "quiet" ? "John" :
                    personality === "social" ? "Michael" : "David";

  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = `
    <h2>🎉 Match Result</h2>
    <p>Hey ${name}, you’ve been matched with <strong>${matchName}</strong> in Block B, Room 12.</p>
  `;

  // Show result box and "Continue" button with animation
  resultBox.style.display = "block";
  resultBox.classList.add("fade-in");

  const continueSection = document.getElementById("continueSection");
  continueSection.style.display = "block";
  continueSection.classList.add("fade-in");
});

// Handle "Continue" button click
document.getElementById("continueBtn").addEventListener("click", function () {
  document.getElementById("continueSection").style.display = "none";

  const roomForm = document.getElementById("roomSelectionForm");
  roomForm.style.display = "block";
  roomForm.classList.add("fade-in");
});

// Handle room booking submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Redirect to confirmation (or you can show a message instead)
  window.location.href = "confirmation.html";
});

fetch("http://127.0.0.1:5000/match", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    sleep,
    environment,
    tidy,
    snore,
    music
  })
})
.then(response => response.json())
.then(data => {
  document.getElementById("matchText").textContent = data.message;
  document.getElementById("resultBox").style.display = "block";
});
