import React, { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import MainLayout from '../components/layouts/mainLayout'
import { IUser } from '../models/user.interface'

const RenderUserList = (props) => {
  const { users } = props

  return (
    <>
      {users
        ? users.map((user: IUser, i: number) => {
            return (
              <li className="list-group-item" key={'list-user-' + i}>
                <Link
                  as={`/users/profile/${user.id}`}
                  href={{
                    pathname: '/users/profile',
                    query: {
                      userId: user.id,
                    },
                  }}
                >
                  <a>{user.name}</a>
                </Link>
              </li>
            )
          })
        : null}
    </>
  )
}
const Index = (props: any) => {
  console.log('Reindex : ', props)
  const { users } = props
  useEffect(() => {
    console.log('useEffect', users)
  }, [])
  return (
    <MainLayout>
      <h1 className="superAwesome">Pick a user</h1>
      <ul className="list-group">
        <RenderUserList users={props.users} />
      </ul>
    </MainLayout>
    // <MainLayout>
    //   <h1 className="superAwesome">Pick a user</h1>
    //   <ul className="list-group">
    //     <RenderUserList users={props.users} />
    //   </ul>
    // </MainLayout>
  )
}
export const getServerSideProps = async () => {
  console.log('getServerSideProps')
  let userData: any
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    userData = response.data
  } catch (error) {
    console.log('Error :', error)
  }
  return {
    props: {
      users: userData,
    },
  }
}
export default Index
