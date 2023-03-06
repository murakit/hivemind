var scene, renderer;
var camera;
var controls;
var mixer;
var clock = new THREE.Clock();
var model;

setUp();

function setUp() {
    setupWorld();
    animate(); 
}

function setupWorld() {
    clock = new THREE.Clock();
    $container = $('.container');
    scene = new THREE.Scene();
    //scene.background = new THREE.Color('#808080');
    camera = new THREE.PerspectiveCamera(110, 1, 0.001, 10000);
    //camera.target = new THREE.Vector3(0, 500, 200);
    camera.position.set( 0, -0.65, 7);
    //camera.position.set(0,0,0);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //renderer.setSize(window.innerHeight,window.innerWidth);

    //document.body.appendChild(renderer.domElement);

    document.body.appendChild(renderer.domElement);

    renderer.setPixelRatio(window.devicePixelRatio);
    element = renderer.domElement;
    $container.append(element);


    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.maxZoom = 0.9;
    controls.rotateSpeed = 1;
    controls.zoomSpeed = 0.2;
    controls.panSpeed = 0.8;

    controls.target.set(0, -0.65, 0);
    controls.update();


    /*document.body.appendChild(renderer.domElement);

    document.body.appendChild(renderer.domElement);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerHeight,window.innerWidth);

    renderer.outputEncoding = THREE.sRGBEncoding;
    element = renderer.domElement;
    $container.append(element);


    var width  = $container.width();
    var height = $container.height();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);*/

    var width  = $container.width();
    var height = $container.height();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize($container.width(), $container.height());


    $(window).on('resize', resize);


    function resize() {
        var width  = $container.width();
        var height = $container.height();
    
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    
        renderer.setSize($container.width(), $container.height());
    }
    

    renderer.setSize(width, height);


    renderer.setPixelRatio(window.devicePixelRatio);
    element = renderer.domElement;
    $container.append(element);


    var Hlight = new THREE.SpotLight( 0X5dc1b9 , 2  ); // soft white light
    Hlight.position.y=2;
    Hlight.position.z=5;
    Hlight.position.x=6;

    scene.add( Hlight ); 

    var Hlight = new THREE.HemisphereLight(  0X5dc1b9 , 1  ); // soft white light
    Hlight.position.y=1;
    Hlight.position.z=2;
    Hlight.position.x=1;

    //scene.add( Hlight ); 

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
            model= gltf.scene;
            scene.add(model );

        },
        function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
        function ( error ) {
            console.log( 'An error happened' );
        }
    );

    var bkTexture = new THREE.ImageUtils.loadTexture( 'glb/BG.png' );
    bkTexture.wrapS = bkTexture.wrapT = THREE.RepeatWrapping;
    bkTexture.repeat.set( 1, 1 );
    var bkMaterial = new THREE.MeshBasicMaterial( { map: bkTexture, side: THREE.DoubleSide, transparent:true } );
    var bkGeometry = new THREE.SphereGeometry(200, 200, 200);
    var bk = new THREE.Mesh(bkGeometry, bkMaterial);
    bk.position.y = 120;
    bk.position.z = 0;
    bk.rotation.x = Math.PI / 1;
    bk.receiveShadow = true;
    scene.add(bk);
    
}
    function animate() {
        requestAnimationFrame( animate );
        var delta = clock.getDelta();
        if (mixer) {
            mixer.update(delta);
        }

        if (model){
             model.rotation.y += 0.003;
        }
        renderer.render( scene, camera );
        camera.position;
        controls.update();
  
    }