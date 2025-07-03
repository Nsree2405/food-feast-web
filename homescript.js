
  const searchBtn = document.getElementById('search-btn');
  const popup = document.getElementById('search-popup');
  const closeBtn = document.getElementById('close-popup');
  const input = document.getElementById('search-input');
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'block';
    input.focus();
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = input.value.toLowerCase();
      if (query.includes('indian')) {
        window.open('menus/INDIAN.html', '_blank');
      } else if (query.includes('korean')) {
        window.open('menus/KOREAN.html', '_blank');
      } else if (query.includes('japanese')) {
        window.open('menus/JAPANESE.html', '_blank');
      } else if (query.includes('chinese')) {
        window.open('menus/CHINESE.html', '_blank');
      } else if (query.includes('thai')) {
        window.open('menus/THAI.html', '_blank');
      } else if (query.includes('italian')) {
        window.open('menus/ITALIAN.html', '_blank');
      } else if (query.includes('mexican')) {
        window.open('menus/MEXICAN.html', '_blank');
      } else if (query.includes('american')) {
        window.open('menus/AMERICAN.html', '_blank');
      } else {
        alert('No matching menu found.');
      }
      popup.style.display = 'none';
      input.value = '';
    }
  });
