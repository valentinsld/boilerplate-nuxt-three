import * as THREE from 'three'
import anime from 'animejs'
import Raf from '../Utils/Raf.js'
import { getPositionOutOfScreen } from '../Utils/index.js'

import WebGL from '../index.js'
import Sizes from '../Utils/Sizes.js'

export default class SceneCylinder {
  static singleton

  constructor(_options = {}) {
    if (SceneCylinder.singleton) {
      return SceneCylinder.singleton
    }
    SceneCylinder.singleton = this

    this.inView = false
    this.WebGL = new WebGL()
    this.Raf = new Raf()
    this.Sizes = new Sizes()
    this.scene = this.WebGL.scene

    this.init()
    this.resize()
    this.Sizes.on('resize', this.resize.bind(this))
  }

  init() {
    this.instance = new THREE.Group()

    this.cylinder = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.5, 16, 50),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    )
    this.instance.add(this.cylinder)

    this.scene.add(this.instance)
  }

  resize() {
    this.instance.position.x = -getPositionOutOfScreen().x
    if (this.inView) this.centerCamera(0)
  }

  //
  // Animation
  //
  entered() {
    this.inView = true
    this.Raf.suscribe('rotateTorus', this.animRotation.bind(this))
  }

  animRotation(e) {
    this.cylinder.rotation.x = e * 0.4
    this.cylinder.rotation.y = e * 0.2
  }

  exit() {
    this.inView = false
    this.Raf.unsuscribe('rotateTorus')
  }

  //
  // centerCamera
  //
  centerCamera(duration = 1500) {
    const camera = this.WebGL.camera.instance
    const orbitControls = this.WebGL.camera.orbitControls

    anime({
      targets: camera.position,
      x: this.instance.position.x,
      y: 7,
      z: 7,
      easing: 'easeOutQuart',
      duration,
    })
    anime({
      targets: orbitControls.target,
      ...this.instance.position,
      easing: 'easeOutQuart',
      duration,
    })
  }
}
