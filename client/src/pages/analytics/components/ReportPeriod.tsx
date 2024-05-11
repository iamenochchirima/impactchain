import React from 'react';

interface ReportPeriodProps {
  periodOfTime?: string;
}

const ReportPeriod: React.FC<ReportPeriodProps> = ({ periodOfTime }) => {
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getReportTitle = (period?: string): string => {
    const currentDate = new Date();

    const reportTitles: { [key: string]: string } = {
      '1Month': `Monthly Report - ${formatDate(currentDate)}`,
      '3Months': `Quarterly Report - Last 3 Months`,
      '6Months': `Semiannual Report - Last 6 Months`,
      '1Year': `Annual Report - ${currentDate.getFullYear()}`,
      '3Years': `3-Year Report - ${currentDate.getFullYear() - 3} to ${currentDate.getFullYear()}`,
      '5Years': `5-Year Report - ${currentDate.getFullYear() - 5} to ${currentDate.getFullYear()}`
    };

    return reportTitles[period ?? ''] || 'Custom Time Report';
  };

  return (
    <span className='border py-2 px-3 mt-6 rounded-full'>
      {getReportTitle(periodOfTime)}
    </span>
  );
}

export default ReportPeriod;
