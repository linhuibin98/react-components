import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../tag'
import './tag-group.scss'

/**
 * TagGroup标签组组件
 * @param {tagList} array 标签列表组
 * @param {closable} bool 标签是否可以关闭
 * @param {color} string 标签的颜色,不设置则为默认颜色
 */

TagGroup.propTypes = {
  tagList: PropTypes.array,
  closable: PropTypes.bool
}

TagGroup.defaultProps = {
  tagList: [],
  closable: false
}

export default function TagGroup(props) {
  let { tagList, closable } = props

  return (
    <div className='tagGroup'>
      {
        tagList.map((value, index) => {
          return <Tag closable={closable} key={value + index}>
            { value }
          </Tag>
        })
      }
    </div>
  )
}