import { useReducer } from 'react'

export const initialState = {}

export function reducer (prevState, action) {
  const { payload } = action

  switch (action.type) {
    case 'INITIALIZED':
      return {
        ...prevState
      }
    default:
      throw new Error(`Unrecognized Action: ${action.type}`)
  }
}

function useState (defaultState = initialState) {
  return useReducer(defaultState)
}

export default useState
