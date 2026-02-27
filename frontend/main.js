const form = document.getElementById("reservationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    guests: document.getElementById("guests").value
  };

  const response = await fetch("http://localhost:5000/api/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  alert(result.message);
});