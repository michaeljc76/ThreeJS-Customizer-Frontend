import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import state from '../store'
import { CustomButton } from '../components'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion'


const Home = () => {
    const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain'/>
                </motion.header>

                <motion.div className='motion.content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            UPLOAD <br /> COLOR <br /> SAVE.
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-300 text-base'>
                            Draft your shirt ideas using this AI-Powered 3D customization tool. Click <strong>Customize </strong> to begin.
                        </p>
                        <CustomButton 
                            type='filled'
                            title = "CUSTOMIZE"
                            handleClick={() => state.intro = false}
                            customStyles = 'w-full px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home