import { motion } from "framer-motion"

const Circle = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <motion.svg
                className="w-32 h-32"
                viewBox="0 0 100 100"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    delay: 1, // Wait for the circle to finish filling before starting the fade-out
                    duration: 0.5, // Duration of the fade-out
                }}
            >
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    className="stroke-accent" //stroke="#ffffff" 
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="283"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    animate={{
                        strokeDashoffset: [283, 0], // Fill animation
                    }}
                    transition={{
                        duration: 1, // Duration of the fill
                        ease: "easeInOut",
                    }}
                />
            </motion.svg>
        </div>
    );
};

/*
const Circle = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <svg className="w-32 h-32" viewBox="0 0 100 100">
                <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#ffffff" // className="stroke-accent"
                    strokeWidth="8"
                    strokeDasharray="283" // Circumference of the circle
                    strokeDashoffset="283" // Start fully empty
                    strokeLinecap="round" // Makes the stroke edges rounded
                    transform="rotate(-90 50 50)" // Rotates the circle to start filling from the top
                    animate={{
                        strokeDashoffset: [283, 0], // Animate from empty to full
                    }}
                    transition={{
                        duration: 1, // Animation duration in seconds
                        ease: "easeInOut", // Smooth easing
                        //repeat: Infinity, // Repeat the animation infinitely
                        //repeatType: "loop", // Smooth looping
                    }}
                />
            </svg>
        </div>
    );
};
*/

/*
// variants
const circleAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

const Circle = () => {
    return (
        <>
            
        </>
    )
}
*/

export default Circle