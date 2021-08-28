import pools from 'constants/pools';
import { fn } from '../../utils/api';

export default fn(pools, { maxAge: 10 * 60 });
