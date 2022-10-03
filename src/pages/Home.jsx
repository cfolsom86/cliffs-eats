import Veggie from '../components/Veggie.jsx'
import Popular from '../components/Popular.jsx'
import Dessert from '../components/Dessert.jsx'
import React from 'react'
import { motion } from 'framer-motion'

function home() {
  return (
    <motion.div
    animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{ duration: 2}}>
      
      <Popular />
      <Veggie />
      <Dessert />
      
    </motion.div>
  );
}

export default home