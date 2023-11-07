import { signIn, signOut } from 'auth-astro/client'

export default function Home({ session }) {
  return <>
    {(session) ? <>{session.user.name}<button onClick={() => signOut()}>logout</button></> : <><button onClick={() => signIn("discord")}>login</button></>}
  </>
}
