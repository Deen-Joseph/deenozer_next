
import './Blog.module.css'

const Blog =(data)=>{
  return( 

<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>{data.heading}</h2>
      <h5>{data.description} {data.date}</h5>
      <div className="fakeimg" >{data.heading}</div>
      <p>{data.details}</p>
    </div>
    <div className="card">
      <h2>{data.heading}</h2>
      <h5>{data.description} {data.date}</h5>
      <div className="fakeimg" >{data.heading}</div>
      <p>{data.details}</p>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>News</h2>
      <div className="fakeimg">{data.image}</div>
      <p>{data.details}</p>
    </div>
    <div className="card">
      <h3>Trending</h3>
      <div className="fakeimg">{data.image}</div>
      <div className="fakeimg">{data.image}</div>
      <div className="fakeimg">{data.image}</div>
    </div>
  </div>
</div>
  )
}

export default Blog
