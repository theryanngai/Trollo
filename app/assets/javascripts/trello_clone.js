window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var $body = $('body');
  	new TrelloClone.Routers.Router({ $el: $body });
  	Backbone.history.start();
  }
};