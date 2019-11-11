json = ActiveSupport::JSON.decode(File.read('db/seeds/books.json'))
json.each do |record|
  Book.create!(record)
end
