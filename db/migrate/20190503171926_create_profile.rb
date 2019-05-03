class CreateProfile < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :department
      t.timestamps
      t.integer :user_id
    end
  end

  
end
