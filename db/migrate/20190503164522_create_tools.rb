# frozen_string_literal: true

class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :name, null: false, default: ''
      t.references :tool, index: true
      t.timestamps
    end
  end
end
