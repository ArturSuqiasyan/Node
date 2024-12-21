import { Dispatch } from "react"

export interface INode {
    id:string
    title:string
    content:string
}
export interface IState {
    Node: INode[]
}
export interface IAction {
    type: Types
    payload: unknown
}
export enum Types{
    DELETE_TASK,
    ADD_TASK,
    SET_TASKS
}
export interface IContext {
    state: IState
    dispatch: Dispatch <IAction>
}
export type InputNode = Omit <INode, id>