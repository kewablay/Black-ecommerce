export  const formatTime = (timestamp) => {
    const updatedAtDate = new Date(timestamp);
    const hours = updatedAtDate.getHours();
    const minutes = updatedAtDate.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${hours >= 12 ? "pm" : "am"}`;
    return formattedTime;
  };