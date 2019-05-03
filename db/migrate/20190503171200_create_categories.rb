# frozen_string_literal: true

class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name, null: false, default: ''
      t.timestamps
    end

    add_reference :tools, :category, index: true
    add_reference :skills, :category, index: true
  end
end
