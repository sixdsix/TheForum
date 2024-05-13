import Link from 'next/link';
import { useUser } from '../utils/useUser';  // Custom hook to manage user state

const Header = () => {
    const { user, logout } = useUser();

    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                {user ? (
                    <>
                        <Link href="/create">Create Post</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
