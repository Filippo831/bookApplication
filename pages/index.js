import Head from 'next/head'
import {useContext, useState} from 'react';
import MainCard from './components/card/mainCard'
import NewBook from './components/modal/modal';
import Navbar from './components/navbar/navbar';
import {motion, AnimatePresence} from "framer-motion"
import {BookDataContext} from './context/booksData';
import {SetModalOpenContext} from "./context/inputData"


export default function Home() {
  //get book list from context 
  let bookData = useContext(BookDataContext) 
  let {toggleModalOpen, modalOpen} = useContext(SetModalOpenContext)

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      {/* --- blur when modal open ---*/}
      <motion.div
        animate={modalOpen ? {filter: "blur(5px)"} : {filter: "blur(0)"}}
        style={{minHeight: "100vh"}}
      >

        {/* LIBRI */}
        <div 
          className="pt-5 pb-10 grid gap-10"
          style={{minHeight:"100vh"}}
        >
        {bookData.map((book, index) => {
            return (<MainCard bookData={book} key={index} className={index}></MainCard>)
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
          <div className="fixed top-0 z-30 w-screen h-screen" >
            <NewBook toggleModalOpen={toggleModalOpen}></NewBook>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
