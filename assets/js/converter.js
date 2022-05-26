document.getElementById("convert-button").onclick = function(){convertToUSD()};

function convertToUSD() {
    cost = cost * 0.147158;
    console.log("USD Conversion: " + cost.toFixed(2))
    total.innerText = "USD$" + cost.toFixed(2);
  }

