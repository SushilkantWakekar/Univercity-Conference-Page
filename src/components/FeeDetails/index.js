import React from 'react';
import './index.css'


const FeeDetails = () => {

    return(
        <>
        <h2 className='sub-heading'>Registration Fees and other Details</h2>
        <div className="fee-details-container">
            
            <div className='fee-category-card delegate-category'>
                <div className='categories heading'>
                    Delegate Category
                </div> 

                <div className='categories'>
                    Post Graduate Students
                </div> 

                <div className='categories'>
                    Ph.D Scholars
                </div>    

                <div className='categories'>
                    Academician
                </div>  

                <div className='categories last_border'>
                    Industry Expert
                </div>  

            </div>

            <div className='fee-category-card'>
                <div className='categories heading'>
                    Last Date of Registration 2nd January 2024
                </div> 

                <div className='categories'>
                    <span className='span-text'>Post Graduate Students</span> Free
                </div> 

                <div className='categories'>
                    <span className='span-text'>Ph.D Scholars</span> 300
                </div>    

                <div className='categories'>
                    <span className='span-text'>Academician</span> 400
                </div>  

                <div className='categories last_border'>
                    <span className='span-text'>Industry Expert</span> 500
                </div>  

            </div>

            <div className='fee-category-card'>
                <div className='categories heading'>
                    On the Spot Registration
                </div> 

                <div className='categories'>
                    <span className='span-text'>Post Graduate Students</span> Free
                </div> 

                <div className='categories'>
                    <span className='span-text'>Ph.D Scholars</span> 400
                </div>    

                <div className='categories'>
                    <span className='span-text'>Academician</span> 500
                </div>  

                <div className='categories last_border'>
                    <span className='span-text'>Industry Expert</span> 600
                </div>  

            </div>
            
        </div>

                                {/* Publication Section */}
        <h2 className='sub-heading'>Publication Opportunities</h2>
        <div className="fee-details-container">
            
            <div className='fee-category-card delegate-category'>
                <div className='categories heading'>
                    Information of Journals
                </div> 

                <div className='categories'>
                    UGC Care Listed Journal – ( Print Version)
                </div> 


                <div className='categories last_border'>
                    Presentations Only
                </div>  

            </div>

            <div className='fee-category-card'>
                <div className='categories heading'>
                    Publication Charges
                </div> 

                <div className='categories'>
                    <span className='span-text'>UGC Care Listed Journal – ( Print Version)</span> 3500 rs
                </div>  

                <div className='categories last_border'>
                    <span className='span-text'>Presentations Only</span> 500 rs
                </div>  

            </div>

            <div className='fee-category-card'>
                <div className='categories heading'>
                    Every Additional Authors
                </div> 

                <div className='categories'>
                    <span className='span-text'>UGC Care Listed Journal – ( Print Version)</span> 1500 rs
                </div> 

                <div className='categories last_border'>
                    <span className='span-text'>Presentations Only</span> 200 rs
                </div>  

            </div>
            
        </div>


        <div className='button-container'>
            <button className='register'><a href='registration' className='anch'  >Registration</a></button>
        </div>
        

        </>
    )
    


}

export default FeeDetails