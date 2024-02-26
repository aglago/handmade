import {Routes, Route } from "react-router-dom"
import ShopPage from "./components/0ShopPage/0Shop/ShopPage"
import SearchPage from "./components/1SearchPage/1Search/SearchPage"

export default function App() {
  
  return (
    <Routes>
      <Route>
        <Route index element={<ShopPage />} />
        <Route path="search" element={<SearchPage/>}/>
      </Route>
    </Routes>
  )
}