class ShiftSerializer < ActiveModel::Serializer
  attributes :day, :start_at, :end_at, :duration, :role, :color
  belongs_to :employee
end
