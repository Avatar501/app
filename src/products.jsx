import 'bootstrap/dist/css/bootstrap.min.css';

export default function Products({ title, price, thumbnail }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm h-100">
                <img 
                    className="card-img-top img-fluid"
                    src={thumbnail} 
                    alt={title} 
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <p className="card-text text-muted">${price}</p>
                    <div className="mt-auto">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-block btn-sm"
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
