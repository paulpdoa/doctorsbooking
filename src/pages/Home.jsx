export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen home">
            <div className="w-3/4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h1 className="text-3xl">Find a Doctor/Provider and book your next visit</h1>
                    <button className="text-2xl bg-gray-200 text-gray-600 p-2 rounded-full">Select Location</button>
                </div>
                <input className="outline-none border border-gray-300 rounded-xl p-4 placeholder:text-xl" type="search" placeholder="Search for Specialty, Hospital Name, or your Doctor's name" />
                <button className="self-end text-blue-500 font-semibold text-xl">Need help?</button>
            </div>

            <div className="mt-20">
                <h2 className="text-4xl">We’re bridging the gap between<br /> Doctors and Patients</h2>
                <p className="text-2xl text-gray-500">You’ll never miss another Doctor’s appointment!</p>
            </div>
        </div>
    )
}