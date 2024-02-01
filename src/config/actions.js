export const AddNovelAction = (novel) =>{
    return {type:"Add_novel" , payload:novel}
}
export const UpdateNovelAction = (newnovel) =>{
    return {type:"Update_novel" , payload:newnovel}
}
export const DeleteNovelAction = (id) =>{
    return {type:"Delete_novel" , payload:id}
}