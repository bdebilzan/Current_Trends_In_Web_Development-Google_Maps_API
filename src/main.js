//import Vue from 'vue';
//import App from './App.vue';

var GoogleBaseUrl = "https://maps.googleapis.com/maps/api/staticmap?center=";
var Apikey = "not telling you";

function buildUrl() 
{ 
  var completeUrl = GoogleBaseUrl + localStorage.getItem("latName") + "," + localStorage.getItem("lonName") +  "&zoom=12&size=400x400&markers=|" + localStorage.getItem("latName") + "," + localStorage.getItem("lonName") +"|&key=" + Apikey;

  localStorage.setItem("completeUrlName",completeUrl);
}
