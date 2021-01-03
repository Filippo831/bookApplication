import Head from 'next/head'
import MainCard from './components/card/mainCard'
import NewBook from './components/modal/modal';
import Navbar from './components/navbar/navbar';

const numberCardPage = 3;

export default function Home() {
  let temp = [];
  for (let a = 0; a < numberCardPage; a++) temp.push([0])

  return (
    <div>
      {/* LIBRI */}
      <div style={{gridGap: `calc((100vh/${numberCardPage + 2})/${numberCardPage / 2})`}}
        className="grid"
      >
        {temp.map((tem, index) => {
          return (<MainCard className={index} per={50} numberCardPage={numberCardPage}></MainCard>)
        })}
      </div>
      {/* NAVBAR */}
      <div className="absolute w-full h-20 bg-yellow-800"
          style={{bottom:"0"}}
      >
        <Navbar></Navbar>
      </div>
      {/* MODAL */}
      <div>
        <NewBook></NewBook>
      </div>
    </div>
  )
}
