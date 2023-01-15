import CommentForm from "./components/commentForm"
import CommentDisplay from "./components/CommentDisplay"
import { getData } from "./customHooks&Types"

// create context
// provide context
// consume/use context

type CommentType = {
  id:number,
	creator:string,
	comment:string
	date:string|Date
}

const App = () => {
  let {data, loading} = getData("http://localhost:9000/comments")
  let comments = data as CommentType[]

  return (
    <div className="w-screen h-screen bg-blue-200">
      <div className="container m-auto">
        
        <CommentForm/>
        <CommentDisplay comments={comments}/>
      </div>
    </div>
  )
}

export default App