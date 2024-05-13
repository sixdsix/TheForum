import Link from 'next/link';

const PostItem = ({ post }) => {
    return (
        <article>
            <h2><Link href={`/post/${post.id}`}>{post.title}</Link></h2>
            <p>{post.content.substring(0, 100)}...</p>
        </article>
    );
};

export default PostItem;
