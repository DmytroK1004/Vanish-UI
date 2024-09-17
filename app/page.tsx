"use client"
import { useState } from "react"

const App = () => {

  const [buyAmount, setBuyAmount] = useState("0.0")

  return (
    <div className="flex justify-center items-center bg-white w-screen h-screen">
      <div className="w-[400px] bg-gray-800">
        <div className="px-4 py-5 space-y-2">
          <p className="font-medium">Depost Address:</p>
          <p className="text-xs">BkHi29JYCrqCEpyg8eceJCDsgNBSRrxKtKLQNqZ7yP2f</p>
        </div>
        <div className="flex gap-0.5 px-0.5">
          <input className="rounded-[6px] bg-gray-700 text-sm px-4 py-2 w-full focus:outline-none" placeholder="Search by Token, Address or Symbol" />
          <button className="bg-red-800 rounded-[6px] px-4">Search</button>
        </div>
        <div className="px-10 pt-8 pb-24">
          <div className="rounded-[6px] px-6 py-4 bg-gray-700">
            <p className="text-red-700 text-2xl font-semibold">BOME</p>
            <p className="text-xs">ukHH6.....Z74J82</p>
          </div>
          <div className="mt-8 rounded-[8px] flex overflow-hidden">
            <div className="w-full bg-green-500 flex justify-center py-2">
              <p className="text-xl font-medium">Buy</p>
            </div>
            <div className="w-full bg-green-500 flex justify-center py-2 bg-gray-600">
              <p className="text-xl font-medium">Sell</p>
            </div>
          </div>
          <div className="mt-2 space-y-1 px-1">
            <div className="px-1 flex justify-between items-center">
              <p className="text-xs mt-1">Buy Amount</p>
              <p className="text-[9px] font-medium text-gray-500">Max 1.25</p>
            </div>
            <div className="relative">
              <input className="w-full bg-gray-600 rounded-[6px] px-2 py-1.5 text-sm" value={buyAmount} onChange={e => setBuyAmount(e.target.value)} />
              <p className="text-sm absolute top-1.5 right-2 font-medium">ETH</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="focus:outline-none px-5 py-1 bg-green-500 rounded-[6px]">Vanish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App