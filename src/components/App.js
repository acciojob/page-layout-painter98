
import React from "react";
import './../styles/App.css';
import PageLayout from './pageLayout';
import { BiCopyright } from "react-icons/bi";

const App = () => {
  console.log(<BiCopyright/>)
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout header={'Welcome to my website'} footer={`© 2023 My Website. All rights reserved.`}>
          This is the content of my website.
        </PageLayout>
    </div>
  )
}

export default App
