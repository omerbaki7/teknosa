<template>
  <footer class="teknosa-footer">
    <div class="footer-content container">
      
      <div class="footer-column">
        <h3>Popüler Ürünler</h3>
        <ul>
          <li><a href="#">iPhone 15</a></li>
          <li><a href="#">iPhone 15 Pro</a></li>
          <li><a href="#">Samsung Galaxy S24</a></li>
          <li><a href="#">Dyson Airwrap</a></li>
          <li><a href="#">Playstation 5</a></li>
          <li><a href="#">Philips Airfryer</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Popüler Kategoriler</h3>
        <ul>
          <li><a href="#">Cep Telefonu</a></li>
          <li><a href="#">Laptop / Notebook</a></li>
          <li><a href="#">Televizyon</a></li>
          <li><a href="#">Tablet</a></li>
          <li><a href="#">Akıllı Saat</a></li>
          <li><a href="#">Robot Süpürge</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Kurumsal</h3>
        <ul>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Mağazalarımız</a></li>
          <li><a href="#">Kariyer</a></li>
          <li><a href="#">Yatırımcı İlişkileri</a></li>
          <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
          <li><a href="#">Gizlilik Politikası</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Yardım</h3>
        <ul>
          <li><a href="#">Sipariş Takibi</a></li>
          <li><a href="#">İade ve İptal</a></li>
          <li><a href="#">Garanti ve Servis</a></li>
          <li><a href="#">İletişim</a></li>
          <li><a href="#">Yardım Merkezi</a></li>
        </ul>
      </div>

      <div class="footer-column contact-column">
        <p class="contact-title">Çağrı Merkezi / Sipariş Hattı</p>
        <p class="phone-number">📞 0850 222 55 99</p>
        <p class="working-hours">Pazartesi - Pazar | 09:00 - 22:00</p>
        <button class="contact-btn">Sipariş Takibi</button>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="container bottom-content">
        <div class="social-media">
          <span>Bizi Takip Edin:</span>
          <a href="#" class="social-icon">f</a>
          <a href="#" class="social-icon">X</a>
          <a href="#" class="social-icon">in</a>
          <a href="#" class="social-icon">YT</a>
          <a href="#" class="social-icon">Ig</a>
        </div>
        <div class="copyright">
          © 2025 Teknosa.com, Her hakkı saklıdır.
        </div>
        <div class="security-badges">
            <span>🔒 Güvenli Alışveriş</span>
            <span>💳 Master/Visa</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.teknosa-footer {
  background-color: white;
  border-top: 1px solid #eee;
  margin-top: 3rem;
  padding-top: 3rem;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Link Sütunları */
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding-bottom: 3rem;
}

.footer-column h3 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 0.8rem;
}

.footer-column ul li a {
  text-decoration: none;
  color: #666;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-column ul li a:hover {
  color: #ff6000;
  text-decoration: underline;
}

/* Çağrı Merkezi Kutusu */
.contact-column {
  text-align: right;
}

.contact-title {
  font-weight: bold;
  font-size: 0.9rem;
  color: #333;
}

.phone-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0;
}

.working-hours {
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1rem;
}

.contact-btn {
  background-color: #383e5c;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

/* Alt Kısım */
.footer-bottom {
  background-color: #383e5c;
  color: white;
  padding: 1.5rem 0;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-media {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-icon {
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid rgba(255,255,255,0.3);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.8rem;
}

.copyright {
  font-size: 0.8rem;
  color: #ccc;
}

.security-badges span {
    margin-left: 10px;
    font-size: 0.8rem;
    color: #ccc;
}
</style>