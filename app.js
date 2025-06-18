export const renderNotes = (notes) =>{

    let newNotes = notes.map(({id, note, title, isPinned, isArchived}) =>{
        return (

            `<div class="single-note">
                <div class="d-flex align-center title-container">
                    <span class="single-note-title">${title}</span>
                    <button class="button del-btn v-hidden" data-type="del" data-id=${id}>
                        <span data-type="del" data-id=${id} class="material-icons-outlined ">
                            delete
                        </span>
                    </button>    
                </div>
                <p>${note}</p>
                <div class="options d-flex gap-md">
                    <button class="button btn pinned-btn v-hidden" data-type="pinned" data-id=${id}>
                        <span class="material-icons-outlined" data-type="pinned" data-id=${id}>
                            push_pin
                        </span>
                    </button>
                    <button class="button btn pinned-btn v-hidden" data-type="archive" data-id=${id}  >
                        <span class="material-icons-outlined "data-type="archive" data-id=${id}>
                        archive
                        </span>
                    </button>
                </div>

            </div>`

        )

    })

    newNotes = newNotes.join("");
    return newNotes;

}