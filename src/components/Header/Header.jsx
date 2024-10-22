import prorfile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl mx-auto border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={prorfile} alt="" />
        </header>
    );
};

export default Header;