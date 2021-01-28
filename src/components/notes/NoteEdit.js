import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {updateNote} from "../../store/actions/noteAction";
import useInput from "../../customHooks/useInput";
import {useHistory} from "react-router-dom";

const NoteEdit = () => {
    const note = useSelector(state => state.note);

    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [desc, bindDesc, resetDesc] = useInput(note.desc);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote({id: note.id, title, desc}));
        resetTitle();
        resetDesc();
        history.push('/');
    }

    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">New Note</h5>
                <div className="input-field">
                    <input id="note_title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note_title">Note Title</label>
                </div>
                <div className="input-field">
                    <textarea id="note_desc" className="materialize-textarea" {...bindDesc} ></textarea>
                    <label className="active" htmlFor="note_desc">Note Description</label>
                </div>
                <button className="btn green">Update</button>
            </form>
        </div>
    )
}

export default NoteEdit;