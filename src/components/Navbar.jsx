export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-3 fixed w-full top-0 z-50">
            <h1 className="text-xl font-semibold">Navbar</h1>

            <div className="flex gap-5 items-center">
                <button className="bg-blue-400 p-1 rounded-md text-gray-100">Signup</button>
                <button className="bg-blue-400 p-1 rounded-md text-gray-100">Login</button>
            </div>
        </nav>
    )
}