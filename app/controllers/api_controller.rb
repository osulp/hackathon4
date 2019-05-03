# frozen_string_literal: true

class ApiController < ApplicationController
  skip_before_action :authenticate_user!

  def skill
    @skills = if params[:id]
                parent = Skill.find(params[:id])
                { parent: parent, children: parent.sub_skills }
              else
                parents = Skill.where(skill_id: nil)
                parents.map { |p| { parent: p, children: p.sub_skills } }
              end
    render json: @skills
  end

  def skill_name
    parents = Skill.where('name LIKE ?', "%#{params[:name]}%")

    render json: parents.map { |p| { parent: p, children: p.sub_skills } }
  end

  def users_by_skill
    skill = Skill.find(params[:id])
    users = skill.assets.map { |a| a.profile.user.with_skills }

    render json: {
      skill: skill,
      users: users
    }
  end
end
