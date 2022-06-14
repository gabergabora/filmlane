import React from "react";
import { Footer, Header } from "../components";

function Layout({ children, userItems, setUserItems }) {
  return (
    <div>
      <Header userItems={userItems} setUserItems={setUserItems} />
      <div className="min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
