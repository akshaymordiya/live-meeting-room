import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Typography.module.scss"

const Typography = ({
  tag,
  props: { className },
  props,
  text
}) => {
  return (
    React.createElement(
      tag,
      { className, ...props},
      text
    )
  )
}

Typography.defaultProps = {    
  tag: 'p',
  props: { className: styles.defaultText },
  text: 'Typography'
}

Typography.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  props: PropTypes.object
}

export default Typography