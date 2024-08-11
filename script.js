document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('dateInput');
    const calculateButton = document.getElementById('calculateButton');
    const result = document.getElementById('result');
    const daysLeftElement = document.getElementById('daysLeft');
    const warning = document.getElementById('warning');
    const pdfButton = document.getElementById('pdfButton');
  
    // Set minimum date to today's date
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  
    calculateButton.addEventListener('click', () => {
      const targetDate = new Date(dateInput.value);
      const todayDate = new Date();
      const timeDiff = targetDate.getTime() - todayDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
      if (daysDiff > 0) {
        daysLeftElement.textContent = `${daysDiff} days left`;
        result.classList.remove('hidden');
        warning.classList.add('hidden');
      } else {
        result.classList.add('hidden');
        warning.classList.remove('hidden');
      }
    });
  
    pdfButton.addEventListener('click', () => {
      const daysDiff = daysLeftElement.textContent.split(' ')[0];
      const gridCols = 30;
      const gridRows = Math.ceil(parseInt(daysDiff) / gridCols);
  
      // For demonstration, we'll just show an alert
    //   alert(`Downloading PDF with ${daysDiff} days represented in a ${gridCols} x ${gridRows} grid`);
        window.location.href = `/index.html?days=${daysDiff}`;
    });
  });
  