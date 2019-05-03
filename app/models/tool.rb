# frozen_string_literal: true

class Tool < ApplicationRecord
  has_many :sub_tools, class_name: 'Tool'
  belongs_to :tool, class_name: 'Tool', optional: true
end
