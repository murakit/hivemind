
    clock = new THREE.Clock();
    $container = $('.container');
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

