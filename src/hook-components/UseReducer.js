import React, { useReducer } from 'react'

//reducer function takes two arguments i.e, current state and action type
// and returns updated state
const reducer = ( state, action ) => {
    if( action.type === "INCR"){
        state = state + 1
    }

    if ( state>0 && action.type === "DECR"){
        state = state - 1
    }
    return state

}


// Use Reducer is same as Use State hook
// the difference is useState is beneficial in using in small projects whereas use Reducer is beneficial in using in big projects
// useState = (small projects)     useReducer = (BIg projects)
const UseReducer = () => {

    let initialData = 10
    const [state, dispatch] = useReducer(reducer, initialData)// use Reducer returns two things i.e, current state and dispatch method 
    // use Reducer accepts two arguments i.e, reducer function and initial data
    // 'initial data' will be equal to value of the current 'state' value
    // 'dispatch' is used to trigger 'reducer' function
    // 'reducer' has the functionality to change the value of state variable

  return (
    <>
    <div className="center_div">
        <p> {state} </p>
        <div className="button2" onClick={() => dispatch({ type : "INCR" })}>
            {/* these spans are added to add the animation in the button when we hover on it */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2" onClick={() => dispatch({ type : "DECR" })}>
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

export default UseReducer
