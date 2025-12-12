import Child from "./Child"

let App = ()=>{
    // let name = "Taresh Tandon"
    // let age = 22

    // var myinfo = {
    //     name:'Sanjay Yadav',
    //     age:23,
    //     city:'Bhopal'
    // }

    // let add = {
    //     i++
    // }

    return(
        <>
            <h1>This is Props</h1>
        {/* <Child myname='Taresh' age={20}/> */}
        {/* <Child myname={name} age={age}/> */}
        <Child myname='Taresh' age={25}/>
        {/* <Child mydata={myinfo}/> */}
        {/* <h1 className="zero">0</h1>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={reset}>reset</button> */}
        </>
    )
}
// React Fragment or empty tag<></>
// props full form properties iska kaam parent se child me data paas krna

export default App




