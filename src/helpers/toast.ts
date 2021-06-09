import { toast } from 'react-toastify';

const notify = (
  type: 'info' | 'success' | 'warn' | 'error',
  message: string
) => toast[type](message);

export default notify;