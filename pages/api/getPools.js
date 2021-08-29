import pools from 'constants/pools';
import {fn} from '../../utils/api';

export default fn(async () => ({pools}), {
	maxAge: 10 * 60, // 10 mn
});
