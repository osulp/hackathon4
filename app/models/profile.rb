class Profile< ApplicationRecord
  belongs_to :user
  has_many :assets
end