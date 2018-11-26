var React =  require('react');
var Link =require('react-router-dom').Link;



function RepoWidget(props){
  return (
    <div className='widget'>
      <div className='widget-item'>language: {props.repo.language}</div>
      <div className='widget-item'>star gazers: {props.repo.stargazers_count}</div>
      <div className='widget-item'>forks: {props.repo.forks_count}</div>
      <div className='widget-item'>{props.repo.open_issues} issues need help</div>
      <div className='widget-item'>watchers:{props.repo.watchers}</div>
      <Link className='widget-item'
            to={{
              pathname: '/commits',
              search: `?name=${props.repo.name}&owner=${props.repo.owner.login}`
            }}>
        Browse Commit History
      </Link>
    </div>
  )
}

function RepoProfile(props) {
  return (
    <div>
      <ul className='repos-list'>
        {props.repos.map((repo) => {
          return (
            <li key={repo.name} className='repo-item'>
              <h3>{repo.name}</h3>
              <div><p>{repo.description}</p></div>
              <RepoWidget repo={repo} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

module.exports = RepoProfile;