import React from 'react'

// import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'

import { fetchUsers } from '../../features/user/userSlice'

const UserController = () => {

  const dispatch = useAppDispatch();

  return (
    <div className="component">
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
    </div>
  )
}

export default UserController