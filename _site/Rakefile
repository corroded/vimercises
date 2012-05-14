require 'rubygems'
require 'rake'
require 'haml'

desc 'Pre-compile the files'
task :pre_compile do
  puts "\nCompiling HAML files..."
  file_list = Dir.glob("**/*.haml")

  file_list.each do |file|
    file_contents = File.open(file, "r").read
    output_file_name = file.gsub(".haml", ".html")
    puts " *   Generating: #{output_file_name}"
    engine = Haml::Engine.new(file_contents)
    output = engine.render
    File.open(output_file_name, "w+") do |f|
      f.write(output)
    end
    puts " * #{output_file_name} generated!"
  end
  puts "HAML files compiled!\n\n"
end

# TODO: Add an auto start for jekyll to compile
task :deploy do
  Rake::Task["pre_compile"].execute

  puts "Adding all files in git"
  `git add .`
  puts "Adding deleted files"
  `git add -u .`
  puts "Add a commit message..."
  `git commit`
  puts "Pushing..."
  `git push origin gh-pages`
  puts "Deploy done!"
end
