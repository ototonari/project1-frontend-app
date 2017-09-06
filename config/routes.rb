Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "main#index"
  #get "main/new"
  #get "new" => "main#new", as: "new"
  get 'main/search'


  resources :scores do
    collection {
      get "search"
    }
  end

end
