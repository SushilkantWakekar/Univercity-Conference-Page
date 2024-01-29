import './index.css'
//import ThemesData from './components/ThemesData';



const Themes = props => {
    
    return(
        <div>
            <h2 className="sub-heading">Themes and Sub-Themes of National Conference</h2>
            <div className="main-theme-container">
            
            <div className="theme-container" >
                        <ul className="theme-name">Marketing & Advertising
                            <div className="subtheme-container">
                                <li className="subtheme-name">Impact on Consumer behaviour</li>
                                <li className="subtheme-name">Customer Relationship Management</li>
                                <li className="subtheme-name">Retail and E-commerce</li>
                                <li className="subtheme-name">Tribal Marketing</li>
                                <li className="subtheme-name">Green marketing</li>
                                <li className="subtheme-name">Innovative Marketing strategies</li>
                                <li className="subtheme-name">Marketing Analytics</li>
                                <li className="subtheme-name">Rural Marketing</li>
                                <li className="subtheme-name">Social media Marketing</li>
                            </div>
                        </ul>        
            </div>

                <div className="theme-container" >
                        <ul className="theme-name">General Management
                            <div className="subtheme-container">
                                <li className="subtheme-name">Startup & Entrepreneurship</li>
                                <li className="subtheme-name">Innovations in Business</li>
                                <li className="subtheme-name">Enterprise Resource Planning</li>
                                <li className="subtheme-name">Smart Infrastructure</li>
                                <li className="subtheme-name">Knowledge Management</li>
                                <li className="subtheme-name">Corporate Social Responsibility</li>
                                <li className="subtheme-name">E-commerce: Scope and new trends</li>
                                <li className="subtheme-name">Operations Excellence</li>
                                
                            </div>
                        </ul>
                </div>
                

                <div className="theme-container" >
                        <ul className="theme-name">Finance
                            <div className="subtheme-container">
                                <li className="subtheme-name">Export and import Management</li>
                                <li className="subtheme-name">Innovative Banking practices</li>
                                <li className="subtheme-name">Stock Market Strategies & Valuation Models</li>
                                <li className="subtheme-name">Strategies</li>
                                <li className="subtheme-name">Risk Assessment and Risk Management</li>
                                <li className="subtheme-name">Need of Financial Literacy and Financial Inclusion</li>
                            </div>
                        </ul>
                </div>

                <div className="theme-container " >
                        <ul className="theme-name">Human Resource Management
                            <div className="subtheme-container">
                                <li className="subtheme-name">Performance Management</li>
                                <li className="subtheme-name">Strategic HRM</li>
                                <li className="subtheme-name">Stress Management and Work Life Balance</li>
                                <li className="subtheme-name">Talent Acquisition & HR Engagemen</li>
                                <li className="subtheme-name">Leadership and Corporate Communication</li>
                                <li className="subtheme-name">Innovative Human Resource Practices</li>
                                <li className="subtheme-name">Green HRM- Industrial Relation and Labour Laws</li>
                            </div>
                        </ul>    
                </div>

                <div className="theme-container" >
                        <ul className="theme-name">Digital Technology
                            <div className="subtheme-container">
                                <li className="subtheme-name">Digital Culture</li>
                                <li className="subtheme-name">New-age Technologies</li>
                                <li className="subtheme-name">Medical Services</li>
                                <li className="subtheme-name">Cyber law and security</li>
                                <li className="subtheme-name">IT Infrastructure- E-learning</li>
                            </div>
                        </ul>
                </div>

            

            </div>

        </div>     
        
    )
    
}

export default Themes