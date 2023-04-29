import React from 'react'
import "./style.css"

const UseState = () => {
    let initialData = 0
    const [num, setNum] = React.useState(initialData)

  return (
    <>
    {/* <div className="button" onClick={() => setNum(0)}>
        I am a button
    </div> */}
    <div className="center_div">
        <p> {num} </p>
        <div className="button2" onClick={() => setNum(num+1)}>
            {/* these spans are added to add the animation in the button when we hover on it */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2" onClick={() => num>0 ? setNum(num -  1) : setNum(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
    </div>
    </>
  )
}

export default UseState
