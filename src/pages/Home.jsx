import React from "react";

function Home() {
  return (
    <div>
      <div class="m-5">
        <h2 class="mb-4 text-2xl text-green-700 font-bold">Buttons</h2>
        <button
          data-act-class="shadow-outline"
          data-set-theme=""
          class="bg-green-700 focus:outline-none m-1 rounded p-2"
        >
          Default
        </button>
        <button
          data-act-class="shadow-outline"
          data-set-theme="dark"
          class="bg-green-700 focus:outline-none m-1 rounded p-2"
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default Home;
