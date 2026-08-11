import React from 'react'

function Home() {
    const [review, setReview] = React.useState(JSON.parse(localStorage.getItem("reviews"))|| [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const getReview = {
            name: data.get("name"),
            review: data.get("review")
        }
        // setReview(getReview)
        setReview((prevState)=>{
            const newReviews = [...prevState, getReview]
            localStorage.setItem("reviews",JSON.stringify( newReviews))
            return newReviews

        })
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
            <h1>Give Your Review Here!</h1>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className='border' />
        </div>
        <div className='flex'>
            <label htmlFor="review">Review</label>
            <textarea name="review" id="review" className='border' cols={50} rows={5}></textarea>
        </div>
        <button className='border'>submit</button>
    </form>

    {review.map((item, idx)=>{
        return(
        <div key= {idx}>
            <p>{item.name}</p>
            <p>{item.review}</p>

        </div>
        )
    })}
    </>
  )
}

export default Home