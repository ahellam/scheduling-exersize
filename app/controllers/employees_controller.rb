class EmployeesController < ApplicationController

    def index
        if params[:sort_by] == "first_name"
            # /employees?sort_by=first_name
            render json: Employee.all.order(:first_name) 

        elsif params[:sort_by] == "last_name"
            # /employees?sort_by=last_name
            render json: Employee.all.order(:last_name) 
        else
            # if no query params specified, default to json described in README
            render json: Employee.all
        end
    end

end




