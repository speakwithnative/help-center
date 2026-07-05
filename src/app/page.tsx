import Link from "next/link";

export default function HomePage() {
  return (
      <section>
        <div className="p-5 mb-4 bg-light rounded-3">
          <h1 className="display-6 fw-bold">How can we help?</h1>
          <p className="lead">
            Learn how to use Speak with Native on web and mobile.
          </p>

          <Link href="/guides" className="btn btn-primary">
            View all guides
          </Link>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <Link href="/guides" className="card text-decoration-none h-100">
              <div className="card-body">
                <h2 className="h5">Getting Started</h2>
                <p className="text-muted">
                  Create your profile and start using the platform.
                </p>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="/web" className="card text-decoration-none h-100">
              <div className="card-body">
                <h2 className="h5">Web Platform</h2>
                <p className="text-muted">
                  Learn how to use Speak with Native on web.
                </p>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <Link href="/mobile" className="card text-decoration-none h-100">
              <div className="card-body">
                <h2 className="h5">Mobile App</h2>
                <p className="text-muted">
                  Learn how to use the mobile application.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
  );
}