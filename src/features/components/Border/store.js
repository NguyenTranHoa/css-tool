let redux = require('redux');

const initialState = {
    width: 5,
    style: 'solid',
    position: '',
    corner: 0,
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
    border: [
        {red: 28},
        {green: 110},
        {blue: 164},
        {hex: '#1C6EA4'}
    ],
    fore: [
        {red: 61},
        {green: 157},
        {blue: 246}
    ],
    back: [
        {red: 255},
        {green: 255},
        {blue: 255}
    ],
    active: 0
}

const allReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_WIDTH':
            return {...state, width: action.value}
        case 'CHANGE_COLOR':
            return {...state, border:   [
                                            {red: action.color.r}, 
                                            {green: action.color.g}, 
                                            {blue: action.color.b},
                                            {hex: action.color.hex}
                                        ]   
                                    }
        case 'CHANGE_STYLE':
            return {...state, style: action.style}
        case 'CHANGE_POSITION': 
            return {...state, position: action.position}
        case 'CHANGE_RADIUS': 
            return {...state, corner: action.value, topLeft: action.value, topRight: action.value, bottomRight: action.value, bottomLeft: action.value}
        case 'CHANGE_TOPLEFT':
            return {...state, topLeft: action.value}
        case 'CHANGE_TOPRIGHT':
            return {...state, topRight: action.value}
        case 'CHANGE_BOTTOMRIGHT':
            return {...state, bottomRight: action.value}
        case 'CHANGE_BOTTOMLEFT':
            return {...state, bottomLeft: action.value}  
        case 'CLICK_RESET':
            return {...state, corner: 0, topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0}
        case 'CHANGE_FORE':
            return {...state, fore:     [
                                            {red: action.color.r}, 
                                            {green: action.color.g}, 
                                            {blue: action.color.b}
                                        ]}
        
        case 'CHANGE_BACK':
            return {...state, back:     [
                                            {red: action.color.r}, 
                                            {green: action.color.g}, 
                                            {blue: action.color.b}
                                        ]}     

        default:
            return state
    }
}

let store = redux.createStore(allReducer);

export default store;
