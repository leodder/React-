import styles from './marquee.module.sass'

// hooks
import { useState } from 'react'
// components
import Title from '@/components/common/title'
import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Marquee({ 
  data, 
  text = '相關選擇',
  text2="Related Choice" ,
  lineColor="hot_pink"
   }) {

  const [isRunning, setIsRunning]=useState(true)

  const handleMouseEnter = () => {
    setIsRunning(false)
  }
  
  const handleMouseLeave = () => {
    setIsRunning(true)
  }

  return (
    <>
      <Container className={`${styles.marqueeContainer}`}>
      <Title text={text} text2={text2} lineColor={lineColor}/>
        <div className={`${styles.marqueeContent} mt30px`}>
          <Row
            className="nowrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
          <div className={`${styles.animation}`} style={{animation: isRunning? "":'none'}}>
            {data.map((v, i) => {
              return (
                  <ShopMarqueeCard
                    // isRunning={isRunning}
                    name={v.product_name}
                    price={v.product_price}
                    src={`/${v.image}`}
                    pid={v.pid}
                  />
              )
            })}
          </div>
          </Row>
        </div>
      </Container>
    </>
  )
}
