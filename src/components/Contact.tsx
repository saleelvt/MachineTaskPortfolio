import React from 'react'
import { WELCOME_TO_CONNECT_MESSAGE } from '../constants'
import MyForm from './MyForm'

const Contact: React.FC = React.memo(() => {
    return (
        <section id="contact">
            <div className="px-10 mt-10 min-h-screen py-10">
                <h3 className="div-h1">CONTACT</h3>
                <p className="text-center text-gray-500">
                    {WELCOME_TO_CONNECT_MESSAGE}
                </p>
                <MyForm />
            </div>
        </section>
    )
})

export default Contact