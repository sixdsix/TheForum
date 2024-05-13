const CommentItem = ({ comment }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <p>{comment.content}</p>
        </div>
    );
};

export default CommentItem;
