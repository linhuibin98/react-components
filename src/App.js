import React from 'react'
import Tag from './components/tag'
import TagGroup from './components/tag-group'
import './App.css'

const tagList = ['兴趣', '爱好']

function App() {
  return (
    <div className="App">
      App
      <Tag closable>爱好</Tag>
      <TagGroup tagList={tagList} closable/>
    </div>
  )
}

export default App
