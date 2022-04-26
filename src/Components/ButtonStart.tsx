// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import { MomentType } from '../types/BoxType';
// // import { useDispatch } from 'react-redux';

// export default function ButtonStart() {
//   const [activeTime, setActiveTime] = useState(false);
//   const [moment, setMoment] = useState<MomentType | ''>('');
//   const [leftTimeCur, setLeftTimeCur] = useState(0);
//   // const dispatch = useDispatch();
//   const controlTime = () => {
//     // 1000 representa 1000 milisegundos, que é 1s
//     if (moment === '' || moment === 'lectura') {
//       setMoment('lectura');
//       setLeftTimeCur(useSelector((state: RootState) => state.lectura.timeLeft));
//     }
//     const second = 1000;
//     let date = new Date().getTime();
//     let nextDate = new Date().getTime() + second;
//     if (!activeTime) {
//       const interval = setInterval(() => {
//         date = new Date().getTime();
//         if (date > nextDate) {
//           nextDate += second;
//         }
//       }, 100);
//       localStorage.clear();
//       localStorage.setItem('interval-id', `${interval}`);
//     }
//     if (activeTime) {
//       const interval = Number(localStorage.getItem('interval-id'));
//       clearInterval(interval);
//     }
//     setActiveTime(!activeTime);
//   };

//   return (
//     <button
//       type="button"
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//       onClick={controlTime}
//     >
//       Button
//     </button>
//   );
// }
