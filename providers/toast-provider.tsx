"use client"

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    if (!isMounted) {
      return null;
    }

    return (
      <>
        <Toaster />
      </>
    );
    
}