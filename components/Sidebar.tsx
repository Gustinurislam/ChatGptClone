import NewChat from "./NewChat";

const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* Newchat */}
          <NewChat/>

          <div>
            {/* ModelSelection  */}

            </div>

          {/* Map throught the Chatrows  */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
