export const JoinedEventCard = ({joinedEventData})=>{
    return(
        <>
          <section className="pt-30">
          <div className="mx-auto w-1/2 card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{joinedEventData.eventTitle}</h2>
              <p>{joinedEventData.description}</p>
              <p>{joinedEventData.eventDate}</p>
              <div className="card-actions ">
              </div>
            </div>
          </div>
        </section>
        </>
    )
}