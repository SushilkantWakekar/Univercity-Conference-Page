import DisplayThemes from '../DisplayThemes'
import './index.css'
//import ThemesData from './components/ThemesData';

const themeDetails = [
    {
        id : 1,
        themeName : 'Marketing & Advertising',
        subThemes : ['Impact on Consumer behaviour', 'Customer Relationship Management',
                    'Retail and E-commerce', 'Tribal Marketing', 'Green marketing', 'Innovative Marketing strategies',
                    'Marketing Analytics','Rural Marketing','Social media Marketing']
    },
    {
        id : 2,
        themeName : 'General Management',
        subThemes : ['Startup & Entrepreneurship', 'Innovations in Business',
                    'Enterprise Resource Planning', 'Smart Infrastructure', 'Knowledge Management',
                     'Corporate Social Responsibility',
                    'E-commerce: Scope and new trends','Operations Excellence']
    },
    {
        id : 3,
        themeName : 'Finance',
        subThemes : ['Export and import Management', 'Innovative Banking practices',
                    'Stock Market Strategies & Valuation Models', 'Strategies', 'Risk Assessment and Risk Management',
                     'Need of Financial Literacy and Financial Inclusion'
                    ]
    },
    {
        id : 4,
        themeName : 'Human Resource Management',
        subThemes : ['Performance Management', 'Strategic HRM',
                    'Stress Management and Work Life Balance', 'Talent Acquisition & HR Engagement', 'Leadership and Corporate Communication',
                     'Innovative Human Resource Practices',
                     'Green HRM- Industrial Relation and Labour Laws']
    },
    {
        id : 5,
        themeName : 'Digital Technology',
        subThemes : ['Digital Culture', 'New-age Technologies',
                    'Medical Services', 'Cyber law and security', 'IT Infrastructure- E-learning'
                     ]
    }

]

const Themes = props => {
    
    return(
        <div className='main'>
            <h2 className="sub-heading">Themes and Sub-Themes of National Conference</h2>
            {/* <div className="main-theme-container"> */}
            
            <div className="theme-container" >
                        <ul className="themes">
                            {
                                themeDetails.map(eachTheme => (
                                    <DisplayThemes key = {eachTheme.id} themes = {eachTheme}/>
                                ))
                            }
                        </ul>        
            </div>

                {/* <div className="theme-container" >
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

             */}

            </div>

        // </div>     
        
    )
    
}

export default Themes