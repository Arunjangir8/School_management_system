// components/LogoutButton.jsx
'use client';

import { useClerk } from '@clerk/nextjs';

export default function LogoutButton() {
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut({ redirectUrl: '/' }); // Redirects to homepage after logout
  };

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
      Logout
    </button>
  );
}
