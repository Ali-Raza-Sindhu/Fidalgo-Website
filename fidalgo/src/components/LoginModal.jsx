import React from 'react'
import { MdClose } from 'react-icons/md'
import Login from './Login'
import { motion } from 'framer-motion'

const LoginModal = ({onClose}) => {
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Model Content */}
        <motion.div className="relative z-10 "
        initial={{opacity : 0 , y : 60}}
        animate={{opacity : 1, y : 0}}
        transition={{duration : 0.4, ease : 'easeOut'}} onClick={(e) => e.stopPropagation()}>
          <button
            className="absolute top-10 right-45 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
            onClick={onClose}
          >
            <MdClose />
          </button>

          {/* Login Content */}
          <div className="absolute top-20 left-66 -translate-y-1">
            <Login />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginModal