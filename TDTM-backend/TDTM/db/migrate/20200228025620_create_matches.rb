class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.belongs_to :user
      t.integer :user_id2
      t.timestamps
    end
  end
end
