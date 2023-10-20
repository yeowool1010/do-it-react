import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

const AboutPage = () => {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])


  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res)=> res.json())
      .then((json)=>{ 
        setCoins(json)
        setLoading(false)
      })
  },[])
  return (
  <Layout title="Coin | Next.js + TypeScript Example">
    <h1>Coin</h1>
    <div>
      <h1>the coins!</h1>
      {loading ? 
        <strong>loading...</strong>: null
      }
      <ul>
        {coins.map((coin)=> {
          return (
            <li>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}USD
            </li>
          )
        })}
      </ul>
    </div>
    <p>
      <Link href="/">Go To Do</Link>
    </p>
  </Layout>
)
}
export default AboutPage
