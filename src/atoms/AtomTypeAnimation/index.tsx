import React from 'react'
import { TypeAnimation } from "react-type-animation";

const AtomsTypeAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                "Social Media Manager",
                2000,
                "Designer",
                2000,
                "Content Creator",
                2000,
            ]}
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
        />
    )
}

export default AtomsTypeAnimation