import { createStore } from 'redux'

export const actionTypes = {}

const initialState = {
    products: [
        {
            name: 'Hat',
            price: 20,
            description: 'Razor blades not included',
            image: 'https://snipcart.com/media/203631/hat.jpeg',
            id: 1
        }
    ]
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState)
}