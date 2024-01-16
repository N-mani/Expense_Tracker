import { motion } from 'framer-motion'
const Header = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="font-bold text-2xl w-1/2 text-center p-2 capitalize"
      >
        track your budget
      </motion.h1>
    </>
  )
}

export default Header
