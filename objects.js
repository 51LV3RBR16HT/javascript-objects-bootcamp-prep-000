var playlist = {};

var playlist = new Object({ 
  'Ella Fitzgerald': "My Funny Valentine",
  'Billie Holiday': "Gloomy Sunday"
});

function updatePlaylist(playlist, 'Dave Brubeck', "Take 5") {
  playlist['Dave Brubeck'] = "Take 5"
  return playlist
}
