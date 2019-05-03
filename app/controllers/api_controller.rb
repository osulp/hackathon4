# frozen_string_literal: true

class ApiController < ApplicationController
  skip_before_action :authenticate_user!

  def skill
    @skills = if params[:id]
                parent = Skill.find(params[:id])
                { parent: parent, child: parent.sub_skills.first }
              else
                parents = Skill.where(skill_id: nil)
                parents.map { |p| { parent: p, child: p.sub_skills.first } }
              end
    render json: @skills
  end
end
