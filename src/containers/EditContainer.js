import { connect } from "react-redux";
import Edit from "../components/Edit.jsx";
import editEventItem from "../actions/editEventItem.js";

const mapStateToProps = (state, ownProps) => {
    var id = parseInt(ownProps.match.params.id);
    const editIdx = state.eventData.findIndex(element => element.id === id);
    console.log(state.eventData);
    return {
        item: state.eventData[editIdx],
        id: id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEdit: (id, title, description) => {
            dispatch(editEventItem(id, title, description));
        }
    };
};

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default EditContainer;