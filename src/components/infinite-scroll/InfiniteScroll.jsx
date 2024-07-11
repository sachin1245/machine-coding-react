import React, {useState, useEffect, useRef, useCallback} from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    const fetchItems = useCallback(async (page)=> {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
        const newItems = await response.json();
        setItems(prevItems => [...prevItems, ...newItems]);
        setLoading(false);
    }, []);

    const handleObserver = useCallback((entities) => {
        const target = entities[0];
        if(target.isIntersecting && !loading) {
            setPage(prevPage => prevPage + 1);
        }
    }, [loading]);

    useEffect(()=>{
        fetchItems(page);
    },[page, fetchItems])

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if(loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if(loader.current) {
                observer.unobserve(loader.current);
            }
        }
    }, [handleObserver])

    


    return(
        <div className="infinite-scroll-container">
            {items.map((item,index) => (
                <div key={`${item.id}-${index}`} className="item">
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
            {loading && <p>Loading more  items...</p>}
            <div ref={loader}/>
        </div>
    )
}


export default InfiniteScroll;