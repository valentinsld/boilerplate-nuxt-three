import * as THREE from 'three'
import anime from 'animejs'
import Raf from '../Utils/Raf.js'
import { getPositionOutOfScreen } from '../Utils/index.js'

import WebGL from '../index.js'

export default class SceneCylinder {
  static singleton

  constructor(_options = {}) {
    if (SceneCylinder.singleton) {
      return SceneCylinder.singleton
    }
    SceneCylinder.singleton = this

    this.WebGL = new WebGL()
    this.Raf = new Raf()
    this.scene = this.WebGL.scene

    this.init()
  }

  init() {
    this.instance = new THREE.Group()
    this.instance.position.x = getPositionOutOfScreen(5)

    this.cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 1, 4, 16),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    this.instance.add(this.cylinder)

    this.scene.add(this.instance)
  }

  //
  // Rotation
  //
  startRotation() {
    this.Raf.suscribe('rotateCylinder', this.animRotation.bind(this))
  }

  animRotation(e) {
    this.cylinder.rotation.x = e * 0.4
    this.cylinder.rotation.y = e * 0.2
  }

  centerCamera() {
    const camera = this.WebGL.camera.instance
    const orbitControls = this.WebGL.camera.orbitControls

    anime({
      targets: camera.position,
      x: this.instance.position.x,
      y: 7,
      z: 7,
      easing: 'easeOutQuart',
    })
    anime({
      targets: orbitControls.target,
      ...this.instance.position,
      easing: 'easeOutQuart',
    })
  }
}
