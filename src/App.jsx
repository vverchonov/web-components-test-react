import { Routes, Route } from 'react-router-dom'
import AppLayout from './AppLayout'
import HomePage from './pages/HomePage'
import StylesPage from './pages/StylesPage'
import ButtonPage from './pages/components/ButtonPage'
import InputPage from './pages/components/InputPage'
import TogglePage from './pages/components/TogglePage'
import TablePage from './pages/components/TablePage'
import MenuPage from './pages/components/MenuPage'
import ModalPage from './pages/components/ModalPage'
import TabsPage from './pages/components/TabsPage'
import SelectorPage from './pages/components/SelectorPage'
// import DropdownButtonPage from './pages/components/DropdownButtonPage'
import LayoutPage from './pages/components/LayoutPage'
import FormLayoutPage from './pages/components/FormLayoutPage'
import CardPage from './pages/components/CardPage'
import RadioGroupPage from './pages/components/RadioGroupPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="styles" element={<StylesPage />} />
        <Route path="components/button" element={<ButtonPage />} />
        <Route path="components/input" element={<InputPage />} />
        <Route path="components/toggle" element={<TogglePage />} />
        <Route path="components/table" element={<TablePage />} />
        <Route path="components/menu" element={<MenuPage />} />
        <Route path="components/modal" element={<ModalPage />} />
        <Route path="components/tabs" element={<TabsPage />} />
        <Route path="components/selector" element={<SelectorPage />} />
        {/* <Route path="components/dropdown-button" element={<DropdownButtonPage />} /> */}
        <Route path="components/card" element={<CardPage />} />
        <Route path="layouts/layout" element={<LayoutPage />} />
        <Route path="layouts/form-layout" element={<FormLayoutPage />} />
        <Route path="components/radio-group" element={<RadioGroupPage />} />
      </Route>
    </Routes>
  )
}

export default App
