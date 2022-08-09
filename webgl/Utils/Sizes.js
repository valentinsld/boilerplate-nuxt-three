import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter {
  /**
   * Constructor
   */
  constructor() {
    super()

    // Resize event
    this.resize = this.resize.bind(this)
    window.addEventListener('resize', this.resize)

    this.resize()
  }

  /**
   * Resize
   */
  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.ratio = window.innerWidth / window.innerHeight
    this.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2)

    this.trigger('resize')
  }
}
