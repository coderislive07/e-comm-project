export default function Mobandaccess() {
  const products = [
    { id: 1, name: "Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage)", price: 14990.00, rating: 4, image: "https://m.media-amazon.com/images/I/81ZSn2rk9WL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 2, name: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)", price: 19999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61QRgOgBx0L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 3, name: "realme narzo N55 (Prime Blue, 6GB+128GB) 33W Segment Fastest Charging", price: 10999.00, rating: 4, image: "https://m.media-amazon.com/images/I/81ogvU1j6qL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 4, name: "iQOO Z7s 5G by vivo (Norway Blue, 8GB RAM, 128GB Storage)", price: 18999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61JS7lF2aqL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 5, name: "Redmi 12C (Matte Black, 4GB RAM, 64GB Storage)", price: 8499.00, rating: 4, image: "https://m.media-amazon.com/images/I/81YEyQqHjPL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 6, name: "Apple iPhone 14 (128 GB) - Midnight", price: 69999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61cwywLZR-L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 7, name: "Redmi Note 12 5G Mystique Blue 6GB RAM 128GB ROM", price: 18999.00, rating: 4, image: "https://m.media-amazon.com/images/I/81ZZPvIWnYL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 8, name: "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage", price: 7499.00, rating: 4, image: "https://m.media-amazon.com/images/I/813sVzTfvaL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 9, name: "Redmi A2 (Classic Black, 2GB RAM, 32GB Storage)", price: 5699.00, rating: 4, image: "https://m.media-amazon.com/images/I/81RRU5yR6eL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 10, name: "realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage)", price: 7599.00, rating: 4, image: "https://m.media-amazon.com/images/I/81WPIz1l5wL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 11, name: "Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage)", price: 18999.00, rating: 4, image: "https://m.media-amazon.com/images/I/8104evx11QL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 12, name: "Tecno Spark 9 5G (Meta Blue, 8GB RAM,256GB Storage)", price: 14999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61yHIxBZ6iL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 13, name: "Lava Blaze 5G (Glass Green, 6GB RAM, 128GB Storage)", price: 11999.00, rating: 4, image: "https://m.media-amazon.com/images/I/516SDDhc+PL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 14, name: "Nokia C12 Android 12 (Go Edition) Smartphone, All-Day Battery", price: 5399.00, rating: 3, image: "https://m.media-amazon.com/images/I/71x+m2-yb7L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 15, name: "Itel Aura 05i (4GB RAM + 64GB ROM, 6000mAh Battery)", price: 6299.00, rating: 4, image: "https://m.media-amazon.com/images/I/81tKmTANiLL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 16, name: "Motorola g32 (Mineral Gray, 8GB RAM 128GB Storage)", price: 11999.00, rating: 4, image: "https://m.media-amazon.com/images/I/41mQKmbkVWL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 17, name: "Spigen Ultra Hybrid Back Cover Case for iPhone 14 Pro Max", price: 1599.00, rating: 4, image: "https://m.media-amazon.com/images/I/61sDyXAepuL.AC_UY327_FMwebp_QL65.jpg" },
  { id: 18, name: "Ambrane 10000mAh Slim Power Bank, 20W Fast Charging", price: 699.00, rating: 4, image: "https://m.media-amazon.com/images/I/31grUs8OpvL.AC_UY327_FMwebp_QL65.jpg" },
  { id: 19, name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds", price: 1299.00, rating: 4, image: "https://m.media-amazon.com/images/I/51HBom8xz7L.AC_UY327_FMwebp_QL65.jpg" },
 { id: 20, name: "MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery", price: 2199.00, rating: 4, image: "https://m.media-amazon.com/images/I/71lVwl3q-kL.AC_UY327_FMwebp_QL65.jpg" },
  { id: 21, name: "Amazon Basics Lightning to USB A Cable", price: 399.00, rating: 4, image: "https://m.media-amazon.com/images/I/61stQYWQO4L.AC_UY327_FMwebp_QL65.jpg" },
  { id: 22, name: "Anker Nano 20W iPhone Fast Charger", price: 1099.00, rating: 4, image: "https://m.media-amazon.com/images/I/31wacBawB3L.AC_UY327_FMwebp_QL65.jpg" },
  { id: 23, name: "Noise ColorFit Pulse 2 Max Advanced Bluetooth Calling Smart Watch", price: 1999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61Q0R5cdxWL.AC_UY327_FMwebp_QL65.jpg" },
  { id: 24, name: "Fire-Boltt Phoenix Smart Watch with Bluetooth Calling", price: 1999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61S9aVnRZDL.AC_UY327_FMwebp_QL65.jpg" },

 ];

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