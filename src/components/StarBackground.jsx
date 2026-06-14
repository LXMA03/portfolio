import { useEffect, useState } from "react"

// Attributes of the stars: id, size, x, y, opacity, animation duration
// x, y -> positions

// Attributes of meteors: id, size, x, y, delay, animation duration

export const StarBackground = () => {
    const [stars, setStars] = useState([]) // [] -> list of attributes
    const [meteors, setMeteors] = useState([])
    
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            // Regenerate stars so screen does not look cluttered
            generateStars()
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []) // Empty dependency array [], otherwise will run forever

    const generateStars = () => {
        // Generate base on size of windows
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,  // Generate stars between size 1-4 pixels
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, // Duration of 2-6 secs
            })
        }

        setStars(newStars);
    }

    const generateMeteors = () => {
        // Generate base on size of windows
        const numberOfMeteors = 4
        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,  // Generate meteors between size 1-3 pixels
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3, 
            })
        }

        setMeteors(newMeteors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-non z-0"> 
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s" ,

                    // s - seconds, px - pixels
                }}/>
            ))}

            {meteors.map((meteors) => (
                <div
                    key={meteors.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteors.size * 50 + "px",
                        height: meteors.size * 2 + "px",
                        left: meteors.x + "%",
                        top: meteors.y + "%",
                        animationDelay: meteors.delay,
                        animationDuration: meteors.animationDuration + "s" ,

                    }}/>
            ))}
        </div>

    
    )
}