const initialState = {
    "name": 'Hari',
    "Roll": 81,
    "Money": 2000
}

export default function reducer(state = initialState, action) {
    if (action.type === 'UP') {
        state.Money += 100;
    }
    return state;
}
