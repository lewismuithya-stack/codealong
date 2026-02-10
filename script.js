function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.landmarkList = function() {
  return this.landmarks.join(", ");
};

Place.prototype.summary = function() {
  return `${this.location} (${this.timeOfYear})
Landmarks: ${this.landmarkList()}
Notes: ${this.notes}`;
};

const places = [
  new Place("France", ["Eiffel Tower", "Louvre Museum"], "Spring", "Enjoyed the art and culture."),
  new Place("Dubai", ["Burj Khalifa", "Palm Jumeirah"], "Winter", "Loved the modern architecture."),
  new Place("Singapore", ["Marina Bay Sands", "Gardens by the Bay"], "Summer", "Clean city with amazing food."),
  new Place("Zanzibar", ["Stone Town", "Nungwi Beach"], "Autumn", "Relaxed on beautiful beaches."),
  new Place("Switzerland", ["Matterhorn", "Lake Geneva"], "Winter", "Breathtaking mountain views.")
];

const list = document.getElementById("places-list");
const details = document.getElementById("place-details");
const form = document.getElementById("place-form");

function renderPlaces() {
  list.innerHTML = "";
  places.forEach((place) => {
    const li = document.createElement("li");
    li.textContent = place.location;
    li.addEventListener("click", () => {
      details.textContent = place.summary();
      details.classList.remove("show");
      void details.offsetWidth;
      details.classList.add("show");
    });
    list.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value.split(",").map(l => l.trim());
  const timeOfYear = document.getElementById("timeOfYear").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, landmarks, timeOfYear, notes);
  places.push(newPlace);
  renderPlaces();
  form.reset();
});

renderPlaces();
