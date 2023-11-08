import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 border-b-2 mx-4 items-center'>
            <h1 className='text-3xl font-bold '>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;