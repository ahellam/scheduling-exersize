class EmployeeSerializer < ActiveModel::Serializer
  attributes :name
  has_many :shifts
  def name 
    "#{object.first_name} #{object.last_name}"
  end
end
