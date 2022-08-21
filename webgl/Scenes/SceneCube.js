import * as THREE from 'three'
import anime from 'animejs'
import Raf from '../Utils/Raf.js'

import WebGL from '../index.js'

export default class SceneCube {
  static singleton

  constructor(_options = {}) {
    if (SceneCube.singleton) {
      return SceneCube.singleton
    }
    SceneCube.singleton = this

    this.WebGL = new WebGL()
    this.Raf = new Raf()
    this.scene = this.WebGL.scene

    this.init()
  }

  init() {
    this.instance = new THREE.Group()

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x0000ff })
    )
    this.instance.add(this.cube)

    this.scene.add(this.instance)
  }

  //
  // Rotation
  //
  startRotation() {
    this.Raf.suscribe('rotateCube', this.animRotation.bind(this))
  }

  animRotation(e) {
    this.cube.rotation.x = e * 0.4
    this.cube.rotation.y = e * 0.2
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
