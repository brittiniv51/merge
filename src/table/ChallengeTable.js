import React from 'react'

const ChallengeTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.challengers.length > 0 ? (
        props.challengers.map((challenger) => (      
          <tr key= {challenger.id}>
            <td>{challenger.item}</td>
            <td>
              <button
              className="button muted-button"
              onClick={() => props.editRow(challenger)}>
                Edit</button>

              <button className="button muted-button"
              onClick={() => props.deleteChallenge(challenger.item)}
              >
                Delete
                </button>
            </td>
          </tr>
          ))
      ) : (
        <tr>
          <td colSpan={2}>No Challenges</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ChallengeTable