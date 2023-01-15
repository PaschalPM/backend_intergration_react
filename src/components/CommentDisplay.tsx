
const CommentDisplay = (props:{comments:[]}) => {
  return (
	<div>
		{props.comments.map((commentObj)=>(
			<div key={commentObj.id}>
				{commentObj.creator} {commentObj.comment} 
			</div>
		))}
	</div>
  )
}

export default CommentDisplay