"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { toggleOpen } from "../redux/slice/ValueSlice";

export default function SideBar(){
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    const isOpen = useSelector((state: RootState) => state.value.isOpen)

   const handleClick = () => {
    router.push("/");
    // console.log("Navigating to Home");
  };
    return (
        <>
            <div>
               <ul>
                <li onClick={handleClick}>Home</li>
                <li>Profile</li>    
                <li>Settings</li>
                <li>Home</li>
                <li>Profile</li>    
                <li>Settings</li>
                <li>Home</li>
                <li>Profile</li>    
                <li>Settings</li> 
               </ul>

                <ul>
                <li onClick={handleClick}>Home</li>
                <li>Profile</li>    
                <li>Settings</li>
                <li>Home</li>
                <li>Profile</li>    
                <li>Settings</li>
                <li>Home</li>
                <li>Profile</li>    
                <li>Settings</li> 
               </ul>
            </div>
        </>
    )
}