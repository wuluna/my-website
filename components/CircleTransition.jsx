"use client";
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

// components
import Circle from "./Circle";

const CircleTransition = () => {
    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex items-center justify-center">
                        <Circle />
                    </div>
                </div>
            </AnimatePresence>
        </>
    )
}

export default CircleTransition