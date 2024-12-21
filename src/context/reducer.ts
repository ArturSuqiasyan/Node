import { IAction, INode, IState, Types } from "./types";

export const reducer = ( state: IState, action: IAction) =>{
switch (action.type){
    case Types.ADD_TASK:
        return {
            ...state,
            Node:[...state.Node, action.payload as INode]
        }
        case Types.SET_TASKS:
            return{
                ...state, 
                Node: action.payload as INode[]
            }
            case Types.DELETE_TASK:
                return{
                    ...state, 
                    Node:state.Node.filter(t =>
                        t.id !== action.payload as string
                    )
                }
                default:
      return state;
}
}