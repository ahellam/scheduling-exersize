require 'rails_helper'
require 'pry'


RSpec.describe :EmployeesController do 
  before do
    e1 = Employee.create!(first_name: "Andy", last_name: "Zamburg")
    e2 = Employee.create!(first_name: "Zack", last_name: "Anderson")
    s1 = Shift.create!(employee_id: e1.id, day: 0, start_at: "12pm", end_at: "5pm", duration: 5, role: "Server", color: "red")
    s2 = Shift.create!(employee_id: e2.id, day: 1, start_at: "11am", end_at: "6pm", duration: 7, role: "Chef", color: "orange")
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

    # This also tests that the :name attribute method in employee serializer works
    it "returns names in correct order" do 
      expect(JSON.parse(response.body).first['name']).to eq("Andy Zamburg")
    end

    it "includes correct shifts hash" do 
      expect(JSON.parse(response.body).first['shifts'][0]).to eq(
        {"day" => 0,
        "start_at" => "12pm",
        "end_at" => "5pm",
        "duration" => 5,
        "role" => "Server",
        "color" => "red"}
      )
    end
  end

  ##########################################################

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

    it "includes correct shifts hash" do 
      expect(JSON.parse(response.body).first['shifts'][0]).to eq(
        {"day" => 1,
        "start_at" => "11am",
        "end_at" => "6pm",
        "duration" => 7,
        "role" => "Chef",
        "color" => "orange"}
      )
    end


  end
end





