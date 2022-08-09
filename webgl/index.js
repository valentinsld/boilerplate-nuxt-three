import * as THREE from 'three'
import GUI from 'lil-gui'

import Sizes from './Utils/Sizes.js'
import Stats from './Utils/Stats.js'

import Renderer from './Renderer.js'
import Camera from './Camera.js'

export default class WebGL {
  static instance

  constructor(_options = {}) {
    if (WebGL.instance) {
      return WebGL.instance
    }
    WebGL.instance = this

    this.sizes = new Sizes()
    this.setDebug()
    this.setScene()
    this.setCamera()
    this.setRenderer()

    this.sizes.on('resize', () => {
      this.resize()
    })

    this.update()
  }

  setDebug() {
    if (window.location.hash === '#debug') {
      this.debug = new GUI()
      this.stats = new Stats(true)

      const axesHelper = new THREE.AxesHelper(5)
      this.scene.add(axesHelper)
    }
  }

  setScene() {
    this.scene = new THREE.Scene()

    // TODO : remove Cube
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    this.scene.add(cube)
  }

  setCamera() {
    this.camera = new Camera()
  }

  setRenderer() {
    this.renderer = new Renderer({ rendererInstance: this.rendererInstance })
  }

  appendCanvas(el) {
    el.appendChild(this.renderer.instance.domElement)
  }

  update() {
    if (this.stats) this.stats.update()

    this.camera.update()

    this.renderer.update()

    window.requestAnimationFrame(() => {
      this.update()
    })
  }

  resize() {
    // Config
    const boundings = this.targetElement.getBoundingClientRect()
    this.sizes.width = boundings.width
    this.sizes.height = boundings.height

    this.sizes.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2)

    this.camera.resize()
    this.renderer.resize()
  }

  destroy() {
    this.renderer.instance.domElement.remove()
    if (this.stats) this.stats.destroy()
    if (this.debug) this.debug.destroy()
  }
}
