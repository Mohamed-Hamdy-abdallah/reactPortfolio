import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';


function Blogdetails() {
  const { id } = useParams();
  const { data, err, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <div className="blog-details">
      {loading && <h2><div className="spinner-border text-danger" style={{ color: "#f1356d", width: "3rem", height: "3rem" }} role="status"></div></h2>}
      {err && <div>{err}</div>}
      {data && (
        <article>
          <img width="200" height="200" src={data.image} />
          <h2>{data.title}</h2>
          <p>{data.category}</p>
          <div>{data.description}</div>
        </article>
      )}
    </div>
  )
}

export default Blogdetails
