import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#ff3856',
    shirtColor: '#FFFFFF',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/threejs.png',
    fullDecal: '/threejs.png'
})

export default state;