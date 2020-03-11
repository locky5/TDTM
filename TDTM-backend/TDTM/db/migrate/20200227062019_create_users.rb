class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.integer :age
      t.string :gender
      t.string :genderpreference
      t.string :education
      t.string :height
      t.string :description
      t.string :photo_url

      t.timestamps
    end
  end
end
