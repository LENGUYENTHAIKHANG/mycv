import React from 'react'
const data=[
    {
        name:'Web Browser',
        ngonngu:'C# .NET',
        linkgit:'https://github.com/LENGUYENTHAIKHANG/TTCM.git',
        link:''
    },
    {
        name:'Front-end web Car hiring',
        ngonngu:'ReactJS, redux, ant design',
        linkgit:'https://github.com/LENGUYENTHAIKHANG/car-hiring.git',
        link:''
    },
    {
        name:'My CV',
        ngonngu:'ReactJS, ant design',
        linkgit:'https://github.com/LENGUYENTHAIKHANG/TTCM.git',
        link:'https://github.com/LENGUYENTHAIKHANG/TTCM.git'
    }

]

function Project() {
  return (
    <div>
        <div style={{ fontSize: '30px' }}>PROJECTS</div>
        {data.map(da=>(
            <div className='project-info'>
                <br></br>
                <div>
                    <div style={{fontSize:'25px'}}>{da.name}</div>
                    <div style={{fontSize:'20px'}}>{da.ngonngu}</div>
                    <div style={{fontSize:'17px'}}>{da.link}</div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Project