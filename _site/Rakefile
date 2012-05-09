require 'rubygems'
require 'rake'
require 'haml'

desc 'Pre-compile the files'
task :pre_compile do
  puts "\nCompiling HAML files..."
  file_list = Dir.glob("**/*.haml")

  file_list.each do |file|
    file_contents = File.open(file, "r").read
    engine = Haml::Engine.new(file_contents)
    output = engine.render
    output_file_name = file.gsub(".haml", ".html")
    puts " *   Generating: #{output_file_name}"
    File.open(output_file_name, "w+") do |f|
      f.write(output)
    end
  end
  puts "HAML files compiled!\n\n"
end
