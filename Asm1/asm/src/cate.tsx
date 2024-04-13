import React from 'react'
import Header from './components/cate/Header'
import Footer from './components/cate/footer'
import Content from './components/cate/Content'

type Props = {}

const Cate = (props: Props) => {
  return (
    <div>
      <div className="title">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    </div>
      <div className="container">
        <Header/>
        <Content/>
      </div>
      <Footer/>
    </div>
  )
}

export default Cate