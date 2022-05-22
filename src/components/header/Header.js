import React from 'react'
import './header.css'
import { ContactsOutlined, MailFilled, EnvironmentFilled,PhoneFilled ,FacebookFilled ,SkypeFilled, GithubFilled  } from '@ant-design/icons';
import khang from './khang.png'

function Header() {
    return (
        <div className='header'>
            <div className='left-header'>
                <div className='name'>LE NGUYEN THAI KHANG</div>
                <div className='dev'>FRONT-END DEVELOPER FRESHER</div>
                <hr></hr>
                <div style={{ fontSize: '23px' }}><ContactsOutlined style={{ fontSize: '40px' }} /> 14/01/2000</div>
                <div style={{ fontSize: '23px' }} >
                    <MailFilled style={{ fontSize: '40px' }} />
                    <a className='mail' href='mailto:lenguyenthaikhang700@gmail.com'>
                        lenguyenthaikhang700@gmail.com
                    </a>
                </div>
                <div style={{ fontSize: '23px' }}>
                    <EnvironmentFilled style={{ fontSize: '40px' }} />
                    450-451 Le Van Viet Street, Tang Nhon Phu-A Ward, Thu Duc City, Ho Chi
                    Minh City
                </div>
                <div style={{ fontSize: '23px' }} >
                    <PhoneFilled style={{ fontSize: '40px' }} />
                    <a className='mail' href="tel:+84392203700">+84 39 220 3700</a>
                </div>
                <div style={{ fontSize: '23px' }} >
                    <FacebookFilled style={{ fontSize: '40px' }} />
                    <a className='mail' href='https://www.facebook.com/profile.php?id=100013373972602'>
                    https://www.facebook.com/profile.php?id=100013373972602
                    </a>
                </div>
                <div style={{ fontSize: '23px' }} >
                    <SkypeFilled style={{ fontSize: '40px' }} />
                    <a className='mail' href='https://join.skype.com/invite/yGDHchlQwhVn'>
                    https://join.skype.com/invite/yGDHchlQwhVn
                    </a>
                </div>
                <div style={{ fontSize: '23px' }} >
                    <GithubFilled  style={{ fontSize: '40px' }} />
                    <a className='mail' href='https://github.com/LENGUYENTHAIKHANG'>
                    https://github.com/LENGUYENTHAIKHANG
                    </a>
                </div>
            </div>
            <div className='right-header'>
                <img className='image-khang' src={khang} alt='khang' />
            </div>
            

        </div>
    )
}

export default Header