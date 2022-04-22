import React from 'react'
import { Icon } from "@mdi/react"
import styles from "./Button.module.scss"

const Button = ({
  text,
  icon,
  iconProps
}) => {
  return (
    <button className={styles.btn}>
      <span className={styles.btn_text}>{text}</span>
      {icon && (
        <Icon
        path={icon}
        size={1}
        color="white"
        {...iconProps}
        />
      )}
    </button>
  )
}

export default Button