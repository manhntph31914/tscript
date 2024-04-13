import React from 'react'
import '../../css/404.css'
type Props = {}

const Content = (props: Props) => {
  return (
    <div>
        <div className="ct-404">
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <button>Back to home page</button>
        </div>
    </div>
  )
}

export default Content