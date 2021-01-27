import React from "react";
import {deleteNote, toggleFav} from "../../store/actions/noteAction";
import {useDispatch} from "react-redux";
import moment from "moment";

const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteNoteHandler = () => dispatch(deleteNote(note))
    const toggleFavoriteHandler = () => dispatch(toggleFav(note))
    const favMarkUp = note.favorite ? 'favorite' : 'favorite_outline'

    return (
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor: 'pointer'}} onClick={toggleFavoriteHandler}>{favMarkUp}</i>
                <i className="material-icons" style={{cursor: 'pointer'}} onClick={deleteNoteHandler}>delete</i>
            </div>
            <h5>{note.title}</h5>
            <p className="truncate">{note.desc}</p>
            <p>{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align">
                <i className="material-icons" style={{cursor: 'pointer'}}>edit</i>
            </div>
        </div>
    )
}

const NotesList = (props) => {
    return (
        <div className="noteslist">
            {props.notes && props.notes.map(note => <Note note={note} key={note.id} />)}
        </div>
    )
}

export default NotesList;