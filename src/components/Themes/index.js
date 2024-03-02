import DisplayThemes from '../DisplayThemes';
import React from 'react';
import './index.css';
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

           

            </div>

        // </div>     
        
    )
    
}

export default Themes