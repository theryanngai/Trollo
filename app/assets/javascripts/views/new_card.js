TrelloClone.Views.NewCard = Backbone.View.extend({
	events: {
		"submit": "addCard"
	},

	initialize: function(options) {
		this.listenTo(TrelloClone.Collections.boards, "sync", this.render);
		this.listId = options.listId;
		this.boardId = options.boardId;
	},

	template: JST['new_card'],

	render: function() {
		var content = this.template({ listId: this.listId });
		this.$el.html(content);
		return this;
	},

	addCard: function(event) {
		event.preventDefault();
		var attrs = $(event.target).serializeJSON().card;
		var model = new TrelloClone.Models.Card(attrs);;
		var that = this;
		model.save({}, 
			{
				success: function(model){
					TrelloClone.Collections.boards.fetch();
					Backbone.history.navigate("/boards/" + that.boardId, {trigger: true});
			}
		})
	}
});