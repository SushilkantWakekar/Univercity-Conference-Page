import './index.css'


const FeeDetails = () => {

    return(
        <>
        <h2 className='sub-heading'>Registration Fees and other Details</h2>
        <div className="fee-details-container">
            
            <div className='fee-category-card'>
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
                    Free
                </div> 

                <div className='categories'>
                    300
                </div>    

                <div className='categories'>
                    400
                </div>  

                <div className='categories last_border'>
                    500
                </div>  

            </div>

            <div className='fee-category-card'>
                <div className='categories heading'>
                    On the Spot Registration
                </div> 

                <div className='categories'>
                    Free
                </div> 

                <div className='categories'>
                   400
                </div>    

                <div className='categories'>
                    500
                </div>  

                <div className='categories last_border'>
                    600
                </div>  

            </div>
            
        </div>

        <div className='button-container'>
            <button className='register'><a href='https://forms.gle/5SpfLZ28iUWf84aV7' className='anch' rel='noreferrer' target ='_blank' >Registration</a></button>
        </div>
        

        </>
    )
    


}

export default FeeDetails