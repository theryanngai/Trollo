TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
	events: {
		'click .delete': 'deleteBoard'
	},

	initialize: function(options) {
		this.listenTo(TrelloClone.Collections.boards, "add", this.addSubview);
		this.listenTo(TrelloClone.Collections.boards, "remove", this.removeSubview);
		this.subviews = [];
		TrelloClone.Collections.boards.each(function(board) {
			this.addSubview(board);
		}.bind(this));
	},

	addSubview: function(board) {
		var itemView = new TrelloClone.Views.BoardsIndexItem({  model: board });
		this.subviews.push(itemView.render());
		this.attachSubview(itemView);
	},

	removeSubview: function(board) {
		var subview = _.find(this.subviews, function(subview) {
			if(subview.model.id === board.id) {
				return true;
			}
		});

		subview.remove();
		this.subviews.splice(this.subviews.indexOf(subview), 1);
	},

	attachSubview: function(subview) {
		this.$('.boards').append(subview.$el);
	},

	template: JST['board/boards_index'],

	render: function() {
		var content = this.template;
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},

	attachSubviews: function() {
		this.subviews.forEach(function(subview) {
			this.attachSubview(subview);
		}.bind(this))
	}
});