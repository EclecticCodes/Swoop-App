// schemas/schema.ts
import cat from './cat';
import foster from './foster';

export const schema = {
  name: 'default',
  types: 'schemaTypes.concat([cat,foster])',
};