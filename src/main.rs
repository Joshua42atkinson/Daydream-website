use axum::{
    routing::get,
    Router,
    response::{Html, IntoResponse},
    http::StatusCode,
};
use tower_http::services::ServeDir;
use std::net::SocketAddr;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() {
    // Initialize tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "ltd_portfolio=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Build our application with routes
    let app = Router::new()
        // Serve static files (CSS, JS, images)
        .nest_service("/css", ServeDir::new("docs/css"))
        .nest_service("/js", ServeDir::new("docs/js"))
        .nest_service("/images", ServeDir::new("docs/images"))
        // HTML page routes
        .route("/", get(serve_index))
        .route("/portfolio.html", get(serve_portfolio))
        .route("/about.html", get(serve_about))
        // API routes for future expansion
        .route("/api/health", get(health_check));

    // Run the server
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    tracing::info!("🚀 Server starting on http://{}", addr);
    tracing::info!("📁 Serving static files from ./docs");
    tracing::info!("🌐 Visit http://localhost:3000 to view your portfolio");
    
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

// Route handlers
async fn serve_index() -> impl IntoResponse {
    serve_html_file("docs/index.html").await
}

async fn serve_portfolio() -> impl IntoResponse {
    serve_html_file("docs/portfolio.html").await
}

async fn serve_about() -> impl IntoResponse {
    serve_html_file("docs/about.html").await
}

async fn health_check() -> impl IntoResponse {
    (StatusCode::OK, "OK")
}

// Helper function to serve HTML files
async fn serve_html_file(path: &str) -> impl IntoResponse {
    match tokio::fs::read_to_string(path).await {
        Ok(content) => (StatusCode::OK, Html(content)),
        Err(_) => (
            StatusCode::NOT_FOUND,
            Html("<h1>404 - Page Not Found</h1>".to_string()),
        ),
    }
}
