require 'rails_helper'
require 'pry'
# Request URL: http://localhost:3000/employees?sort_by=first_name

RSpec.describe :EmployeesController do 
  before do
    e1 = Employee.create!(first_name: "Andy", last_name: "Zamburg")
    e2 = Employee.create!(first_name: "Zack", last_name: "Anderson")
  end

  describe "GET #index with first_name params" do

    before do
      get '/employees?sort_by=first_name'
    end

    # it do
    # binding.pry
    # end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "returns names in correct order" do 
      expect(JSON.parse(response.body).first['name']).to eq("Andy Zamburg")
    end
  end

  describe "GET #index with last_name params" do

    before do
      get '/employees?sort_by=last_name'
    end

    # it do
    # binding.pry
    # end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "returns names in correct order" do 
      expect(JSON.parse(response.body).first['name']).to eq("Zack Anderson")
    end

  end
end





