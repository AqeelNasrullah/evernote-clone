export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes')
            .add({
                ...note,
                favorite:false,
                createdAt: new Date()
            })
            .then(() => {
                alert('Note added successfully')
            })
            .catch((error) => {
                alert(error);
            });
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id)
            .delete()
            .then(() => {
                alert('Note deleted successfully')
            })
            .catch((error) => {
                alert(error);
            });
    }
}

export const toggleFav = (note) => {
    const fav = !note.favorite;
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id)
            .update({
                favorite: fav
            })
            .then(() => {
                fav ? alert('Added to favorites.'): alert('Removed from favorites.');
            })
            .catch((error) => {
                alert(error);
            });
    }
}