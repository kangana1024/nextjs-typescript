import React from 'react'
import MainLayout from '../../components/layouts/mainLayout'
import axios from 'axios'

const ShowUser = ({ user }) => {
  return (
    <div>
      <div>
        <strong>Name : {user.name} </strong>
      </div>
      <div>
        <strong>Username : {user.username}</strong>
      </div>
      <div>
        <strong>Email : {user.email}</strong>
      </div>
    </div>
  )
}
const Profile = ({ user }) => {
  return (
    <MainLayout>
      <br />
      <h1>User Profile</h1>
      <br />
      <ShowUser user={user} />
    </MainLayout>
  )
}
Profile.getInitialProps = async ({ query }) => {
  let userData
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/' + query.userId
    )

    userData = response.data
  } catch (error) {
    console.log('Error :', error)
  }

  return {
    user: userData,
  }
}
// export const getServerSideProps = async ({ query }) => {
//   let userData;
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users/' + query.userId
//     );

//     userData = response.data;
//   } catch (error) {
//     console.log('Error :', error);
//   }

//   return {
//     props: {
//       user: userData
//     }
//   };
// };
export default Profile
