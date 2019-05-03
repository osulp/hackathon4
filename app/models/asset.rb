# frozen_string_literal: true

class Asset < ApplicationRecord
    belongs_to :profile
    has_many :interests
    has_many :experiences
    has_and_belongs_to_many :skills
    has_and_belongs_to_many :tools

end
