function initMap() {
     var uluru = {lat: 43.850064, lng: 18.409072};
     var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
     });
     var marker = new google.maps.Marker({
          position: uluru,
          map: map
      });
}