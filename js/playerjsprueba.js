 if (!document.getElementById('player2d')){
    var close = document.createElement("button");
    close.type = "button";
    close.id="closebtn2";
    close.style.width = "3%";
    close.style.height = "5%";
    close.style.fontSize = "15px";
    close.style.borderRadius = "25px";
    close.textContent = "X";
    close.style.position = "fixed";
    close.onclick = function () {
    document.getElementById("btn2").remove();
       //document.getElementById("closebtn2").remove();
    }
      var div = document.createElement("div");
      div.id="player2d";
      div.style.width = "30%";
      div.style.height = "45%";
      div.className = "dragme";
      div.style.borderRadius = "25px";
      div.style.border = "solid blue";
      div.style.color = "blue";
      div.style.margin = "10%";
      div.style.zIndex = 99;
      div.style.position = "fixed";

      var img = document.createElement("img");
      img.src= "img/playerdenu.png";
      img.style.zIndex = 99;
      img.style.width = "100%";
      img.style.height = "100%";



      document.getElementById('radio').appendChild(div);
      document.getElementById('player2d').appendChild(close);
      document.getElementById('player2d').appendChild(img);

      
      document.getElementById("player2d").onclick = function() {
        player2d.style.zIndex = ++counter;
      }
  }
  else {
 
  }
  player2d.style.zIndex = ++counter;
