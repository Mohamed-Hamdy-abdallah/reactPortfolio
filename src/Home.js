//import React ,{useState , useEffect} from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';
// import Preloader from './Spin/Preloader'
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Home() {
    const { data, err, loading } = useFetch('https://fakestoreapi.com/products');

    return (
        <div className='home'>

            {loading && <div className="spinner-border text-danger" style={{color : "#f1356d" ,width: "3rem", height: "3rem"}} role="status"></div>}
            {err && <div>{err}</div>}
            {data && <Bloglist blogs={data} />}
        </div>
    )
}


export default Home
