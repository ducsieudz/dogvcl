import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SwipePage from "./pages/SwipePage";
import FilterPage from "./pages/FilterPage";
import MatchesPage from "./pages/MatchesPage";
import RoomDetailPage from "./pages/RoomDetailPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SwipePage />} />
          <Route path="filters" element={<FilterPage />} />
          <Route path="matches" element={<MatchesPage />} />
          <Route path="room/:id" element={<RoomDetailPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
