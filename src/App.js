import React from 'react'
import Tag from './components/tag'
import TagGroup from './components/tag-group'
import StarRating from './components/starRating'
import './App.css'

const tagList = ['兴趣', '爱好']

function App() {
  return (
    <div className="App">
      <div>App</div>
      <Tag closable>爱好</Tag>
      <TagGroup tagList={tagList} closable/>
      <div>
        <StarRating />
      </div>
    </div>
  )
}

export default App
