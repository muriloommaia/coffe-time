import React from 'react';
import ChangeTime from '../Components/ChangeTime';
// import ButtonStart from '../Components/ButtonStart';
import GridComponent from '../Components/GridComponent';
import ProgressBar from '../Components/ProgressBar';
import TitleComponent from '../Components/TitleComponent';

export default function Home() {
  return (
    <div className="flex flex-col items-center josefin-font text bg-blue2 h-full min-h-screen text-white1 bg-bg-texture">
      <nav>
        <TitleComponent />
      </nav>
      <main className="w-full flex flex-col items-center">
        <GridComponent />
        <div className="pt-6">
          <ChangeTime />
        </div>
        <div className="py-6 w-10/12">
          <ProgressBar />
        </div>
      </main>
    </div>
  );
}
