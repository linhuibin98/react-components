import React, { createRef } from 'react'
import PropTypes from 'prop-types'
import './tag.scss'

/**
 * Tag标签组件
 * @param {onClose} func 标签关闭时的回调
 * @param {closable} bool 标签是否可以关闭
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */

Tag.propTypes = {
  color: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func
}

export default function Tag (props) {
  let { children, closable, onClose, color } = props 
  let tag = createRef() 

  const handleClose = () => {
    onClose && onClose()
    tag.current.style.display = 'none'
  }

  return (
    <div
      className={`tag ${color ? 'tagHasColor' : ''}`}
      style={{ backgroundColor: color }}
      ref={ tag } >
      { children }
      { closable && <span className='closeBtn' onClick={ handleClose }>x</span> }
    </div>
  )
}