# RouteLog - Seyahat Rota Planlayıcı

Vanilla JavaScript ile yapılmış, tek sayfalık seyahat rotası planlayıcı.

## Özellikler

- **🗺️ Harita**: Leaflet + OpenStreetMap ile interaktif harita (4 harita stili)
- **✈️ Ulaşım**: Uçak, tren, otobüs, araba ve daha fazlası için rota ekleme
- **🏨 Konaklama**: Otel ve konaklama bilgisi girme
- **📍 Aktiviteler**: Gezilecek, yemek ve görülecek yerleri kategorize etme
- **💰 Toplam Maliyet**: Para birimi bazında otomatik hesaplama
- **📋 Kopyala/Yapıştır**: Segment, konaklama ve mekanları seyahatler arası taşıma
- **↕️ Sürükle-Bırak**: Seyahatleri ve segmentleri sıralama
- **🕐 Saat Sıralaması**: Aktiviteleri saate göre sıralama ve haritada rota olarak gösterme
- **🏷️ Akıllı Etiketler**: Hover'da veya zoom seviyesine göre şehir etiketlerini gösterme
- **💾 Veri Saklama**: localStorage ile tarayıcıda kalıcı kayıt, JSON dışa/içe aktarma
- **🔍 Koordinat Bulma**: Nominatim (OpenStreetMap) ile otomatik koordinat çözümleme

## Kullanım

1. `travel-planner.html` dosyasını tarayıcıda aç
2. "Yeni Seyahat" butonuyla seyahat oluştur
3. Seyahate tıkla, detay görünümünde ulaşım, konaklama ve aktivite ekle
4. Haritada rotaları ve noktaları görüntüle

## Teknolojiler

- Vanilla JavaScript (ES6+)
- Leaflet.js
- OpenStreetMap / Nominatim
- CSS Custom Properties
- localStorage API

## Lisans

MIT
