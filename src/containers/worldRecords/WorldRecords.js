import React from 'react';

//import components
import Map from './Map.js';
import MapDataContainer from './MapDataContainer';

export default function WorldRecords() {
  return (
    <div class="border-solid border-2 border-sky-500 ... p-10 bg-gray-100">
      <h1 class="text-center text-xl mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Country status by Covid Variants</h1>
      <h2 class="text-center text-l">
        Date as of :&nbsp;
          {new Date().toLocaleString("en-US", { day : '2-digit'})} - 
          {new Date().toLocaleString("en-US", { month: "long" })} - 
          {new Date().getFullYear()}
      </h2>
      <div class="grid grid-cols-3 gap-3">
        <div class="col-span-2"><Map/></div>
        <div><MapDataContainer/></div>
      </div>
    </div>
  )
}
