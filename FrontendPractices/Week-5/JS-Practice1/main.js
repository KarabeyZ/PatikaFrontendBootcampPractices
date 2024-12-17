document.addEventListener('DOMContentLoaded', (event) => {
    // Kullanıcıdan isim al ve sayfada göster
    let userName = prompt("Lütfen adınızı girin:");
    document.getElementById('myName').textContent = userName;
  
    // Saat ve tarihi gösteren fonksiyonu çağır
    showTime();
    showDate();
  });
  
  function showTime() {
    let clockElement = document.getElementById('myClock');
    setInterval(() => {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
  
      // Saat, dakika ve saniyeyi iki haneli olarak ayarla
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      let timeString = `${hours}:${minutes}:${seconds}`;
      clockElement.textContent = timeString;
    }, 1000);
  }
  
  function showDate() {
    let dateElement = document.getElementById('currentDate');
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1; // Aylar 0-11 arasında olduğu için +1 ekliyoruz
    let year = now.getFullYear();
  
    // Gün ve ayı iki haneli olarak ayarla
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
  
    let dateString = `${day}/${month}/${year}`;
    dateElement.textContent = dateString;
  }