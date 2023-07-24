import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = () => {
    const router = useRouter();
    const blogId = router.query.blogId;
    console.log(blogId)
    return (
        <div>
            <h1>Current blog Id is: {blogId}</h1>
        </div>
    );
};

export default BlogDetails;