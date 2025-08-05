<script setup>
import { ref, onMounted } from 'vue'

const container = ref(null)

onMounted(async () => {
  const THREE = await import('three')
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js')
  const { PMREMGenerator } = await import('three/src/extras/PMREMGenerator.js')
  const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js')

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 1, 5)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setClearColor(0x000000, 0) 
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  // Optional: Add orbit controls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = false

  // Permitir rotar libremente en horizontal (eje X)
  controls.minAzimuthAngle = -Infinity  // o algún límite si quieres
  controls.maxAzimuthAngle = Infinity

  // Bloquear rotación vertical (eje Y) a un valor fijo, por ejemplo 90 grados (mirando al horizonte)
  controls.minPolarAngle = Math.PI / 2
  controls.maxPolarAngle = Math.PI / 2

  // Add light
  const light = new THREE.HemisphereLight(0xffffff, 0x444444)
  light.position.set(0, 20, 0)
  scene.add(light)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 10, 7.5)
  scene.add(directionalLight)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
  scene.add(ambientLight)

  const gltfLoader = new GLTFLoader()

  //HDR
  const pmremGenerator = new PMREMGenerator(renderer)
  pmremGenerator.compileEquirectangularShader()

  const rgbeLoader = new RGBELoader()
  rgbeLoader.load('http://localhost:3000/hdr/cape_hill_1k.hdr', (texture) => {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture

    scene.environment = envMap  // Esto hace que materiales PBR reflejen el entorno
    // Opcional: pone el HDR como fondo scene.background = envMap 

    texture.dispose()
    pmremGenerator.dispose()
  })


  let model = null 
  // 👇 Cambia la ruta al archivo .glb que quieras cargar
  gltfLoader.load('/models/02.glb', (gltf) => {
  model = gltf.scene

  // Ajustar escala si es necesario
  model.scale.set(2,2,2)

  // Centrar el modelo en Y
  const box = new THREE.Box3().setFromObject(model)
  const center = new THREE.Vector3()
  box.getCenter(center)

  model.position.y -= center.y // 👈 Centra verticalmente

  scene.add(model)
  console.log('Modelo cargado:', model)
}, undefined, (error) => {
  console.error('Error al cargar GLB:', error)
})

  function animate() {
  requestAnimationFrame(animate)
  if (model) {
    model.rotation.y += 0.001
  }
  controls.update()
  renderer.render(scene, camera)
}

  animate()
})

import '~/assets/css/threeDBox.css'
</script>

<template>
  <div ref="container" class="container"></div>
</template>
