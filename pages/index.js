import Head from 'next/head'
import MainCard from './components/card/mainCard'

const numberCardPage = 3;

export default function Home() {
  let temp = [];
  for (let a = 0; a<numberCardPage; a++) temp.push([0])

  return (
    <div style={{gridGap: `calc((100vh/${numberCardPage + 2 })/${numberCardPage/2})`}}
      className="grid"
    >
      {temp.map(tem => {
        return (<MainCard per={50} numberCardPage={numberCardPage}></MainCard>)
      })}
    </div>
  )
}
