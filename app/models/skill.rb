# frozen_string_literal: true

class Skill < ApplicationRecord
  has_many :sub_skills, class_name: 'Skill'
  belongs_to :skill, class_name: 'Skill', optional: true
  belongs_to :category, optional: true
end
