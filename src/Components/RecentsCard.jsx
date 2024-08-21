import React from 'react';
import fitZoneApp from '../assets/toy store.svg'

const RecentsCard = () => {
  return (
    <>
        <div className='bg-secondary rounded-[6.25rem]'>
            <div className='grid grid-cols-2'>
                <img src={fitZoneApp} alt='FitZone app' />
                <div>
                    <p>Mobile App</p>
                    <p>Toy Store</p>
                    <p className='text-secondary'>FitZone</p>
                    <p className='text-secondary'>Features- </p><span>Product Catalog, Interactive features for kids</span>
                    <p className='text-secondary'>Outcome- 4.5- </p><span>star rating on the app store, 50,000 downloads in the first month</span>

                </div>
            </div>
        </div>
    </>
  )
}

export default RecentsCard