'use client'
import React from "react";
import Image from "next/image";
import { toggleOpen } from "../redux/slice/ValueSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";



export default function Navbar() {
    const dispatch = useDispatch<AppDispatch>()
    const isOpen = useSelector((state: RootState) => state.value.isOpen)

    const handleToggle = () => {
        dispatch(toggleOpen(!isOpen));
    }

    return (
        <>
            <div className="mobile mt-3 md:hidden px-4">
                <div className="flex justify-around items-center">
                    <button onClick={handleToggle}>
                        <img src="/image/toggle.svg" alt="toggle" />
                    </button>
                    <h1 className="text-xl font-bold">Overview</h1>
                    <img src="/image/Mask.svg" alt="Mask" className="w-9 h-9" />
                </div>

                <div className="mt-5 flex justify-center">
                    <div className="relative w-full max-w-[700px]">
                        <img
                            src="/image/Group.svg"
                            alt="Search"
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        />
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-2.5 text-sm border border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search for something"
                        />
                    </div>
                </div>
            </div>

            <div className="web hidden md:flex justify-between items-center px-8 py-4 bg-white">

                <div className="flex items-center space-x-8 lg:space-x-32">
                    <img src="/image/Logo.svg" alt="Logo" className="w-20 h-20" />
                    <h1 className="text-lg lg:text-2xl font-bold">Overview</h1>
                </div>

                <div className="flex flex-1  justify-end items-center space-x-6 lg:space-x-12">

                    <div className="relative max-w-[400px] lg:max-w-[700px] xl:max-w-[900px]">
                        <img
                            src="/image/Group.svg"
                            alt="Group"
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        />
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-2.5 text-sm bg-gray-100 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search for something"
                        />
                    </div>


                    <div className="flex items-center space-x-4">
                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                            <img src="/image/setting.svg" alt="settings" className="w-6 h-6" />
                        </button>
                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                            <img src="/image/search.svg" alt="search" className="w-6 h-6" />
                        </button>
                        <button>
                            <img src="/image/Mask.svg" alt="Mask" className="w-10 h-10" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}   