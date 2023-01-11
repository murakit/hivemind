

var counter = 99;
var audio = new Audio('radio/song.mp3');

 document.getElementById("imagen1").ondblclick = function() {
   if (!document.getElementById('btn')){

    var close = document.createElement("button");
    close.type = "button";
    close.id="closebtn";
    close.style.width = "8%";
    close.style.height = "8%";
    close.style.fontSize = "15px";
    close.style.borderRadius = "25px";
    close.textContent = "X";
    close.onclick = function () {
      document.getElementById("btn").remove();
      //document.getElementById("closebtn").remove();
    }

     var div = document.createElement("div");
     div.id="btn";
     div.style.width = "20%";
     div.style.height = "40%";
     div.className = "dragme";
     div.style.background = "white";
     div.style.border = "solid blue";
     div.style.borderRadius = "25px";
     div.style.color = "blue";
     div.style.margin = "10%";
     //div.style.zIndex = ++counter;
     div.style.zIndex = 99;
     div.style.position = "fixed";
     document.getElementById('radio').appendChild(div);
     document.getElementById('btn').appendChild(close);

     logoWorld();
     document.getElementById("btn").onclick = function() {
       btn.style.zIndex = ++counter;
     }


}

else {
}
    btn.style.zIndex = ++counter;

}


if (!document.getElementById('btn3')){

    var close = document.createElement("button");
    close.type = "button";
    close.id="closebtn3";
    close.style.width = "6%";
    close.style.height = "8%";
    close.style.fontSize = "15px";
    close.style.borderRadius = "25px";
    close.style.margin = "1%";
    close.style.marginLeft = "85%";
    close.textContent = "X";
    close.onclick = function () {
      document.getElementById("btn3").remove();
      //document.getElementById("closebtn2").remove();
    }

     var div = document.createElement("div");
     div.id="btn3";
     div.style.width = "30%";
     div.style.height = "35%";
     div.className = "dragme";
     div.style.background = "white";
     div.style.borderRadius = "25px";
     div.style.border = "solid blue";
     div.style.color = "blue";
     div.style.zIndex = ++counter;
     div.style.position = "fixed";
     div.style.marginTop = "20%";
     div.style.marginLeft = "30%";

     document.getElementById('radio').appendChild(div);
     document.getElementById('btn3').appendChild(close);

     player();

     document.getElementById("btn3").onclick = function() {
       btn3.style.zIndex = ++counter;
     }

 }

 else {

 }
    
    btn3.style.zIndex = ++counter;


 document.getElementById("imagen").ondblclick = function() {
   if (!document.getElementById('btn3')){

    var close = document.createElement("button");
    close.type = "button";
    close.id="closebtn3";
    close.style.width = "6%";
    close.style.height = "8%";
    close.style.fontSize = "15px";
    close.style.borderRadius = "25px";
    close.style.margin = "1%";
    close.style.marginLeft = "85%";
    close.textContent = "X";
    close.onclick = function () {
      document.getElementById("btn3").remove();
      //document.getElementById("closebtn2").remove();
    }

     var div = document.createElement("div");
     div.id="btn3";
     div.style.width = "30%";
     div.style.height = "35%";
     div.className = "dragme";
     div.style.background = "white";
     div.style.borderRadius = "25px";
     div.style.border = "solid blue";
     div.style.color = "blue";
     div.style.zIndex = ++counter;
     div.style.position = "fixed";
     div.style.marginTop = "20%";
     div.style.marginLeft = "30%";

     document.getElementById('radio').appendChild(div);
     document.getElementById('btn3').appendChild(close);

     player();

     document.getElementById("btn3").onclick = function() {
       btn3.style.zIndex = ++counter;
     }

 }

 else {

 }
    
    btn3.style.zIndex = ++counter;


}

document.getElementById("imagenteam").ondblclick = function() {
    if (!document.getElementById('btn2')){

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
      div.id="btn2";
      div.style.width = "30%";
      div.style.height = "45%";
      div.className = "dragme";
      div.innerHTML =  "<b>" + "&nbsp&nbspCreative Direction:" + '<br>' + "&nbsp&nbspNickelly Garbaje"  + '<br>' + "&nbsp&nbsplAU"+ '<br>' + "&nbsp&nbspAndi García" + "&nbsp&nbspDenu" + '<br>' + "&nbsp&nbspMurakit"+ '<br>' ;
      div.style.background = "white";
      div.style.borderRadius = "25px";
      div.style.border = "solid blue";
      div.style.color = "blue";
      div.style.margin = "22%";
      div.style.zIndex = 99;
      div.style.position = "fixed";


      document.getElementById('radio').appendChild(div);
      document.getElementById('btn2').appendChild(close);
      
      document.getElementById("btn2").onclick = function() {
        btn2.style.zIndex = ++counter;
      }
  }
  else {
 
  }

  btn2.style.zIndex = ++counter;

 
 }

