import { useDispatch } from "react-redux";
import { addReaction } from "./postSlice";
import { memo } from "react";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

const ReactionButton = ({post}) =>{
    console.log('react button');
    const dispatch = useDispatch()

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) =>{
        return(
            <button key={name} className="reactBtn" onClick={() => dispatch(addReaction({id: post.id, name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return(
        <div>
            {renderReaction}
        </div>
    )
}

export default memo(ReactionButton)