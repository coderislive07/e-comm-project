export default function Electronics() {
  const products = [
    { id: 1, name: "Zebronics Zeb-Transformer-M Wireless Keyboard Mouse Combo", price: 1099.00, rating: 4, image: "https://m.media-amazon.com/images/I/61KZWPeNgHL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 2, name: "HP 255 G8 Laptop", price: 3599.00, rating: 4, image: "https://m.media-amazon.com/images/I/51hZtBRUFBL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 3, name: "Logitech M221 Wireless Mouse", price: 599.00, rating: 4, image: "https://m.media-amazon.com/images/I/41bEr2Oi3KL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 4, name: "Wacom One by CTL-472/K0-CX Small 6-inch x 3.5-inch Graphic Tablet", price: 2599.00, rating: 4, image: "https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 5, name: "ZEBRONICS Zeb-Sound Bomb 1 TWS Earbuds", price: 599.00, rating: 4, image: "https://m.media-amazon.com/images/I/51D37uhFFBL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 6, name: "NU Republic Zeta Adjustable Laptop Table", price: 299.00, rating: 4, image: "https://m.media-amazon.com/images/I/713Q0lVmCTL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 7, name: "ESR HaloLock Magnetic Wireless Car Charger Mount", price: 1599.00, rating: 4, image: "https://m.media-amazon.com/images/I/71ZMXqrB9XL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 8, name: "Sounce Study from Home Kit with Webcam", price: 259.00, rating: 3, image: "https://m.media-amazon.com/images/I/61+XjHbWrZL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 9, name: "Audio-Technica AT2020 Cardioid Condenser Studio Microphone", price: 7989.00, rating: 5, image: "https://m.media-amazon.com/images/I/71eM1Lx0CiL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 10, name: "SteelSeries Arctis Pro Wireless Gaming Headset", price: 7499.00, rating: 4, image: "https://m.media-amazon.com/images/I/51x9HSFrFrL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 11, name: "Acer Aspire 5 Gaming Laptop", price: 51999.00, rating: 4, image: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 12, name: "DIGITEK® (DSG 005) Gorilla Tripod", price: 1698.00, rating: 4, image: "https://m.media-amazon.com/images/I/61RGJpcuU0L._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 13, name: "Noise Buds VS104 Max", price: 1799.00, rating: 4, image: "https://m.media-amazon.com/images/I/61JdkOFXixL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 14, name: "Logitech M331 Silent Plus Wireless Mouse", price: 1295.00, rating: 4, image: "https://m.media-amazon.com/images/I/618-45t0P5L._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 15, name: "Mi 20000mAh Power Bank", price: 1999.00, rating: 5, image: "https://m.media-amazon.com/images/I/517A8JGGlsL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 16, name: "Cosmic Byte CB-GK-16 Firefly RGB Mechanical Keyboard", price: 2499.00, rating: 4, image: "https://m.media-amazon.com/images/I/61EsJy5XPBL._AC_UL480_FMwebp_QL65_.jpg" },
  ]

  return (
    <div style={{maxWidth: '1200px', margin: '0 auto', padding: '132px 16px'}}>
      <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center'}}>Top Trending Deals</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px'}}>
        {products.map((product) => (
          <div key={product.id} style={{
            position: 'relative',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <button 
              style={{
                position: 'absolute',
                right: '16px',
                top: '16px',
                zIndex: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                padding: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              }}
              aria-label="Add to wishlist"
            >
              ♡
            </button>
            <div style={{
              aspectRatio: '1',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              padding: '16px'
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <div style={{padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <h2 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                minHeight: '42px'
              }}>{product.name}</h2>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color: i < product.rating ? '#fbbf24' : '#6b7280',
                        fontSize: '16px'
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p style={{fontWeight: 'bold', fontSize: '18px', color: '#10b981'}}>₹{product.price.toLocaleString('en-IN')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}