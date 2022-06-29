const initialState = 2000;

export default function reducer(state = initialState, action) {
    if (action.type === "UP") {
        state += 100;
    }
    if (action.type === "DOWN") {
        state -= 100;
    }
    return state;
}
