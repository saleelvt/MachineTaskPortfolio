import React from 'react'
import { SKILLS } from '../constants'

const Skills: React.FC = React.memo(() => {
    return (
        <div>
            <h3 className="text-xl text-gray-500 font-bold pb-2">
                My Skills
            </h3>
            <div className="flex flex-wrap">
                {
                    SKILLS.map((skill: string) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                    ))
                }
            </div>
        </div>
    )
})

export default Skills