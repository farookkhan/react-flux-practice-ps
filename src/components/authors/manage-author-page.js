"use strict"

const React = require('react');
const AuthorForm = require('./author-form')
const AuthorApi = require('../../api/authorApi')
const Router = require('react-router')

const ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return{
      author: { id: '', firstName: '', lastName: '' }
    }
  },

  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({ author: this.state.author});
  },

  saveAuthor: function(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    this.transitionTo('authors')
  },

  render: function(){
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
      />
    );
  }

})

module.exports = ManageAuthorPage;
