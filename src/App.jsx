import {Routes, Route } from "react-router-dom"
import ShopPage from "./pages/shopPage/ShopPage"
import SearchPage from "./pages/searchPage/SearchPage"
import ProfilePage from "./pages/profilePage/ProfilePage"

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
