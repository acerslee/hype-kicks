import React from "react";

interface Props{
  id: number,
  abbreviation: string,
  conference: string,
  division: string,
  full_name: string
  renderTeamPage: Function
}

const Team: React.FC<Props> = ({id, abbreviation, conference, division,full_name, renderTeamPage}) => {
  return(
    <div
      className = "team-card"
      onClick = {() => renderTeamPage(id)}
    >
       <p>{abbreviation}</p>
       <p>{conference}</p>
       <p>{division}</p>
       <p>{full_name}</p>
    </div>
  )
};

export default Team;