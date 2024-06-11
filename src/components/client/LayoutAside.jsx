export default function LayoutAside(){
    return(
        <aside className="fixed h-full w-[200px]">
            <div className="w-16 h-16 shadow-md p-[3px] rounded-full">
                <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h1 className="text-[13px] mt-4">Hi There, <b>Gbemi!</b></h1>
            <h1 className="text-[12px]">What can I help you with?</h1>

            <nav className="mt-[70px]">
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Manage categories</h1>
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Get extension</h1>
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Instagram</h1>
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Facebook</h1>
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Youtube</h1>
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Email</h1>
                <h1 className="text-[13px] my-6 font-semibold cursor-pointer">Logout</h1>
            </nav>
        </aside>
    )
}