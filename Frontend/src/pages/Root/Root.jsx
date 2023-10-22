import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './../../index.css'
function Root() {
   // "Root" la page parent "outlet" Les pages enfants
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}

export default Root
