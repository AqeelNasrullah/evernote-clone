import React from "react";
import {deleteNote, toggleFav} from "../../store/actions/noteAction";
import {useDispatch} from "react-redux";
import moment from "moment";
import {Link} from "react-router-dom";

const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteNoteHandler = () => dispatch(deleteNote(note))
    const toggleFavoriteHandler = () => dispatch(toggleFav(note))
    const favMarkUp = note.favorite ? 'favorite' : 'favorite_outline'
    const handleEditNote = () => dispatch({type:'EDIT_NOTE', payload: note})

    return (
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor: 'pointer'}} onClick={toggleFavoriteHandler}>{favMarkUp}</i>
                <i className="material-icons" style={{cursor: 'pointer'}} onClick={deleteNoteHandler}>delete</i>
            </div>
            <Link exact to={"/note/" + note.id}><h5>{note.title}</h5></Link>
            <p className="truncate">{note.desc}</p>
            <p>{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align">
                <Link to={`/note/${note.id}/edit`}><i className="material-icons" style={{cursor: 'pointer'}} onClick={handleEditNote}>edit</i></Link>
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