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
        linkgit:'https://github.com/LENGUYENTHAIKHANG/mycv.git',
        link:'https://khangcv.netlify.app/'
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
                    <a style={{fontSize:'17px'}} href={da.linkgit}>Github: {da.linkgit}</a>
                    <br></br>
                    <a style={{fontSize:'17px'}}href={da.link}>{da.link}</a>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Project