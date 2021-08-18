import React from 'react';

const Home = () => {
   return (
      <div className="container  w-75 text-center mt-5">
         <h4 className="text-black-50 mb-3">
            Components let you split the UI into independent, reusable pieces,
            and think about each piece in isolation. This page provides an
            introduction to the idea of components.
         </h4>
         <h4 className="text-black-50">
            Conceptually, components are like JavaScript functions. They accept
            arbitrary inputs (called “props”) and return React elements
            describing what should appear on the screen.
         </h4>
      </div>
   );
};

export default Home;
