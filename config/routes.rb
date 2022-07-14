Rails.application.routes.draw do
  resources :signups, only: [:index, :create]
  resources :courts, only: [:index]
  resources :users, only: [:index, :show, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end