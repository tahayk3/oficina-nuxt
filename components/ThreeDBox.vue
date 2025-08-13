<template>
  <div class="model-wrapper">
    <div v-if="loading" class="model-loader">
      <v-progress-circular
        :size="64"
        :width="6"
        color="primary"
        :value="progress"
      >
        {{ Math.floor(progress) }}%
      </v-progress-circular>
      <p style="margin-top: 10px;">Cargando modelo 3D...</p>
    </div>
    <div ref="container" class="canvas-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import '~/assets/css/threeDBox.css'

const container = ref(null)
const loading = ref(true)
const progress = ref(0)

onMounted(async () => {
  const THREE = await import('three')
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
  const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js')
  const { PMREMGenerator } = await import('three/src/extras/PMREMGenerator.js')
  const { RGBELoader } = await import('three/examples/jsm/loaders/RGBELoader.js')

  const manager = new THREE.LoadingManager(
    () => (loading.value = false),
    (url, loaded, total) => (progress.value = (loaded / total) * 100)
  )

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  camera.position.set(0, 1, 8)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  container.value.appendChild(renderer.domElement)

  const resizeRenderer = () => {
    const width = container.value.clientWidth
    const height = container.value.clientHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  resizeRenderer()
  window.addEventListener('resize', resizeRenderer)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = false
  controls.minAzimuthAngle = -Infinity
  controls.maxAzimuthAngle = Infinity
  controls.minPolarAngle = Math.PI / 2
  controls.maxPolarAngle = Math.PI / 2

  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444))
  scene.add(new THREE.DirectionalLight(0xffffff, 1))
  scene.add(new THREE.AmbientLight(0xffffff, 2.5))

  const pmremGenerator = new PMREMGenerator(renderer)
  pmremGenerator.compileEquirectangularShader()

  new RGBELoader(manager).load(
    'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2Fhdr.hdr?alt=media&token=bb0c8867-de55-4013-b8c4-65960190cd82',
    (texture) => {
      scene.environment = pmremGenerator.fromEquirectangular(texture).texture
      texture.dispose()
      pmremGenerator.dispose()
    }
  )

  let model = null
  new GLTFLoader(manager).load(
    'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/oficina-k%2F02.glb?alt=media&token=6e9ab8ea-adac-40c5-8768-5c9e4fc2b388',
    (gltf) => {
      model = gltf.scene
      model.scale.set(3.1 ,3.1 ,3.1)

      // Centrar el modelo en el mundo
      const box = new THREE.Box3().setFromObject(model)
      const center = new THREE.Vector3()
      box.getCenter(center)
      model.position.sub(center)

      scene.add(model)
    }
  )

  const animate = () => {
    requestAnimationFrame(animate)
    if (model) model.rotation.y += 0.001
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<style scoped>
.model-wrapper {
  position: relative;
  width: 100%;
  height: 900px; /* altura deseada */
  overflow: visible;
}

.canvas-container {
  width: 100%;
  height: 100%;
}


@media (max-width: 768px) {
  .canvas-container  {
    height: 400px;
    pointer-events: none;
  }
  .model-wrapper{
    height: 400px;
  }
}

.model-loader {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
}
</style>
