names = %w(null pow gam gege hoge momo alex john tom angel devil)
difficulty = ["easy", "normal", "impossible"]
names.each_with_index do |name, idx|
  Score.create(
           name: name,
           score: (idx + 1) * 100,
           difficulty: difficulty[idx % 3]
  )
end