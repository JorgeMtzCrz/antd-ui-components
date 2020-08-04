import React from 'react'
import LayoutC from './components/Layout'
import PaginationC from './components/PaginationC'
import { Rate, Popover, Button } from 'antd'

const content = <p>¿Cómo estuvo antd?</p>

function App() {
  return (
    <LayoutC>
      <PaginationC />
      <Popover content={content} title="Jalooooo">
        <Button type="primary">Hover me</Button>
      </Popover>
      <Rate allowHalf defaultValue={2.5} />
    </LayoutC>
  )
}

export default App
