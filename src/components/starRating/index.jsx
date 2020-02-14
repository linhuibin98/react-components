import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Star from '../star'

// 评分组件
/**
 *
 * @param {rate} 默认评分
 */

StarRating.propTypes = {
  rate: PropTypes.number
}

StarRating.defaultProps = {
  rate: 0
}

export default function StarRating(props) {
  const { rate } = props
  // rating最终分数显示
  const [rating, setRating] = useState(rate)
  const [selection, setSelection] = useState(0)

  // 处理鼠标悬停事件
  const handleOver = useCallback(event => {
    
    if (event && event.target && event.target.getAttribute) {
      let val = event.target.getAttribute('star-id')
      setSelection(val)
    } else {
      setSelection(0)
    }
  }, [])

  // 点击评分
  const handleClick = useCallback(
    event => {
      setRating(event.target.getAttribute("star-id") || rate)
    },
    [rate]
  )

  return (
    <div
      onMouseOver={handleOver}
      onMouseOut={() => handleOver(null)}
      onClick={handleClick}
      style={{display: 'inline-block'}}
      >
      {Array.from({ length: 5 }, (v, i) => {
        return (
          <Star
            key={`star${i}`}
            starId={i + 1}
            marked={selection ? i + 1 <= selection : i + 1 <= rating}
          />
        )
      })}
    </div>
  )
}
