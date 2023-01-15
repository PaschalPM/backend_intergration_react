
const CommentForm = () => {
  return (
	<form>
		<h2 className="text-center text-3xl pt-5 font-bold">Comment Form</h2>
		<div>
		<input type="text" name="creator" placeholder="Creator"
		 className="border w-full p-2 rounded-lg my-2"
		 />
		 </div>
		
		<div>
		{/* @ts-ignore */}
		<textarea name="" id="" cols="30" rows="10" placeholder="Insert comment here..."
		className="border resize-none w-full p-2 rounded-lg my-2"
		></textarea>
			</div>
		<button className="py-2 px-8 text-lg font-bold bg-blue-700 text-white rounded-md
							bg-gradient-to-r from-blue-400 to-blue-900
		">
			create
		</button>
	</form>
  )
}

export default CommentForm