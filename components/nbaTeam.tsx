import React from "react";

interface Props{
  id: number,
  abbreviation: string,
  conference: string,
  divison: string,
  full_name: string
}

const Team: React.FC<Props> = ({
  id,
  abbreviation,
  conference,
  divison,
  full_name
}) => {

};

export default Team;