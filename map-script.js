const donationLocations = [
  { name: "Fundação Hemocentro de Brasília", lat: -15.7801, lng: -47.8825 },
  {
    name: "Hospital Regional da Asa Norte (HRAN)",
    lat: -15.7372,
    lng: -47.8876,
  },
  {
    name: "Hospital Universitário de Brasília (HUB)",
    lat: -15.7689,
    lng: -47.872,
  },
  { name: "Hospital de Base do Distrito Federal", lat: -15.789, lng: -47.8844 },
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -15.7801, lng: -47.8825 },
    zoom: 12,
  });

  donationLocations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
    });

    marker.addListener("click", () => {
      map.setCenter(marker.getPosition());
      map.setZoom(15);
    });
  });

  const locationList = document.getElementById("location-list");
  donationLocations.forEach((location) => {
    const li = document.createElement("li");
    li.textContent = location.name;
    li.addEventListener("click", () => {
      map.setCenter({ lat: location.lat, lng: location.lng });
      map.setZoom(15);
    });
    locationList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD8888888888888888888888888888888&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
});
