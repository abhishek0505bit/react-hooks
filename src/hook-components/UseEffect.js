import React, { useEffect } from 'react'

//hooks are always used as the top level element in the function or component

const UseEffect = () => {
    let initialData = 0
    const [num, setNum] = React.useState(initialData) // this is use State

    // this is use Effect
    useEffect(()=>{
        //here we have used template literal, which will change the title of document after every render
        document.title = `Chats(${num})`

    })// this synatax with no dependency will run the useEffect after every page render

    
    // useEffect(()=>{
    //     console.log("HI")

    // },[])//this syntax with array dependency will run the useEffect only one time after page reload

  return (
    <>
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
    </div>
    </>
  )
}

export default UseEffect
