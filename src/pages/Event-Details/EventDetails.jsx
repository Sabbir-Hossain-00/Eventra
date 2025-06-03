import { useLoaderData } from "react-router"

export const EventDetails = ()=>{
    const eventData = useLoaderData();
    console.log(eventData)
    return(
        <section className="pt-30 pb-10">
          <div className="mx-auto w-1/2 card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{eventData.eventTitle}</h2>
              <p>{eventData.description}</p>
              <div className="card-actions ">
                <button className="btn btn-primary">Join</button>
              </div>
            </div>
          </div>
        </section>
    )
}