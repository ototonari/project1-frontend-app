class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.string :name, null: false
      t.float :score, null: false
      t.string :difficulty, null: false
      t.date :datetime
      t.timestamps
    end
  end
end
