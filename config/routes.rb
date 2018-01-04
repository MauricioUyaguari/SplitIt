Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    namespace :api, default: {format: 'json'} do
      resources :users, only: [:create]
      resource :session, only: [:destroy, :create]
      resources :friends, only: [:show, :index, :create]
    end

end
