import React, { useState, useEffect ,lazy,Suspense} from "react";

import axios from "axios";
import Example  from "./Example";
function Search() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://623571e2163bf7c4745b1b6e.mockapi.io/crud"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
      <>
  
    <div className="center">
      <h3>Search SONGS here</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {loading ? (
        
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.firstName.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h1  key={item.id}>{item.lastName}</h1>)
      )}
     
    </div>
    </>
  );
}

export default Search;
