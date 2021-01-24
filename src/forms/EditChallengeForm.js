import React, { useState } from 'react'

const EditChallengeForm = (props) => {
  const [challenger, setChallenger] = useState(props.currentChallenger)

  const handleInputChange = (event) => {
    const { item, value } = event.target

    setChallenger({ ...challenger, [item]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateChallenger(challenger.id, challenger)
      }}
    >
      <label>Challenge</label>
      <input
        type="text"
        item="challenge"
        value={challenger.item}
        onChange={handleInputChange}
      />
      <button>Update Challenge</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditChallengeForm