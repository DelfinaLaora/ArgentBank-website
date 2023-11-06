// ! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
const iconChat = (
   <svg xmlns="http://www.w3.org/2000/svg" height="5.5em" viewBox="0 0 576 512">
      <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z" />
   </svg>
)
const iconMoney = (
   <svg xmlns="http://www.w3.org/2000/svg" height="5.5em" viewBox="0 0 640 512">
      <path d="M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z" />
   </svg>
)
const iconSecurity = (
   <svg xmlns="http://www.w3.org/2000/svg" height="5.5em" viewBox="0 0 640 512">
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z" />
   </svg>
)

function Home() {
   return (
      <>
         <main>
            <div className="contener-home">
               <div className="hero">
                  <section className="hero-content">
                     <h2 className="sr-only">Promoted Content</h2>
                     <p className="subtitle">No fees.</p>
                     <p className="subtitle">No minimum deposit.</p>
                     <p className="subtitle">High interest rates.</p>
                     <p className="text">
                        Open a savings account with Argent Bank today!
                     </p>
                  </section>
               </div>
               <section className="features">
                  <h2 className="sr-only">Features</h2>
                  <div className="feature-item">
                     <p alt="Chat Icon" className="feature-icon">
                        {iconChat}
                     </p>

                     <h3 className="feature-item-title">
                        You are our #1 priority
                     </h3>
                     <p>
                        Need to talk to a representative? You can get in touch
                        through our 24/7 chat or through a phone call in less
                        than 5 minutes.
                     </p>
                  </div>
                  <div className="feature-item">
                     <p alt="Chat Icon" className="feature-icon">
                        {iconMoney}
                     </p>
                     <h3 className="feature-item-title">
                        More savings means higher rates
                     </h3>
                     <p>
                        The more you save with us, the higher your interest rate
                        will be!
                     </p>
                  </div>
                  <div className="feature-item">
                     <p alt="Chat Icon" className="feature-icon">
                        {iconSecurity}
                     </p>

                     <h3 className="feature-item-title">
                        Security you can trust
                     </h3>
                     <p>
                        We use top of the line encryption to make sure your data
                        and money is always safe.
                     </p>
                  </div>
               </section>
            </div>
         </main>
      </>
   )
}

export default Home