function startDrag(e) {
       if (!e) {
           var e = window.event;
       }
       if(e.preventDefault) e.preventDefault();
       targ = e.target ? e.target : e.srcElement;

       if (targ.className != 'dragme') {return};

           offsetX = e.clientX;
           offsetY = e.clientY;

       if(!targ.style.left) { targ.style.left='0px'};
       if (!targ.style.top) { targ.style.top='0px'};

       coordX = parseInt(targ.style.left);
       coordY = parseInt(targ.style.top);
       drag = true;

           document.onmousemove=dragDiv;
       return false;
   }

   function dragDiv(e) {
       if (!drag) {return};
       if (!e) { var e= window.event};
       targ.style.left=coordX+e.clientX-offsetX+'px';
       targ.style.top=coordY+e.clientY-offsetY+'px';
       return false;
   }

   function stopDrag() {
       drag=false;
   }

   window.onload = function() {
       document.onmousedown = startDrag;
       document.onmouseup = stopDrag;
   }

//////WALLET

   document.getElementById("bioW").onclick = function() {

   }



   function logoWorld() {
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3D WORLD
    
    var scene, renderer;
    var camera;
    var controls;
    var mixer;
    var clock = new THREE.Clock();

    setUp();

    function setUp() {
        setupWorld();
        animate(); 
    }

    function setupWorld() {
        clock = new THREE.Clock();
        $container = $('#btn');
        scene = new THREE.Scene();
        //scene.background = new THREE.Color('#808080');
        scene.background = new THREE.CubeTextureLoader()
        .setPath( 'cubemap/' )
        .load( [
    
           'bluecloud_ft.png',
            'bluecloud_bk.png',
            'bluecloud_up.png', 
            'bluecloud_dn.png',
            'bluecloud_rt.png',
            'bluecloud_lf.png'
        ] );
    
        camera = new THREE.PerspectiveCamera(120, 1, 0.001, 10000);
        //camera.target = new THREE.Vector3(0, 500, 200);
        camera.position.set( 0.47, -0.2, 6);
        //camera.position.set(0,0,0);
        scene.add(camera);

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        //renderer.setSize(window.innerHeight,window.innerWidth);

        document.body.appendChild(renderer.domElement);
        renderer.setPixelRatio(window.devicePixelRatio);
        element = renderer.domElement;
        $container.append(element);


        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.maxZoom = 0.9;
        controls.rotateSpeed = 2;
        controls.zoomSpeed = 0.2;
        controls.panSpeed = 0.8;

        controls.target.set(0, 0, 0);
        controls.update();

        var width  = $container.width();
        var height = $container.height();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height - 55);

        renderer.setPixelRatio(window.devicePixelRatio);
        element = renderer.domElement;
        $container.append(element);

        var Hlight = new THREE.SpotLight( 0X5dc1b9 , 1  ); // soft white light
        Hlight.position.y=60;
        Hlight.position.z=-10;
        Hlight.position.x=10;

        scene.add( Hlight ); 

        var Hlight = new THREE.HemisphereLight( 0X5dc1b9 , 0X5dc1b9 , 1  ); // soft white light
        Hlight.position.y=5;
        Hlight.position.z=2;
        Hlight.position.x=1;

        scene.add( Hlight ); 

        const manager = new THREE.LoadingManager();
        manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
                console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            };
            manager.onLoad = function ( ) {
                console.log( 'Loading complete!');
            };
            manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
                console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            };

            manager.onError = function ( url ) {
                console.log( 'There was an error loading ' + url );
            };

 

        var loader = new THREE.GLTFLoader(manager);
            loader.load('glb/untitled.glb', function ( gltf ) {
            // const tloader = new THREE.TextureLoader();
                //tloader.load("img/pl07_skin.png", function(tloader){
                    gltf.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {
                        child.material.needsUpdate = true;
                        child.material.flipY = false;
                        }

                    });
            // });
                gltf.scene.traverse( function( object ) {
                    object.frustumCulled = false;
                } );
                scene.add( gltf.scene );

            },
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

    }
        function animate() {
            requestAnimationFrame( animate );
            var delta = clock.getDelta();
            if (mixer) {
                mixer.update(delta);
            }
            renderer.render( scene, camera );
            controls.update();

        }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }




    function player() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3D WORLD
        
        var scene, renderer;
        var camera;
        var controls;
        var mixer;
        var clock = new THREE.Clock();
    
        setUp();
    
        function setUp() {
            setupWorld();
            animate(); 
        }
    
        function setupWorld() {
            clock = new THREE.Clock();
            $container = $('#btn3');
            scene = new THREE.Scene();
            scene.background = new THREE.Color('#FFFFFF');
        
            camera = new THREE.PerspectiveCamera(120, 1, 0.001, 10000);
            //camera.target = new THREE.Vector3(0, 500, 200);
            camera.position.set( -0.027, 2, 7);
            //camera.position.set(0,0,0);
            scene.add(camera);
    
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            //renderer.setSize(window.innerHeight,window.innerWidth);
    
            document.body.appendChild(renderer.domElement);
            renderer.setPixelRatio(window.devicePixelRatio);
            element = renderer.domElement;
            $container.append(element);
    
    
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            //controls.autoRotate = true;
            controls.maxZoom = 0.9;
            controls.rotateSpeed = 2;
            controls.zoomSpeed = 0.2;
            controls.panSpeed = 0.8;
    
            controls.target.set(0, 2.1, 0);
            controls.update();
    
            var width  = $container.width();
            var height = $container.height();
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height - 65);
    
            renderer.setPixelRatio(window.devicePixelRatio);
            element = renderer.domElement;
            $container.append(element);
    
            var Hlight = new THREE.SpotLight( 0X5dc1b9 , 1  ); // soft white light
            Hlight.position.y=60;
            Hlight.position.z=-10;
            Hlight.position.x=10;
    
            scene.add( Hlight ); 
    
            var Hlight = new THREE.HemisphereLight( 0X5dc1b9 , 0X5dc1b9 , 1  ); // soft white light
            Hlight.position.y=5;
            Hlight.position.z=2;
            Hlight.position.x=1;
    
            scene.add( Hlight ); 


            var playerTexture = new THREE.ImageUtils.loadTexture( 'glb/player.png' );
            playerTexture.wrapS = playerTexture.wrapT = THREE.RepeatWrapping; 
            playerTexture.repeat.set( 1, 1 );
            var playerMaterial = new THREE.MeshPhongMaterial( { map: playerTexture, side: THREE.DoubleSide, transparent:true } );
            var playerGeometry = new THREE.PlaneGeometry(30, 30, 1, 1);
            var player = new THREE.Mesh(playerGeometry, playerMaterial);
            player.position.y = 2;
            player.position.z = 0;
            player.rotation.z = Math.PI / 2;
           // player.rotation.z = Math.PI / -4;
            player.receiveShadow = true;
            scene.add(player);


    
            const manager = new THREE.LoadingManager();
            manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
                    console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
                };
                manager.onLoad = function ( ) {
                    console.log( 'Loading complete!');
                };
                manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
                    console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
                };
    
                manager.onError = function ( url ) {
                    console.log( 'There was an error loading ' + url );
                };
    
     
    
            var loader = new THREE.GLTFLoader(manager);
                loader.load('glb/SYMBOLGLB.glb', function ( gltf ) {
                // const tloader = new THREE.TextureLoader();
                    //tloader.load("img/pl07_skin.png", function(tloader){
                        gltf.scene.traverse( function ( child ) {
                            if ( child.isMesh ) {
                            child.material.needsUpdate = true;
                            child.material.flipY = false;
                            }
    
                        });
                // });
                    gltf.scene.traverse( function( object ) {
                        object.frustumCulled = false;
                    } );
                    scene.add( gltf.scene );
    
                },
                function ( xhr ) {
                    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
                },
                function ( error ) {
                    console.log( 'An error happened' );
                }
            );
    
        }
            function animate() {
                requestAnimationFrame( animate );
                var delta = clock.getDelta();
                if (mixer) {
                    mixer.update(delta);
                }
                renderer.render( scene, camera );
                controls.update();
            }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    