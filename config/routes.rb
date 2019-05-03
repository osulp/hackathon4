# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
  devise_scope :user do
    authenticated :user do
      root to: 'home#index', as: :authenticated_root
    end
  end
end
