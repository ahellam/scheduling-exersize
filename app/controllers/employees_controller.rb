class EmployeesController < ApplicationController

    def index
        if params[:sort_by] == "first_name"
            render json: Employee.all.order(:first_name) 
        elsif params[:sort_by] == "last_name"
            render json: Employee.all.order(:last_name) 
        else
            # if no params specified, default to sorting by first_name 
            render json: Employee.all.order(:first_name) 
        end
    end

end




