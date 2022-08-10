import * as THREE from 'three'
import { Pane } from 'tweakpane'

import Sizes from './Utils/Sizes.js'
import Stats from './Utils/Stats.js'

import Renderer from './Renderer.js'
import Camera from './Camera.js'
import Raf from './Utils/Raf.js'

export default class WebGL {
  static instance

  constructor(_options = {}) {
    if (WebGL.instance) {
      return WebGL.instance
    }
    WebGL.instance = this

    this.sizes = new Sizes()
    this.raf = new Raf()
    this.setScene()
    this.setDebug()
    this.setCamera()
    this.setRenderer()

    this.sizes.on('resize', () => {
      this.resize()
    })

    this.raf.suscribe('webgl', this.update.bind(this))
  }

  setDebug() {
    if (window.location.hash === '#debug') {
      this.debug = new Pane()
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
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  destroy() {
    this.renderer.instance.domElement.remove()
    if (this.stats) this.stats.destroy()
    if (this.debug) this.debug.destroy()
  }
}
