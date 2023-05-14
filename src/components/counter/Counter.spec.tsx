import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { actionTypes } from '../../features/counter'
import Counter from './Counter'

describe('Counter', () => {
  const mockStore = configureStore([])
  const store = mockStore({
    count: {
      value: 42,
    },
  })

  // Add jest mock spy to watch for store.dispatch method. See https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname for more info
  jest.spyOn(store, 'dispatch')

  test('renders without crashing.', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    const countValue = screen.getByText('42')
    expect(countValue).toBeInTheDocument()
  })

  test('should be possible to increment counter.', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    const incrementButton = screen.getByRole('button', { name: 'increment' })
    fireEvent.click(incrementButton)

    expect(store.dispatch).toHaveBeenCalledTimes(1)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionTypes.INCREMENT_COUNTER,
    })
  })

  test('should be possible to decrement counter.', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )

    const decrementButton = screen.getByRole('button', { name: 'decrement' })
    fireEvent.click(decrementButton)

    expect(store.dispatch).toHaveBeenCalledTimes(1)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionTypes.DECREMENT_COUNTER,
    })
  })
})
