import Team from './nbaTeam';

interface Props{
  teams: (string | number)[]
}

const Teams: React.FC<Props> = ({ teams }) => {

  return(
    <div className = "teams">
      {teams.map(team => (
        <Team
          key = {team.id}
          {...team}
        />
      ))}
    </div>
  )
};

export default Teams;