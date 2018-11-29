class CreateScores < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer "score"
      t.timestamps
      t.integer "user_id"
    end
  end
end
