import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  //location: 'none'
  //rootURL : '/tutor/'
  location: config.locationType,

});

Router.map(function() {
  this.route('login', { path: '/' });
  this.route('loginto', {path: '/api/login'});
  this.route('logout', { path: '/logout' });
  this.route('check', { path: '/check' });
  this.route('testpage', {path: '/testpage'});
  this.route('result', {path: '/result'});
  this.route('starttest', {path: '/starttest'});
  this.route('terminate', {path: '/terminate'});
  this.route('testlaunch', { path: '/testlaunch' });
  this.route('view', { path: '/view' });

//  this.route('finished', { path: '/results' });
//  this.route('questions', { path: '/questions' });
//  this.route('loginFailed', { path: '/loginFailed' });
  this.route('mainpage', { path : 'mainPage'});
//  this.route('Desc', { path : 'Desc'});
  //this.route('tests', { path: '/tests' });
//  this.resource('test', { path: '/:test_id' });
});

export default Router;
