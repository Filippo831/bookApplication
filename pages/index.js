import Head from 'next/head'
import Card from './components/card/card'

export default function Home() {
  const temp = [0, 0, 0, 0];
  return (
    <div style={{gridGap:"calc((100vh/3)/4)"}} className="grid">
      <Card per={50}></Card>
      <Card per={50}></Card>
      <Card per={30}></Card>
      <Card per={100}></Card>
    </div>
  )
}
