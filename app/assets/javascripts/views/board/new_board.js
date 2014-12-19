TrelloClone.Views.NewBoard = Backbone.CompositeView.extend({
	events: {
		"submit": "addBoard"
	},

	initialize: function(options) {
	},

	template: JST['board/new_board'],

	render: function() {
		var content = this.template;
		this.$el.html(content);
		return this;
	},

	addBoard: function(event) {
		event.preventDefault();
		var newTitle = $(event.target).serializeJSON().board.title;
		var model = new TrelloClone.Models.Board({ title: newTitle });
		var that = this;
		model.save({}, 
			{success: function(model){
				that.collection.fetch();
				Backbone.history.navigate("boards/" + model.id, {trigger: true});
			}
		})
	}
});