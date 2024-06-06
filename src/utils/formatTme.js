export const formatTime = (timestamp) => {
  const updatedAtDate = new Date(timestamp);
  const hours = updatedAtDate.getHours();
  const minutes = updatedAtDate.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${hours >= 12 ? "pm" : "am"}`;
  return formattedTime;
};

export function getMessageTimeStamp(isoString) {
  const date = new Date(isoString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear().toString().slice(-2);

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  const formattedDate = `${day}/${month}/${year} - ${hours}:${minutes}${ampm}`;

  return formattedDate;
}
