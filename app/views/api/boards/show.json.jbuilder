json.(@board, :title, :user_id)

json.lists do
	json.array!(@board.lists) do |list|
		json.(list, :id, :title, :ord, :board_id)
		json.cards list.cards do |card|
			json.(card, :id, :description, :list_id)
		end
	end
end






