"use strict"

const React = require('react');
const Router = require('react-router')
const Link = require('react-router').Link
const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorlist')
var Authors = React.createClass({

  getInitialState: function() {
    return {
      authors: []
    };
  },

  componentDidMount: function() {
    if (this.isMounted())
      {this.setState({ authors: AuthorApi.getAllAuthors() })
    }
  },

  render: function(){
    return (
        <div>
          <h1>Authors</h1>
          <Link to="addAuthor" className="btn btn-default">Add Author</Link>
          <AuthorList authors={this.state.authors}/>
        </div>
    );
  }
});

module.exports = Authors
