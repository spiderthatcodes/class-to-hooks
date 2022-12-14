

const Nine = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    };


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Text</label>
            <input
                type='text'
                value=''
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Nine;
