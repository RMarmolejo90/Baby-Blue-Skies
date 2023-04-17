import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className='flex flex-col items-center justify-center bg-dark-shade min-h-screen' id="error-page">
        <h1 className='p-8 text-2xl text-primary-light'>Oops!</h1>
        <p className='p-8 text-primary-light'>Sorry, an unexpected error has occurred.</p>
        <p className='p-8 text-primary-light'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }