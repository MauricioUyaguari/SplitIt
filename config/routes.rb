Rails.application.routes.draw do
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    namespace :api, defaults: {format: 'json'} do
      resources :users, only: [:create] do
        get "search", on: :collection
      end
      resource :session, only: [:destroy, :create]
      resources :friends, only: [:show, :index, :create]
      resources :bills, only: [:show, :index, :create, :destroy]
    end

end
