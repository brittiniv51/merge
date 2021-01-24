import React, { useState } from 'react';

const AddChallengeForm = props => {
  const initialFormState = { id: null, item: ""}
  const [challenger, setChallenger] = useState(initialFormState)
  const handleInputChange = event => {
    const { item, value } = event.target
    setChallenger({ ...challenger, [item]: value})
  }
  return(
    <form   
      onSubmit={event => {
        event.preventDefault()
        if (!challenger.item) return;
        props.addChallenge(challenger)
      setChallenger(initialFormState)
      }}
    >
      <label>New Challenge</label>
      <input 
        type="text" 
        item="newchallenge"
        value={challenger.item} 
        onChange={handleInputChange}
      />
      <button>Add New Challenge</button>
    </form>
  );
};

export default AddChallengeForm