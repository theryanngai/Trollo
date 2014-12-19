TrelloClone.Views.NewList = Backbone.View.extend({
	events: {
		"submit": "addList"
	},

	initialize: function(options) {
		this.listenTo(TrelloClone.Collections.boards, "sync", this.render);
		this.boardId = options.boardId;
	},

	template: JST['new_list'],

	render: function(event) {
		var content = this.template;
		this.$el.html(content);
		return this;
	},

	addList: function(event) {
		event.preventDefault();
		var newTitle = $(event.target).serializeJSON().list.title;
		var model = new TrelloClone.Models.List({ title: newTitle, board_id: this.boardId });
		var that = this;
		model.save({}, 
			{success: function(model){
				TrelloClone.Collections.boards.fetch();
				Backbone.history.navigate("boards/" + that.boardId, {trigger: true});
			}
		})
	}
});