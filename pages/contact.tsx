import React from 'react'
import MainLayout from '../components/layouts/mainLayout'

const Contact = () => {
  return (
    <MainLayout>
      <h1>Welcome to my Contact</h1>
      <div className="jsxStyled">Hello Styles with style-jsx</div>
      <style jsx>
        {`
          .jsxStyled {
            color: blue;
          }
        `}
      </style>
      <div className="contact_static">Styled with static css</div>
    </MainLayout>
  )
}

export default Contact
