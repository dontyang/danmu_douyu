Rails.application.routes.draw do
  resources :danmus, only: :create
end
