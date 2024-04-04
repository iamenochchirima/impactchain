import React from 'react'


const Analytics = () => {
  return (
    <div>
    <div className= " h-[50px] text-start ml-5 text-white text-[40px] font-NeueMachinaUltrabold">Monitor your impact</div>
    <div>

      
      <div className="w-[249px] h-[352px] relative">

      {/*Environmental Impact Report Button*/}
      <div className="w-[249px] h-[352px] left-0 top-10 ml-5 absolute bg-neutral-800 rounded-[56px]" />
        <div className="w-[120px] h-[120px] left-[75px] top-[80px] absolute justify-center items-center inline-flex">
           <img className="w-[120px] h-[120px]" src="./earth.svg" />
        </div>
      <div className="w-[175px] h-12 left-[55px] top-[234px] absolute text-center text-white text-2xl font-normal font-TelegraphBold">Environmental Impact Report</div>
      

      {/*Social Impact Report Button*/}
      
      <div className="w-[249px] h-[352px] left-[450px] top-10 ml-5 absolute bg-neutral-800 rounded-[56px]" />
        <div className="w-[120px] h-[120px] left-[525px] top-[80px] absolute justify-center items-center inline-flex">
          <img className="w-[120px] h-[120px]" src="./couple.svg" />
        </div>
        <div className="w-[175px] h-12 left-[505px] top-[234px] absolute text-center text-white text-2xl font-normal font-TelegraphBold">Social Impact Report</div>
      

       {/*Governance Impact Report Button*/} 
      <div className="w-[249px] h-[352px] left-[900px] top-10 ml-5 absolute bg-neutral-800 rounded-[56px]" />
        <div className="w-[120px] h-[120px] left-[980px] top-[80px] absolute justify-center items-center inline-flex">
          <img className="w-[120px] h-[120px]" src="./scale.svg" />
        </div>
      <div className="w-[175px] h-12 left-[955px] top-[234px] absolute text-center text-white text-2xl font-normal font-TelegraphBold">Governance Impact Report</div>
    


        
      </div>

      



      

</div>
</div>
  )
}

export default Analytics