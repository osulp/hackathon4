class Createassetsjoins < ActiveRecord::Migration[5.2]
 
  def change

    create_join_table :assets, :skills do |t|
      t.index [:asset_id, :skill_id]
    end
    create_join_table :assets, :tools do |t|
      t.index [:asset_id, :tool_id]
    end
  end
end
