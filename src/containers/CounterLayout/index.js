import './counterlayout.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/slices/counterSlice'

function CounterLayout() {
  const dispatch = useDispatch();
  //Accessing store state
  const { value:count } = useSelector(store => store.counter)

  // const [count, setCount] = useState(0);

  // const decreaseValue = () => {
  //   setCount(prev => prev - 1)
  // }
  // const increaseValue = () => {
  //   setCount(prev => prev + 1)
  // }

  //Set a 5 sec timer to reset the counter
  // useEffect(() => {
  //   if (count === 0) return;
  //   console.log("Timer set")
  //   let id = setTimeout(() => {
  //     console.log("Timeout completed")
  //     setCount(0)
  //   }, 5000)

  //   return () => {
  //     console.log("Timer destroyed")
  //     clearTimeout(id)
  //   }
  // }, [count])

  return (
    <>
      <h1 className='title'>Counter</h1>
      <div className='counter'>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h2>{ count }</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </>
  );
}

export default CounterLayout;
