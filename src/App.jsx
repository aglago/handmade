import {Routes, Route } from "react-router-dom"
import ShopPage from "./components/0ShopPage/0Shop/ShopPage"
import SearchPage from "./components/1SearchPage/1Search/SearchPage"
import ProfilePage from "./components/5ProfilePage/0Profile/ProfilePage"

export default function App() {
  
  return (
    // <ProfilePage />
    <Routes>
      <Route>
        <Route path="/" element={<ShopPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}
