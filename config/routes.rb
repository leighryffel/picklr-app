Rails.application.routes.draw do
  resources :signups
  resources :courts
  resources :users
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end