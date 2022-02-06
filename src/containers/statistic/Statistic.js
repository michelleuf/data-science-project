import React from 'react';

// import components
import Table from '../../components/Table';
import Filter from '../../components/Filter';

export default function Statistic() {
  return(
    <div class="border-solid border-2 border-sky-500 ... p-10 bg-gray-100">
    <h1 class="text-center text-xl">Statistics by Country</h1>
    <div class="items-center">
        <Filter/>
    </div>
    <div>
      <Table />
    </div>
  </div>
  )
}
