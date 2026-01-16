const Shimmer = () => {
    return (
        <div className="container-shimmer">
            {
                Array.from({ length: 14 }).map((_, i) => (
                    <div className="card-shimmer" key={i}></div>
                ))
            }

        </div>
    )
}

export default Shimmer;