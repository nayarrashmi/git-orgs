var axios = require('axios');
var sortHelper = require('./sortHelper');

var id = "52efeac53fa369e34958";
var sec = "7309885aa59ee3e60224036eed108765dba4eb3e";
var params = "?client_id=" + id + "&client_secret=" + sec;

function handleError (error) {
  console.warn(error);
  return null;
}

module.exports = {
  getOrganizationsRepos: function (organization) {
    var encodedURI = window.encodeURI("https://api.github.com/orgs/"+organization+"/repos"+ params + '&per_page=100');
    return axios.get(encodedURI)
      .then (function (repos) {
        return sortHelper.sortArrayOfObjects(repos.data,'stargazers_count');
      })
      .catch(handleError);
  },

   getCommitHistory: function(repo) {
    var encodedURI = window.encodeURI("https://api.github.com/repos/"+repo.owner+"/"+repo.name + '/commits'+ params + '&per_page=100');
    return axios.get(encodedURI)
      .then (function (repos) {
        return repos.data;
      })
      .catch(handleError);
  },

  getOrganizations: function(org){
    var encodedURI = window.encodeURI("https://api.github.com/orgs/"+org+ params + '&per_page=100');
    return axios.get(encodedURI)
      .then(function(orgData){
        return orgData.data;
      })
  }

};