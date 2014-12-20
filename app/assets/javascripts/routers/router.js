TrelloClone.Routers.Router = Backbone.Router.extend ({
	routes: {
		"": "boardsIndex",
		"boards/new": "newBoard",
		"boards/:id": "showBoard",
		"boards/:id/lists/new": "newList",
		"boards/:id/lists/:id/cards/new": "newCard"
	},

	initialize: function(options) {
		this.$el = options.$el;
	},

	boardsIndex: function() {
		var view = new TrelloClone.Views.BoardsIndex;
		TrelloClone.Collections.boards.fetch();
		this._swapView(view);
	},

	newBoard: function() {
		var view = new TrelloClone.Views.NewBoard({ collection: TrelloClone.Collections.boards });
		this._swapView(view);
	},

	newList: function(id) {
		var view = new TrelloClone.Views.NewList({ boardId: id });
		TrelloClone.Collections.boards.fetch();
		this._swapView(view);
	},

	newCard: function(boardId, listId) {
		var view = new TrelloClone.Views.NewCard({ listId: listId, boardId: boardId});
		TrelloClone.Collections.boards.fetch();
		this._swapView(view);
	},

	showBoard: function(id) {
		var model = TrelloClone.Collections.boards.getOrFetch(id);
		var view = new TrelloClone.Views.ShowBoard({ model: model });
		model.fetch({
			success: function() {
				view.addLists();
			}
		});
		this._swapView(view);
	},

	_swapView: function(view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view.render();
		this.$el.html(this._currentView.$el);
	}
})