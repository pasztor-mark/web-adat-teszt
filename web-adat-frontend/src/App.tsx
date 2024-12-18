
import './index.css'
import ThemeProvider from './components/ThemeProvider'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import DatabaseCharts from './pages/DatabaseCharts'
import Manual from './pages/Manual'
import WebTests from './pages/WebTests'

function App() {
  

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>

      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='charts' element={<DatabaseCharts/>}/>
            <Route path='manual' element={<Manual/>}/>
            <Route path='web' element={<WebTests/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
      
    </ThemeProvider>
  )
}

export default App
