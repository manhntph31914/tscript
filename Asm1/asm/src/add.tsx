import React from 'react'
import Header from './components/add/Header'
import Content from './components/add/Content'
import Footer from './components/add/footer'

type Props = {}

const Add = (props: Props) => {
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

export default Add