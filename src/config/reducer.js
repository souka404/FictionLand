const initialState = {
    novels: [
       
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_novel":
            return { ...state, novels: [...state.novels, action.payload] };

        case "Update_novel":
            const updatednovels = state.novels.map(novel => {
                if (novel.id === parseInt(action.payload.id)) {
                    return {
                        ...novel,
                        title: action.payload.title,
                        description: action.payload.description,
                        genre: action.payload.genre
                    };
                }
                return novel;
            });
            return { ...state, novels: updatednovels };

        case "Delete_novel":
            return { ...state, novels:[...state.novels.filter((u) => u.id !== parseInt(action.payload)) ] };

        default:
            return state;
    }
};

export default reducer;
