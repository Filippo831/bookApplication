import UserMain from "./components/user/userMain";
import Stats from "./components/user/userStats";

export default function User() {
  return (
    <div className="m-6">
      <div className="mb-2">
        <UserMain fontSize="large"></UserMain>
      </div>
      {/* --- STATS --- */}
      <div>
        <Stats></Stats>
      </div>
    </div>
  )
}
