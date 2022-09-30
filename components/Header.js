import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className='flex justify-between p-5 bg-black shadow-lg shadow-slate-900'>
        <img src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png" width="50px" alt="" srcset="" />
        
        <ul className='flex'>
            <li className='pr-5'>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/movies">Movies</Link>
            </li>
        </ul>
      </header>
    </div>
  )
}

export default Header