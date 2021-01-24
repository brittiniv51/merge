import React, { useState } from "react";
import ChallengeTable from "../table/ChallengeTable";
import AddChallengeForm from "../forms/AddChallengeForm";
import EditChallengeForm from "../forms/AddChallengeForm";
import "../styles.css"

const Challenge = () => {
  const challengersData = [
    { id: 1, item: "Cook with only one pot" },
    { id: 2, item: "Cook only using the Oven" },
    { id: 3, item: "Cook only using a George Forman" }
  ];
  const initialFormState = { id: null, item: "" };

  const [challengers, setChallengers] = useState(challengersData);
  const [editing, setEditing] = useState(false);
  const [currentChallenger, setCurrentChallenger] = useState(initialFormState);

  const editRow = (challenger) => {
    setEditing(true);
    setCurrentChallenger({ id: challenger.id, item: challenger.item });
  };

  const updateChallenger = (id, updateChallenge) => {
    setEditing(false);
    setChallengers(challengers.map((challenger) => {
      return (challenger.id === id ? updateChallenger : challenger);
    }));
  }

  const addChallengeForm = (challenger) => {
  challenger.id = challengers.length + 1;
  setChallengers([...challengers, challenger]);
}

  const deleteChallenge = (id) => {
    setChallengers(challengers.filter((challenger) => challenger.item !== id));
  };

  return (
    <div className="container">
      <h1> Spice things up a Bit </h1>
      <h2>Help add to the Cooking Challenge Items</h2>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h3>Edit Challenge</h3>
              <EditChallengeForm
                editing={editing}
                setEditing={setEditing}
                currentChallenger={currentChallenger}
                updateChallenger={updateChallenger}
              />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddChallengeForm addChallengeForm={addChallengeForm} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h3>View Challenge</h3>
          <ChallengeTable
            challengers={challengers}
            deleteChallenge={deleteChallenge}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
