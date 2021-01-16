import Head from 'next/head'
import {useState} from 'react';
import MainCard from './components/card/mainCard'
import NewBook from './components/modal/modal';
import Navbar from './components/navbar/navbar';
import {motion, AnimatePresence} from "framer-motion"


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  let temp = [];
  for (let a = 0; a < 1; a++) temp.push([0])
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div>
      <motion.div
        animate={modalOpen ? {filter: "blur(5px)"} : {filter: "blur(0)"}}
        style={{minHeight: "100vh"}}
      >

        {/* LIBRI */}
        <div style={{gridGap:"30px"}}
          className="pt-5 pb-10 grid"
          style={{minHeight:"100vh"}}
        >
          {temp.map((tem, index) => {
            return (<MainCard key={index} className={index} per={100}></MainCard>)
          })}
        </div>

        {/* NAVBAR */}
        <div className="sticky bottom-0 z-50 w-full h-16" >
          <Navbar toggleModalOpen={toggleModalOpen}></Navbar>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div>
            <NewBook toggleModalOpen={toggleModalOpen}></NewBook>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
