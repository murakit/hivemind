var counter = 99;

document.getElementById("inicio").onclick = function() {
  if (!document.getElementById('menu')){

    var close = document.createElement("button");
    close.type = "button";
    close.id="closebtn";
    close.style.width = "6%";
    close.style.height = "6%";
    close.style.margin = "2.3%";
    close.style.fontSize = "15px";
    close.style.border = "none";
    close.style.borderRadius = "26px";
    close.style.background= "none";
    close.textContent = "X";
    close.onclick = function () {
      document.getElementById("closebtn").remove();
      document.getElementById("menu").remove();
    }


    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'img/454.png');
    oImg.setAttribute('alt', 'na');
    oImg.style.width = '7%';
    oImg.style.marginLeft = '-1%';
    oImg.style.marginTop = '1%';
    oImg.style.position = 'fixed';
    oImg.onclick = function () {
      window.open("radio.html");
    }

    var oImg2 = document.createElement("img");
    oImg2.setAttribute('src', 'img/231.png');
    oImg2.setAttribute('alt', 'na');
    oImg2.style.width = '7%';
    oImg2.style.marginLeft = '7.3%';
    oImg2.style.marginTop = '1%';
    oImg2.style.position = 'fixed';
    oImg2.onclick = function () {
      window.open("metaverse.html");
    }

    var oImg3 = document.createElement("img");
    oImg3.setAttribute('src', 'img/244.png');
    oImg3.setAttribute('alt', 'na');
    oImg3.style.width = '7%';
    oImg3.style.marginLeft = '16%';
    oImg3.style.marginTop = '1%';
    oImg3.style.position = 'fixed';
    oImg3.onclick = function () {
      window.open("artists.html");
    }


    var div = document.createElement("div");
    div.id="menu";
    div.style.width = "27%";
    div.style.height = "40%";
    div.style.background = "#C8E2E7";
    div.style.border = "solid white 2px";
    div.style.borderRadius = "26px";
    div.style.color = "blue";
    div.style.margin = "3.6%";
    div.style.opacity = "60%";
    div.style.marginLeft = "1%";
    div.style.bottom= "0";
    //div.style.zIndex = ++counter;
    div.style.zIndex = 99;
    div.style.position = "fixed";
    

    document.getElementById('interfaz').appendChild(div);
    document.getElementById('menu').appendChild(close);
    document.getElementById("menu").appendChild(oImg);
    document.getElementById("menu").appendChild(oImg2);
    document.getElementById("menu").appendChild(oImg3);


    /*document.getElementById("btn").onclick = function() {
      closebtn.style.zIndex = ++counter;
    }*/

}

  else {
  }
    closebtn.style.zIndex = ++counter;

}