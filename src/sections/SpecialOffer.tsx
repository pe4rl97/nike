import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer:React.FC = () => {
    return (
        <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1'>
                <img src={offer} height={687} width={773} className='object-contain w-full'/>
            </div>
            <div className='flex flex-1 flex-col'>

                <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
                    <span className='text-coral-red'>Special </span>Offer
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Embark on a shopping journey that redefines your experience with unbeatable deals. From premiew selections to incredible savings, we pffer unparalleled value that sets us apart.
                </p>
                <p className='mt-6 lg:max-w-lg info-text'>
                    Navigate s realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
                </p>

                <div className='mt-11 flex flex-wrap gap-4'>
                    <Button label='Shop now' iconUrl={arrowRight}/>
                    <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray'
                    textColor='text-slate-gray'/>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer