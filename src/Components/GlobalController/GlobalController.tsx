import React from 'react'

// import { useDispatch } from 'react-redux/es/exports'
import { useAppDispatch } from '../../app/hooks';
import { globalActions } from '../../features/global/global';

const GlobalController = () => {

  const dispatch = useAppDispatch();
  const reset = globalActions.reset;

  return (
    <div className="component">
      <p>Global controller</p>
      <button onClick={() => dispatch(reset())} >Wide Reset</button>
    </div>
  )
}

export default GlobalController