// grab everything we need
const advertisingtotal = document.querySelector('.advertisingtotal');
document.getElementById("adbtn").onclick = function() {CalculateAd()};;
var advertisinginitial,smm,logo,aa = 0;

// create functions we'll need

function CalculateAd() {
  if( document.getElementById("advertisingCheck1").checked == true ){
        smm = 500; }
  else smm = 0;
  if( document.getElementById("advertisingCheck2").checked == true ){
         logo = 500; }
  else logo = 0;
  if( document.getElementById("advertisingCheck3").checked == true ){
        aa = 3000;  }
  else aa = 0;
    advertisinginitial = smm + logo + aa;
    console.log(smm);
    console.log(logo);
    console.log(aa);
  advertisingtotal.innerText = "TTD$" + advertisinginitial;
}



// on first run     

