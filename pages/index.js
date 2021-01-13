import Head from 'next/head'
import {useState} from 'react';
import MainCard from './components/card/mainCard'
import NewBook from './components/modal/modal';
import Navbar from './components/navbar/navbar';
import {motion, AnimatePresence} from "framer-motion"

const numberCardPage = 6;

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  let temp = [];
  for (let a = 0; a < numberCardPage; a++) temp.push([0])
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
        <div style={{gridGap: `calc((100vh/${numberCardPage + 2})/${numberCardPage / 2})`}}
          className="pt-5 grid"
        >
          {temp.map((tem, index) => {
            return (<MainCard key={index} className={index} per={50} numberCardPage={numberCardPage}></MainCard>)
          })}
        </div>

        {/* NAVBAR */}
        <div className="absolute z-30 w-full h-16"
          style={{bottom: "0"}}
        >
          <Navbar toggleModalOpen={toggleModalOpen}></Navbar>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div>
            <NewBook></NewBook>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
