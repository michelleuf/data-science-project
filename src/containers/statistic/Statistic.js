import React from 'react';

// import components
import Table from './Table';
import Filter from './Filter';

export default function Statistic() {
  return(
    <div class="border-solid border-2 border-sky-500 ... p-10 bg-gray-100">
    <h1 class="text-center text-xl mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Statistics by Country</h1>
    <div class="items-center">
        <Filter/>
    </div>
    <div>
      <Table />
    </div>
  </div>
  )
}
