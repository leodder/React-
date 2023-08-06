import styles from './WorshipStepBar.module.sass'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function WorshipStepBar({ id = 'chooseGod' }) {
  const [currentId, setCurrentId] = useState(id)
  const [temp, setTemp] = useState(currentId)
  const [click, setClick] = useState(true)
  // console.log('id:', id)
  // console.log('current:', currentId)
  // console.log('temp:', temp)

  console.log(click)

  useEffect(() => {
    if (currentId != id && !click) {
      setCurrentId(id)
    } else {
      if (temp != currentId) {
        setCurrentId(temp)
      }
    }
    console.log('----')
  }, [id])

  const steps = [
    {
      id: 'chooseGod',
      text: '選擇神明',
    },
    {
      id: 'chooseDate',
      text: '挑選日期',
    },
    {
      id: 'chooseTime',
      text: '預約時辰',
    },
    {
      id: 'nextStep',
      text: '下一步',
    },
  ]

  const scrollTo = (id) => {
    setClick(true)
    setCurrentId(id)
    // 取得目標元素的位置
    const content = document.getElementById(id)
    const contentPosition = content.getBoundingClientRect().top

    // 計算捲動的距離，這裡設定為捲動至目標元素頂部距離畫面頂部的距離
    const offset = window.pageYOffset
    const scrollDistance = contentPosition + offset - 10
    // 執行捲動動作
    if (click) {
      window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth',
      })
      // setClick(false)
    }
  }

  return (
    <Row className={`${styles.container} ms30px mt10px`}>
      <Col>
        <div className={`${styles.circleContainer}`}>
          {steps.map((v, i) => {
            return (
              <Fragment key={v.id}>
                <div
                  role="presentation"
                  className={`${styles.align}`}
                  onClick={() => {
                    setClick(true)
                    setTemp(v.id)
                    scrollTo(v.id)
                  }}
                >
                  {/* 數字 */}
                  <div
                    className={`${styles.circle} ${styles.active} fs24px`}
                    style={{
                      opacity:
                        v.id === currentId
                          ? // ? temp === currentId
                            1
                          : // : 0.5
                            0.5,
                    }}
                  >
                    {i + 1}
                  </div>
                  {/* 文字 */}
                  <div
                    className={`${styles.text} fwBold ms10px fs18px`}
                    style={{
                      opacity:
                        v.id === currentId
                          ? // ? temp === currentId
                            1
                          : // : 0.5
                            0.5,
                    }}
                  >
                    {v.text}
                  </div>
                </div>
                {i != steps.length - 1 ? (
                  <div className={`${styles.line} ms22px mt5px mb5px`}></div>
                ) : (
                  ''
                )}
              </Fragment>
            )
          })}
        </div>
      </Col>
    </Row>
  )
}
