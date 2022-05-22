import React from 'react'
import { Rate } from 'antd';
import { CheckSquareFilled } from '@ant-design/icons';
import './info.css'
const data=[
    { 
        name:'HTML/CSS/JAVASCRIPT',
        rate:7
    },
    { 
        name:'REACTJS',
        rate:7
    },
    
    { 
        name:'C# .NET',
        rate:5
    },
    { 
        name:'ReactJS Material UI',
        rate:7
    },
    { 
        name:'UI Mockup Design',
        rate:6
    },
    { 
        name:'Bootstrap 4',
        rate:6
    },
    { 
        name:'Ant Design',
        rate:6
    },
    { 
        name:'Python',
        rate:6
    },
    { 
        name:'Git',
        rate:6
    },
    { 
        name:'Adobe Photoshop',
        rate:5
    },
    
    
    
]

function Skill() {
  return (
      <div>
           <div style={{ fontSize: '30px' }}> SKILL</div>
    <div className='skill'>
        
        {data.map(da=>(
            <div className='skill-info'>
                <br/>
                <div style={{ fontSize: '20px' }}>{da.name}</div>
                
              <Rate count={10} disabled defaultValue={da.rate} character={<CheckSquareFilled />}/>
              
            </div>
        ))}
   
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div style={{ fontSize: '30px' }}>LANGUAGES</div>
    <br></br>
    <div style={{ fontSize: '25px' }}>English</div>
    <div style={{ fontSize: '20px' }}>Basic</div>
    </div>
  )
}

export default Skill