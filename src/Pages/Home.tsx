import React from 'react';
import GridComponent from '../Components/GridComponent';
import TitleComponent from '../Components/TitleComponent';

export default function Home() {
  return (
    <div className="flex flex-col items-center josefin-font">
      <nav>
        <TitleComponent />
      </nav>
      <main className="w-full flex justify-center">
        <GridComponent />
      </main>
    </div>
  );
}
