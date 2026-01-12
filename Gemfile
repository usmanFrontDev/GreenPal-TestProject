source "https://rubygems.org"

gem "rails", "~> 8.1.2"
gem "propshaft"

# NO DATABASE GEMS

gem "puma", ">= 5.0"
gem "importmap-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "htmlbeautifier"

gem "tzinfo-data", platforms: %i[ windows jruby ]

# COMMENT OUT - These need database
# gem "solid_cache"
# gem "solid_queue"
# gem "solid_cable"

gem "bootsnap", require: false
gem "kamal", require: false
gem "thruster", require: false

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ], require: "debug/prelude"
  gem "bundler-audit", require: false
  gem "brakeman", require: false
  gem "rubocop-rails-omakase", require: false
end

group :development do
  gem "web-console"
end

gem "jsbundling-rails", "~> 1.3"
gem "tailwindcss-rails", "~> 4.4"