export const formatDate = (timestamp: string | number): string => {
    const date = new Date(Number(timestamp));
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
    return date.toLocaleDateString("en-US", options);
  };