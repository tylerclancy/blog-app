import Link from 'next/link';

export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button className='btn-logo'>Feed</button>
          </Link>
        </li>

        {/* User is signed in and has username */}
        {username && (
          <>
            <li className='push-left'>
              <Link href='/admin'>
                <button className='btn-blue'>Write Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* User is not signed in or has not created username */}
        {!username && (
          <li>
            <Link href='/enter'>
              <button className='btn-blue'>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
