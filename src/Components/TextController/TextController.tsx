import React from 'react'
// import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

import { textActions } from '../../features/text/textSlice'

const TextController = () => {
  
  const text = useAppSelector(state => state.text.text)
  
  const dispatch = useAppDispatch();
  const writeText = textActions.writeText;
  const resetText = textActions.resetText;

  return (
    <div className="component">
      <p>Text controller</p>
      <input
        type     = "text"
        value    = {text}
        onChange = {(event) => dispatch(writeText(event.target.value))}
      />
      <button onClick={() => dispatch(resetText())} >Reset Text</button>
    </div>
  )
}

export default TextController