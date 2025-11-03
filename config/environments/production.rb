require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.enable_reloading = false
  config.eager_load = true
  config.consider_all_requests_local = false
  config.action_controller.perform_caching = true
  
  # Serve static files
  config.public_file_server.enabled = true
  config.public_file_server.headers = { "cache-control" => "public, max-age=31536000" }

  # Simple cache
  config.cache_store = :memory_store

  config.log_tags = [ :request_id ]
  config.logger = ActiveSupport::TaggedLogging.logger(STDOUT)
  config.log_level = ENV.fetch("RAILS_LOG_LEVEL", "info")
  
  config.active_support.report_deprecations = false
  config.i18n.fallbacks = true
end