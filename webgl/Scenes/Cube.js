import * as THREE from 'three'
import Raf from '../Utils/Raf.js'

import WebGL from '../index.js'

export default class Cube {
  static singleton

  constructor(_options = {}) {
    if (Cube.singleton) {
      return Cube.singleton
    }
    Cube.singleton = this

    this.WebGL = new WebGL()
    this.Raf = new Raf()
    this.scene = this.WebGL.scene

    this.init()
  }

  init() {
    this.instance = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )

    this.scene.add(this.instance)
  }

  //
  // Rotation
  //
  startRotation() {
    this.Raf.suscribe('rotateCube', this.animRotation.bind(this))
  }

  animRotation(e) {
    this.instance.rotation.x = e * 0.4
    this.instance.rotation.y = e * 0.2
  }
}
