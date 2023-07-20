import React from 'react'

function SelectUser(props) {
    
    function handleSelectUser(event) {
        props.selectUser(event.target.value)
    }

    return(<div className="select-user" >
            <label for="choice">Select user: </label>
            <select className='select-select' id="choice" onChange={handleSelectUser}>
                <option value="juliusomo">juliusomo</option>
                <option value="amyrobson">amyrobson</option>
                <option value="maxblagun">maxblagun</option>
                <option value="ramsesmiron">ramsesmiron</option>
            </select>
        </div>
    )
}

export default SelectUser;