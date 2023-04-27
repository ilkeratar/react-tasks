import axios from "axios";

 const getData=async (userId)=>{
    const {data:user}=await axios("https://jsonplaceholder.typicode.com/users"+`/${userId}`);
    const {data:posts}=await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);

    console.log(user);
    console.log(posts);
 }

export default getData;