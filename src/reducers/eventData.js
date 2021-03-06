import {
    ADD_EVENT_ITEM,
    EDIT_EVENT_ITEM,
    DELETE_EVENT_ITEM,
    TOGGLE_COMPLETE,
    CLEAR_EVENTS
} from "../constants/constants.js";

var initialEventData = [];
var nextId = 0;

const eventData = (state = initialEventData, action) => {

    var stateCopy = [];

    switch(action.type) {
        case ADD_EVENT_ITEM:
            stateCopy = state.slice();
            action.item.id = nextId;
            action.item.complete = false;
            stateCopy.push(action.item);
            nextId++;
            return stateCopy;

        case EDIT_EVENT_ITEM:
            stateCopy = state.slice();
            const editIdx = stateCopy.findIndex(element => element.id === action.id);
            stateCopy[editIdx].title = action.title;
            stateCopy[editIdx].description = action.description;
            return stateCopy;
            

        case DELETE_EVENT_ITEM:
            stateCopy = state.slice();
            const delIdx = stateCopy.findIndex(element => element.id === action.id);
            stateCopy.splice(delIdx, 1);
            return stateCopy;

        case TOGGLE_COMPLETE:
            stateCopy = state.slice();
            const idx = stateCopy.findIndex(element => element.id === action.id);
            stateCopy[idx].complete = ! stateCopy[idx].complete;
            return stateCopy;

        case CLEAR_EVENTS:
            return stateCopy;

            
        default:
            return state;
    }
};

export default eventData;