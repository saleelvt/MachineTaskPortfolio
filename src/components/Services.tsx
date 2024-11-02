import React from 'react'

import { SERVICES } from '../constants';

const Services: React.FC = React.memo(() => {
    return (
        <section className="px-10 lg:px-32" id='services'>
            <div>
                <h3 className="text-2xl py-1 text-center font-semibold">
                    SERVICES I OFFER
                </h3>
                <p className="text-md leading-8 text-gray-600 max-w-5xl mx-auto text-center">
                Custom Software Development • Mobile Application Development • Web Development • Blogging • Content Strategy • Editing • Translation
                </p>
            </div>
            <div className="lg:flex lg:gap-20">
                {
                    SERVICES.map((service) => (
                        <div key={service.name} className="flex flex-col items-center text-center p-10 my-10 shadow-xl rounded-xl dark:bg-gray-800 flex-grow flex-1">
                            <img src={service?.image} alt="service-logo" className='rounded-sm' width={80} height={80} />
                            <h3 className="text-lg font-bold pt-8 pb-2">{service.name}</h3>
                            <p className="py-2">
                                {service.description}
                            </p>
                            <h4 className="text-teal-600 pb-3"> {service.category} </h4>
                            <p className="text-gray-800 dark:text-gray-500">{service.by}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
})

export default Services