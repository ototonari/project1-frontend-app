class Score < ApplicationRecord

  validates :name, length: { maximum: 30 }, presence: true
  validates :score, presence: true,
            format: { with: /\A\d(\d\.)*/ }


  class << self
    def show_score(num = 5)
      order(score: :asc).limit(num)
    end

    def search(query)
      rel = order(score: :asc)
      if query.present?
        rel = where("difficulty LIKE ?", "%#{query}%")
      end
      rel
    end
  end
end
