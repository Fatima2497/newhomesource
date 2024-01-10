import React from 'react'
import Meta from '../components/Meta'
import Form from '../components/Form'
import qtower from '../assets/image/towerImage4.jpg'

const SingleProject = () => {
  return (
    <>
    <Meta title="SingleProject" />
    <main className="w-full">
    <section className="w-full bg-goldColor">
    {/* <div className="grid grid-cols-2 w-full h-80">
          <div className='w-full'>
          <img src={qtower} alt="qtower" width='100%' className='h-80'/>
          </div>
          <div className="grid grid-rows-2  bg-teal-500">
            <div className="bg-red-500 h-30">
             
            </div>
            <div className="bg-yellow-500 h-30">
             
            </div>
           
          </div>
    </div> */}
    <div className="containerxs bg-blackColor sm:containerSmall sm:bg-whiteColor md:contentcontainer lg:container lgl:containerLarge lgl:bg-teal-400 px-4">
      <div className="grid grid-cols-1 sm:grid-rows-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10">
        <div className="md:col-span-2 lg:col-span-4">
          <h3 className='heading'>Stationside Condos</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className='content'>By: <span className='span'>Neatt Communities</span></p>
              <p className='content'>135 Nipissing Rd, Milton, Canada</p>
            </div>
            <div>
              <p className='content'>Vip Sales</p>
              <p className='content'>Starting From</p>
              <p className='content'>$484,490 - $799,990</p>
            </div>
          </div>
          <div>
          <h3 className='heading'>About Stationside Condos</h3>
          <p className='content'>Stationside Condos is a New Condo development by Neatt Communities located at Main St E & Ontario St N, Milton.</p>
          <p className='content'>Experience the gateway to your next exciting chapter at Stationside. This dual-tower edifice is located in the heart of downtown Milton, embodying the vibrant future of this urban center. With the upcoming Milton GO Station just a short distance away, reaching your destinations will be effortless. Stationside boasts a selection of spacious indoor and outdoor facilities centered around a podium, making it the ideal choice for your next destination.</p>
          <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vieiyOZDG-Y?si=NzfwGoJc4ALjO-oh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3 className='heading'>Transportation</h3>
          <p className='content'>One of the standout features of Stationside is its prime urban location. Adjacent to the Milton GO Station, it offers easy access to any destination, with just a 40-minute journey to downtown Toronto. Residents can also take advantage of the abundance of outdoor recreational opportunities, including nearby trails, conservation areas, and parks, perfect for relaxation and weekend leisure.</p>
          <div>
            <img src="https://eadn-wc02-10832456.nxedge.io/wp-content/uploads/Project-Map-135-Nipissing-Rd-Milton.jpg.jpg" alt="location" />
          </div>
          <h3 className='heading'>Location</h3>
          <p className='content'>Stationside is the first phase of Milton’s Future Mobility Hub, which is expected to accommodate approximately 25,000 new residents and provide job opportunities for 4,000 individuals. Serving as a vital nexus, this Mobility Hub connects Milton to the Greater Toronto Area (GTA) and beyond, allowing commuters to reach Toronto’s Union Station in just over an hour. With the impending GO expansion, Stationside will benefit from 15-minute rush hour service and a 30% increase in trip frequency, making Milton more accessible than ever before.</p>
          <div>
            <img src="https://eadn-wc02-10832456.nxedge.io/wp-content/uploads/Stationside-Milton-Mobility-Hub.jpg-1536x906.jpg" alt="" />
          </div>
          <h3 className='heading'>about the developer</h3>
          <p className='content'>Neatt Communities is dedicated to creating thoughtful spaces for families to live and grow. With a commitment to integrity, fairness, and responsibility, they are focused on developing forward-thinking communities. With their vision and experience, they are dedicated to building valuable communities with you and your future in mind.</p>
          <h3 className='heading'>Limited Time Incentives</h3>
          <h6 className='subheading'>CAPPED DEVELOPMENT CHARGES & PARKLAND CONTRIBUTIONS</h6>
          <p className='content'>1 Bedroom Units = $10,000.00</p>
          <p className='content'>2 Bedroom Units = $12,000.00</p>
          <h6 className='subheading'>FREE SPECIAL ASSIGNMENT PROVISION</h6>
          <p className='content'>$1,500.00 + HST</p>
          <h6 className='subheading'>RIGHT TO LEASE DURING OCCUPANCY</h6>
          <p className='content'>FREE, No Charge</p>
          <h6 className='subheading'>PARKING INCLUDED</h6>
          <p className='content'>For All Units 516 Sq Ft and Larger</p>
          <div>
            <h3 className='heading'>Key Details</h3>
            <ul className='list'>
              <li className='listitem'>
                <p className='listcontentbold'>Project Name</p>
                <p className='content'>Stationside Condos</p>
              </li>
              <li className='listitem'>
                <p className='listcontentbold'>Builder(s)</p>
                <p className='content'>Neatt Communities</p>
              </li>
              <li className='listitem'>
                <p className='listcontentbold'>Property Type</p>
                <p className='content'>Condo</p>
              </li>
              <li className='listitem'>
                <p className='listcontentbold'>Number Of Storeys</p>
                <p className='content'>23</p>
              </li>
              <li className='listitem'>
                <p className='listcontentbold'>Number of Suites</p>
                <p className='content'>613</p>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <div className="justify-center items-center w-full">
          <Form></Form>
          </div>
        </div>
      </div>
    </div>
    </section>
    </main>
    </>
  )
}

export default SingleProject