const fetchPosts = async () => {
  const res = await fetch("http://localhost:3400/posts");
  if (res.status != 200) {
    throw new Error("Error fetching posts");
  } else {
    console.log("Data fetched successfully");
    const postsData = await res.json();
    return postsData;
  }
};

module.exports = fetchPosts;
