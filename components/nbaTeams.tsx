import Team from './nbaTeam';

interface Props{
  teams: (string | number)[],
  renderTeamPage: Function
}

const Teams: React.FC<Props> = ({ teams, renderTeamPage }) => {

  return(
    <div className = "teams">
      {teams.map(team => (
        <Team
          key = {team.id}
          renderTeamPage = {renderTeamPage}
          {...team}
        />
      ))}
    </div>
  )
};

export default Teams;