class Createassets < ActiveRecord::Migration[5.2]
 
  def change

    create_table :interests do |t|
      t.string :name
    end
    
    create_table :experiences do |t|
      t.string :name
    end
    
    create_table :assets do |t|
      t.timestamp
    end
    add_reference :interests, :asset, index: true
    add_reference :experiences, :asset, index: true
    add_reference :assets, :profile, index: true
  end
end
