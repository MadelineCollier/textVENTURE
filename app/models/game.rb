class Game < ApplicationRecord
  has_many :states, dependent: :destroy

  validates :name, presence: true
  validates :name, uniqueness: true

  def self.init_game(game_name, state_name, beginning_state)
    game = Game.new(name: game_name)
    if game.save
      initial_state = State.new(name: state_name, description: beginning_state, game_id: game.id)
      if initial_state.save
        game.initial_state_id = initial_state.id
        game.save
        return game, initial_state
      else
        raise 'something went wrong with saving the state!'
      end
    else
      raise 'something went wrong with creating the game!'
    end
  end

  def self.find_game_names
    Game.where(publish: true).map { |game| game.name }
  end
end
