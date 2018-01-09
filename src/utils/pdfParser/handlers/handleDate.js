import moment from 'moment';
import { DATE_CHECK, DATE_FORMAT, SPACES } from '../constants'

const parseDate = (line, receiptType) => {
  const dateString = line.match(DATE_CHECK[receiptType])[0].replace(SPACES, ' '); // make sure we have correct number of spaces in parsing date
  return moment(dateString, DATE_FORMAT[receiptType]).toDate();
}

const handleDate = ({acc, line, receiptType}) => ({ ...acc, date: parseDate(line, receiptType) });

export default handleDate;
