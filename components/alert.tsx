import React from 'react'
import styles from './alert.module.css'
import cn from 'classnames'

const Alert = ({children, type} : {children: React.ReactNode, type: string}) => {
  return (
    <div 
      className={cn({
        [styles.success]: type === 'success',
        [styles.success]: type === 'error',
      })}
    >{children}</div>
  )
}

export default Alert