# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :tools
  has_many :skills
end
