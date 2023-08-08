"use client"
import Logo from '@/app/icons/Logo'
import MobileMenu from '@/app/icons/MobileMenu'

const Header = () => {
    return (
        <header className='flex items-center justify-between w-full my-8 font-mono'>
            <div className='flex flex-row items-center space-x-4'>
                <Logo />
                <p className='h2 hidden md:flex '>Hyperion Dev</p>
            </div>
            <nav className='hidden md:flex flex-row space-x-12 h2'>
                <a className='hover:underline' href="/courses">courses</a>
                <a className='hover:underline' href="/pricing">pricing</a>
                <a className='hover:underline' href="/method">method</a>
            </nav>
            <nav className='flex md:hidden flex-row space-x-12 h2 hover:rotate-45'>
                <MobileMenu />
            </nav>
        </header>
    )
}

export default Header;