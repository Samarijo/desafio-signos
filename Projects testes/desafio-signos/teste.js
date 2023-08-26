function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  
  const currentDate = new Date();
  const formattedDate = formatDateToYYYYMMDD(currentDate);
  console.log(formattedDate);  // Saída: "2023-08-25"
 
  
  
  
  
  