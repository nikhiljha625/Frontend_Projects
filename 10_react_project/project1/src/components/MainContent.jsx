import React from 'react'

function MainContent() {
  return (
    <main className='Hero container'>
        <div className='MainText'>
            
                <h1>YOUR FEET DESERVE THE BEST</h1>
                
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST 
                AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                

                <div className='content btn'>
                <button>Shop Now</button>
                <button>Category</button>
                </div>

                <div className='Content Foot'>
                <p>Also Available On</p>
                <div className='Brand-icons'>
                    <img src="/images/flipkart.png" alt="flipkart" />
                <img src="/images/amazon.png" alt="amazon" />
                </div>
                </div>
            

        </div>
        <div className='ShoeImage'>
            <img src="/images/shoe_image.png" alt="Shoe_image" />
        </div>
    </main>

  )
}

export default MainContent