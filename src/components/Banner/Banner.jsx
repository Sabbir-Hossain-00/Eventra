export const Banner = ()=>{
    return(
        <section  className="py-10">
        <div className="flex justify-between items-start bg-gray-100 px-20 py-20 rounded-2xl">
            <div className="space-y-3 w-1/3">
                <h1 className="text-3xl font-medium">Empower Your Community</h1>
                <p>Connect With Your Community Through Service & Events That Inspire Growth, Build Unity, and Drive Meaningful Change in the World Around You.</p>
                <button className="btn bg-fuchsia-300">Explore Events</button>
            </div>
            <div className="rounded-2xl">
                <img className="rounded-2xl" src="https://i.ibb.co/39ZZ9RTV/image.png" alt="" />
            </div>
        </div>
     </section>
    )
}