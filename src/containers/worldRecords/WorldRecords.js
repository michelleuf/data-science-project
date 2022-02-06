import React from 'react';

//import components
import Map from './Map.js';
import MapDataContainer from './MapDataContainer';

export default function WorldRecords() {
  return (
    <div class="border-solid border-2 border-sky-500 ... p-10 bg-gray-100">
      <h1 class="text-center text-xl">Country status by Covid Variants</h1>
      <h2 class="text-center text-l">
        Date as of :&nbsp;
          {new Date().toLocaleString("en-US", { day : '2-digit'})} - 
          {new Date().toLocaleString("en-US", { month: "long" })} - 
          {new Date().getFullYear()}
      </h2>
      <div class="flex flex-wrap justify-center p-10 space-x-4 ...">
        menna methana map eka
        <div><Map/></div>
        <div><MapDataContainer/></div>
      </div>
    </div>
  )
}
