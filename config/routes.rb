Rails.application.routes.draw do
  namespace :api do
    resources :books, only: %i[index show create destroy update]
  end
end
