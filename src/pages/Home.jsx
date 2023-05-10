import Popular from "../components/Popular"
import Vegie from "../components/Vegie"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <>
            <motion.div
              animate={{opacity: 1}}
              initial={{opacity: 0}}
              exit={{opacity: 0}}
              transition={{duration: 0.8}}
              >
                <Popular />
                <Vegie />
            </motion.div>
        </>
    )
}

export default Home;