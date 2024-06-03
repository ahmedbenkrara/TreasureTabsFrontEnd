import React, { Suspense } from 'react'
import Routes from './router'

function App() {
  return (
    <Suspense fallback={ <h1>loading ...</h1> }>
      <Routes />
    </Suspense>
  )
}

export default App
