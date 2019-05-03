# frozen_string_literal: true

Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: 'home#index'
  devise_for :users
  devise_scope :user do
    authenticated :user do
      root to: 'home#index', as: :authenticated_root
    end
  end

  get '/api/skills', to: 'api#skill'
  get '/api/skills/:id', to: 'api#skill'
end
