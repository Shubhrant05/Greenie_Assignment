import UserCreation from './UserCreation'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Greenie Assignment</title>
      </Head>
      <div className=' mx-auto '>
        <UserCreation />
      </div>
    </>
  )

}
