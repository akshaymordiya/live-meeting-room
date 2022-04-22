import React from 'react'
import { mdiArrowRight, mdiHandWaveOutline } from "@mdi/js"
import styles from "./Home.module.scss"
import { Link } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
import Typography from '../../components/shared/Typography/Typography'

const handWaveIconProps = {
  size: 1.5,
  horizontal: true,
  vertical: true,
  rotate: 90,
  color: 'yellow'
}

const TypographyProps = {
  className: styles.text
}

const Home = () => {  
  return (
    <div className={styles.cardWrapper}>
      <Card
        cardTitleText="Welcome to Live meetup"
        icon={mdiHandWaveOutline}
        iconProps={handWaveIconProps}
      >
        <Typography 
          tag='p'
          props={TypographyProps}
          text="We're working hard to get Live meetup ready for everyone! while we wrap up the finishing youches, we're adding people gradually to make sure nothing breaks"
        />
        <Button 
          text="Get Your Username"
          icon={mdiArrowRight}
        />
        <div className={styles.invite}>
          <span>Have an invite text?</span>
          <Link to="/login" className={styles.invite__link}>Sign in</Link>
        </div>
      </Card>
    </div>
  )
}

export default Home