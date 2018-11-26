var React = require('react');
var PropTypes = require('prop-types');

function SortRepos(props) {
  var sorters = ['Stars', 'Forks','Issues','Watchers'];
  return (
    <ul className='sorters avatar-grid-item'>
      {
        sorters.map(function(item){
          return (
            <li
              style={item === props.selectedFilter ? {color:'#d0021b'}:null}
              onClick={props.onSelect.bind(null,item)}
              key={item}>
              {item}
            </li>)
        },this)
      }
    </ul>
  )
}

SortRepos.propTypes = {
  selectedFilter:PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

module.exports = SortRepos;