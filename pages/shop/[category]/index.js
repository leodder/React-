import styles from './category.module.sass'
// hooks
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import usePath from '@/hooks/usePath.js'
// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//components
import ShopTop from '@/components/common/shopTop'
import ShopProductsCard from '@/components/common/cards/ShopProductsCard'
import ShopTitle from '@/components/common/title/ShopTitle'
import TitleData from '@/components/mydata/productsTitleData'

export default function Category() {
  const router = useRouter()
  const { category } = router.query //抓出類別
  const categoryData = TitleData.find((item) => item.id === category)

  // const [keyword, setKeyword] = useState('')
  const [data, setData] = useState()

  useEffect(() => {
    if (!category) return
    fetch(`${process.env.API_SERVER}/shop/${category}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [router.query])

  const { imgSrc } = usePath(data)
  const chunkArray = (arr, size) => {
    const chunks = []
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size))
    }
    return chunks
  }
  const imgChunks = chunkArray(imgSrc, 5)

  if (!data) return <p>Loading...</p>
  return (
    <Container className={`${styles.container}`}>
      <ShopTop />
      {/* Title */}
      <ShopTitle text={categoryData?.text} lineColor="green"  link={`/shop/cookies`}/>
      {/* 商品 */}
      {imgChunks?.map((chunk, rowIndex) => (
        <Row key={rowIndex} className={`${styles.row}`}>
          {chunk.map((src, colIndex) => {
            const products = data[colIndex + rowIndex * 5]
            return (
              <Col key={colIndex}>
                <ShopProductsCard
                  src={src}
                  text={products?.product_name}
                  price={products?.product_price}
                  category={category}
                  pid={products?.pid}
                  stars={products?.stars}
                  stock_num={products?.stock_num}
                />
              </Col>
            )
          })}
        </Row>
      ))}
    </Container>
  )
}
