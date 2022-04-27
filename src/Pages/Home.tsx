import React from 'react';
// import ButtonStart from '../Components/ButtonStart';
import GridComponent from '../Components/GridComponent';
import ProgressBar from '../Components/ProgressBar';
import TitleComponent from '../Components/TitleComponent';

export default function Home() {
  return (
    <div className="flex flex-col items-center josefin-font">
      <nav>
        <TitleComponent />
      </nav>
      <main className="w-full flex flex-col items-center">
        <GridComponent />
        <div className="py-6 w-10/12">
          {/* <ButtonStart /> */}
          <ProgressBar />
        </div>
      </main>
    </div>
  );
}
