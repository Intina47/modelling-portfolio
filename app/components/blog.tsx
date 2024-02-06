import React, { useState } from 'react';

type Post = {
    title: string | null;
    content: string | null;
};

const BlogComponent = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const addPost = () => {
        const title = prompt("Enter post title");
        const content = prompt("Enter post content");
        setPosts([...posts, { title, content }]);
    };

    const selectPost = (post: Post) => {
        setSelectedPost(post);
    };

    const deselectPost = () => {
        setSelectedPost(null);
    };

    return (
        <div className="p-4 bg-black">
            <button 
                onClick={addPost} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Post
            </button>
            {posts.map((post, index) => (
                <div 
                    key={index} 
                    onClick={() => selectPost(post)}
                    onDoubleClick={deselectPost}
                    className="mt-6 bg-white bg-opacity-25 backdrop-blur-md rounded-lg p-4 cursor-pointer"
                >
                    <h2 className="text-xl font-bold text-blue-700">{post.title}</h2>
                    <p className="mt-2 text-gray-200">
                        {selectedPost === post ? post.content : `${post.content?.substring(0, 100)}...`}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BlogComponent;