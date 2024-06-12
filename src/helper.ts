/* import { time } from "console" */

export function formatDate(dateString: string): string {
    const date = new Date(dateString)
  
    const options: Intl.DateTimeFormatOptions = {
      day:'numeric',
      month: 'numeric',
      year: 'numeric',
      hour12: false,
      timeZone: 'Europe/Paris'
    }
  
    const formatter = new Intl.DateTimeFormat('fr-FR', options)
    const formattedDate = formatter.format(date)
  
    return formattedDate.slice(0, 10)
};

