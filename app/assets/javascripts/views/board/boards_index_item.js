TrelloClone.Views.BoardsIndexItem = Backbone.CompositeView.extend({
	tagName: "li",
	events: {'click .delete-board': 'deleteBoard'},

	deleteBoard: function(event) {
		this.model.destroy();
	},

	template: JST["board/boards_index_item"],

	render: function() {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		return this;
	}
});