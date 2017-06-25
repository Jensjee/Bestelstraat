$(document).ready(function() {
  $('select').material_select();
  $(".button-collapse").sideNav();
});

$(".hideAfrekenen").hide();

var totaalPrijs = 0;
var aantalI7 = 0;
var aantalKoelPasta = 0;
var aantalDvi = 0;
var aantalHyper212 = 0;

if(aantalI7 == 0) {
  $("#besteldeProductenI7").hide();
}

if(aantalI7 == 0) {
  $("#besteldeProductenKoelpasta").hide();
}

if(aantalI7 == 0) {
  $("#besteldeProductenDVI").hide();
}

if(aantalI7 == 0) {
  $("#besteldeProductenHyper").hide();
}

function addPriceInteli7() {
  totaalPrijs += 342.50;
  totaalPrijs2 = parseFloat(totaalPrijs).toFixed(2);
  $("#totaalPrijs").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");
  $("#totaalPrijs2").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");

  aantalI7 += 1;

  $("#besteldeProductenI7").html("Intel Core i7 6700k - " + "Aantal: " + aantalI7);
  $("#besteldeProductenI72").html("Intel Core i7 6700k - " + "Aantal: " + aantalI7);
  $("#niksBesteld").hide();
  $("#niksBesteld2").hide();
  $("#besteldeProductenI7").show();
  $("#besteldeProductenI72").show();
  $('html, body').animate({scrollTop:0}, 'fast');
  checkVerzendKosten();
}

function addPriceKoelPasta() {
  totaalPrijs += 4.49;
  totaalPrijs2 = parseFloat(totaalPrijs).toFixed(2);
  $("#totaalPrijs").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");
  $("#totaalPrijs2").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");

  aantalKoelPasta += 1;

  $("#besteldeProductenKoelpasta").html("CPU Koelpasta Zilver - " + "Aantal: " + aantalKoelPasta);
  $("#besteldeProductenKoelpasta2").html("CPU Koelpasta Zilver - " + "Aantal: " + aantalKoelPasta);
  $("#niksBesteld").hide();
  $("#niksBesteld2").hide();
  $("#besteldeProductenKoelpasta").show()
  $("#besteldeProductenKoelpasta2").show()
  $('html, body').animate({scrollTop:0}, 'fast');
  checkVerzendKosten();
  var totaalPrijs3 = totaalprijs;
}

function addPriceDVI() {
  totaalPrijs += 6.49;
  totaalPrijs2 = parseFloat(totaalPrijs).toFixed(2);
  $("#totaalPrijs").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");
  $("#totaalPrijs2").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");

  aantalDvi += 1;

  $("#besteldeProductenDVI").html("DVI 24+1 Male naar Female - " + "Aantal: " + aantalDvi);
  $("#besteldeProductenDVI2").html("DVI 24+1 Male naar Female - " + "Aantal: " + aantalDvi);
  $("#niksBesteld").hide();
  $("#niksBesteld2").hide();
  $("#besteldeProductenDVI").show()
  $("#besteldeProductenDVI2").show()
  $('html, body').animate({scrollTop:0}, 'fast');
  checkVerzendKosten();
}

function addPriceHyper212() {
  totaalPrijs += 25.80;
  totaalPrijs2 = parseFloat(totaalPrijs).toFixed(2);
  $("#totaalPrijs").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");
  $("#totaalPrijs2").html("De totaalprijs is: " + "€ " + totaalPrijs2 + ",-" + " excl. verzendkosten");

  aantalHyper212 += 1;

  $("#besteldeProductenHyper").html("Hyper 212 Evo CPU Cooler - " + "Aantal: " + aantalHyper212);
  $("#besteldeProductenHyper2").html("Hyper 212 Evo CPU Cooler - " + "Aantal: " + aantalHyper212);
  $("#niksBesteld").hide();
  $("#niksBesteld2").hide();
  $("#besteldeProductenHyper").show()
  $("#besteldeProductenHyper2").show()
  $('html, body').animate({scrollTop:0}, 'fast');
  checkVerzendKosten();
}

function checkVerzendKosten(){
  if(totaalPrijs2 >= 350) {
    $("#verzendKosten").html("De verzendkosten zijn: " + "€ 0,00");
    $("#verzendKosten2").html("De verzendkosten zijn: " + "€ 0,00");
  }
}

if(aantalI7 == 0) {
  $("#besteldeProductenI72").hide();
}

if(aantalI7 == 0) {
  $("#besteldeProductenKoelpasta2").hide();
}

if(aantalI7 == 0) {
  $("#besteldeProductenDVI2").hide();
}

if(aantalI7 == 0) {
  $("#besteldeProductenHyper2").hide();
}

function gaTerug(){
  $(".hideBovenSectie").show();
  $(".hideAfrekenen").hide();
}

function checkTotaalPrijsIsNul() {
  var totaalCheck = totaalPrijs;
  if(totaalCheck == 0){
    alert("U heeft nog geen product toegevoegd!");
  }
  else {
    showAfrekenen()
  }
}

function showAfrekenen(){
  $(".hideBovenSectie").hide();
  $(".hideAfrekenen").show();
}


