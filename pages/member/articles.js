import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import styles from '@/pages/forum/forumgossip.module.sass'

//components
import Forumline from '@/components/common/forumlogo/forumline'
import Navbar from '@/components/common/forumlogo/navbar'
import Forumper from '@/components/common/forumlogo/forumper'
import AdvancedExample from '@/components/common/forumlogo/pagination'
import MemberNavbar from '@/components/common/memberNavbar'
import MemberTitle from '@/components/common/title/memberTitle'
import ProfilePhoto from '@/components/common/profilePhoto'

export default function Forumgossip() {
  return (
    <>
      <div className={styles.flex}>
        <Container>
          <ProfilePhoto/>
          <Row>
            <Col>
              <MemberTitle
                text="我的文章"
                text2="ARTICLES"
                lineColor="green"
                width={860}
              />
            </Col>
          </Row>
          <MemberNavbar />
          
          <Forumper />
        </Container>
      </div>
    </>
  )
}
