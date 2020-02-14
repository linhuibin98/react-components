import React from 'react'
import { number, bool } from 'prop-types'

/**
 * 
 * @param {starId} 组件id用于记录在当前star组的位置
 * @param {marked} 该star是否标记,实心 
 */

Star.propTypes = {
  starId: number,
  marked: bool
}

Star.defaultProps = {
  marked: false
}

export default function Star(props) {
  const { starId, marked } = props

  return (
    <span star-id={starId} style={{color: "#ff9933"}} role='button'>
      { /* 实心 or 空心 */ }
      {marked ? "\u2605" : "\u2606"}
    </span>
  )
}