'use client';

import { useSession, signOut } from 'next-auth/react';
import NewChat from './NewChat';

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* Newchat */}
          <NewChat />

          <div>{/* ModelSelection  */}</div>

          {/* Map throught the Chatrows  */}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Sidebar;
