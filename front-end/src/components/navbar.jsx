import React from 'react'
import EmailForm from './emailList'
export default function Navbar() {
  return (
    <div className='p-6 bg-slate-700 text-blue-200 flex flex-auto flex-wrap flex-shrink justify-between'>
        {/* // react-router links
        // logo */}
        <EmailForm />
        <h2 className='m-2'>Baby Blue Skies Travel</h2>

    </div>
  )
}
