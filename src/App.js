import './App.css'
import logo from './Images/logo.png'
import img1 from './Images/img1.jpeg'
import img2 from './Images/img2.jpeg'
import img3 from './Images/img3.jpeg'
import img4 from './Images/img4.jpeg'
import img5 from './Images/img5.jpeg'
import img6 from './Images/img6.jpeg'
import img7 from './Images/img7.jpeg'
function App() {
  return (
    <div className="App textColor">
      <div className="bg-color p-4 heading text-center" >
        <p>SAFETY SOLUTION ACADEMY</p>
      </div>
      <div className=' mb-20  mainDiv border-red-700  relative w-full '>
         <div className="logoDiv  ">
         <div className="logo   rounded-xl mb-8">
               <img src={logo} alt="" className=' h-96 ' />
         </div>
         </div>
         <div className='bg-color w-full absolute bottom-0 text-center p-4'>
          <p className='w-full text-4xl '> We are comming soon</p>
         </div>
         
      </div>

      <p className='text-center text-4xl mb-6 font-bold'>GALLERY</p>
      <div className=" flex flex-wrap justify-evenly">
         <div className=" h-80 m-2 imgDiv rounded-md w-60  overflow-hidden"><img className='h-full w-full' src={img1} alt="" /></div>
         <div className=" h-80 m-2 imgDiv rounded-md w-60  overflow-hidden"><img className='h-full w-full' src={img2} alt="" /></div>
         <div className=" h-80 m-2 imgDiv rounded-md w-60  overflow-hidden"><img className='h-full w-full' src={img3} alt="" /></div>
         <div className=" h-80 m-2 imgDiv rounded-md w-60  overflow-hidden"><img className='h-full w-full' src={img4} alt="" /></div>
         <div className=" h-80 m-2 imgDiv rounded-md w-60  overflow-hidden"><img className='h-full w-full' src={img5} alt="" /></div>
         <div className=" h-80 m-2 imgDiv rounded-md w-60  overflow-hidden"><img className='h-full w-full' src={img6} alt="" /></div>
         
         

      </div>

      <footer className=' footerr bg-color border-2 pb-4 mt-10 flex justify-evenly'>
           <div className=' p-2 '>
               <p className='text-center text-2xl p-2'><strong>Contact Us</strong></p>
               <div>
                  <strong>Mobile No. - </strong> <span>+91 7284004181</span>
               </div>
               <div>
                 <strong>E-mail - </strong> <span>itstakenbysafetysolutions@gmail.com</span>
               </div>
           </div>
           <div className=' p-2'>
              <div  className='text-center text-2xl p-2'><strong >Address</strong></div>
              <p>Ward- 34 , Near Pandit Ugam Pandey College, Balua, Motihar, Bihar, 845401</p>
           </div>
      </footer>
    </div>
  );
}

export default App;
