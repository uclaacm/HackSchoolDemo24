import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <div className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20'>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link
            to='/'
            className='flex z-40 font-semibold'>
            <span>acm hack.</span>
          </Link>

          <div className='hidden items-center space-x-4 sm:flex'>
            <Link
              to='/About'
              className='inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
              About
            </Link>
            <Link
              to='/team'
              className='inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium text-secondary-foreground hover:bg-secondary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
              Team
            </Link>
            <Link
              to='/Contact'
              className='inline-flex items-center justify-center h-10 px-4 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
