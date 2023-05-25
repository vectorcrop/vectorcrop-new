'use client';
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col  justify-between">


<header className="bg-black">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-5 p-1.5">
      {/* <div className="card1">
  <div className="card2">
    <br/>
  <img className="h-8 w-auto item-center ml-5" src="logo.png" alt=""/>

  </div>
</div> */}
 <div className="flex items-center">
                <img src="logo.png" alt="Logo" className="w-auto h-8 item-center"/>
                <h1 className="ml-2 text-xl font-bold-sm text-white">VectorCrop.</h1>
            </div>
  {/* <img className="h-8 w-auto item-center " src="logo.png" alt=""/> */}

      </a>
    </div>
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="https://www.linkedin.com/in/vector-crop-2872a123a/" target="_blank" className="text-sm font-semibold leading-6 text-white">Linked in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
</header>



<motion.div
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 2.5 }}>
   
  
        <div className="flex items-center justify-center ">
          {/* <div className="card">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
  <p className="text-center text-white">Vectorcrop is coming with full power!</p>

  </div>
</div> */}


<div className="code-editor items-center">
      <div className="header2">
      
        {/* <div className="title2 ml-1">VectorCrop</div> */}
        <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
      </div>
      <div className="editor-content">
        <code className="code">
          <p><span className="color-0">.vectorcrop </span> <span>{'{'}</span></p>

          <p className="property">
            <span className="color-2">max-width</span><span>:</span>
            <span className="color-1">300px</span>;
          </p>
          <p className="property">
            <span className="color-2">background-color</span><span>:</span>
            <span className="color-preview-1"></span><span className="">#1d1e22</span>;
          </p>
          <p className="property">
            <span className="color-2"> box-shadow</span><span>:</span>
            <span className="color-1">0px 4px 30px  <span className="color-preview-2"></span><span className="color-3">rgba(</span>0, 0, 0, 0.5<span className="color-3">)</span></span>;
          </p>
          <p className="property">
            <span className="color-2">content</span><span>:</span>
            "<span className="color-4">Coming Soon!</span>";
          </p>
          <span>{'}'}</span>
        </code>
      </div>
    </div>
        
        
        </div>
       

        </motion.div>

       
    </main>
  )
}
