export const getReportTimeTitle = (period: string): string => {
    const currentDate = new Date();
  
    const reportTitles: { [key: string]: string } = {
      "1Month": `Monthly Report - ${formatDate(currentDate)}`,
      "3Months": `Quarterly Report - Last 3 Months`,
      "6Months": `Semiannual Report - Last 6 Months`,
      "1Year": `Annual Report - ${currentDate.getFullYear()}`,
      "3Years": `3-Year Report - ${
        currentDate.getFullYear() - 3
      } to ${currentDate.getFullYear()}`,
      "5Years": `5-Year Report - ${
        currentDate.getFullYear() - 5
      } to ${currentDate.getFullYear()}`,
      AllTime: "All Time Report",
    };
  
    return reportTitles[period ?? ""] || "Custom Time Report";
  };

  export const getDashboardChatTimeTitle = (period: string): string => {
    const currentDate = new Date();
  
    const reportTitles: { [key: string]: string } = {
      "1Month": `Monthly - ${formatDate(currentDate)}`,
      "3Months": `Quarterly - Last 3 Months`,
      "6Months": `Semiannual - Last 6 Months`,
      "1Year": `Annual - ${currentDate.getFullYear()}`,
      "3Years": `3-Year - ${
        currentDate.getFullYear() - 3
      } to ${currentDate.getFullYear()}`,
      "5Years": `5-Year - ${
        currentDate.getFullYear() - 5
      } to ${currentDate.getFullYear()}`,
      AllTime: "All Time",
    };
  
    return reportTitles[period ?? ""] || "Custom Time Report";
  };
  
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };