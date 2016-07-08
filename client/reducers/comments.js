function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [
        ...state, {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
      //we need to return the new state without the deleted comment
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1)
      ]
    default:
      return state

  }
  return state
}

export default function comments(state = [], action) {
  if(typeof action.postId !== 'undefined'){
    console.log([action.postId], state[action.postId], action, state)
    return{
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}
