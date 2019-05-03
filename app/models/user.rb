# frozen_string_literal: true

class User < ApplicationRecord
  devise :cas_authenticatable
  has_one :profile, inverse_of: :user

  def cas_extra_attributes=(extra_attributes)
    extra_attributes.each do |name, value|
      case name.to_sym
      when :email
        self.email = value
      end
    end
  end
end
