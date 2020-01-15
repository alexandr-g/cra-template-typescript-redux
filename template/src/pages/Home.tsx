import React, { Fragment } from 'react'
import Counter from '../components/counter/Counter'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Redux + TypeScript</h1>
      <p>
        An opinionated Create React App template with React Router, TypeScript
        and Redux
      </p>
      <Counter />
    </Fragment>
  )
}
