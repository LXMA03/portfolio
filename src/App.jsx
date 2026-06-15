import { Home } from './pages/Home'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Toaster } from './components/ui/toaster'


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />   {/** Any route that hasn't been defined, default to this page */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

