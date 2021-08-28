import { fn } from '../../utils/api';
import { getRegistry } from '../../utils/getters';

export default fn(async () => {
  const registryAddress = await getRegistry();
  return { registryAddress };
}, {
  maxAge: 3600, // 1 hour
});
